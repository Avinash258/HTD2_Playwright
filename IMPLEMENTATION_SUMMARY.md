# Cart Test Improvements - Implementation Summary

## Overview
Four key improvements have been implemented in the cart test suite to enhance reliability, reduce flakiness, and improve debugging:

1. **Auto-waiting internals**
2. **waitForSelector/Response**
3. **Retries with exponential backoff**
4. **Flaky test debugging**

---

## 1. Auto-waiting Internals ✅

### What's Implemented
- **Page Stability Waits**: `waitForPageStability()` ensures the page reaches a fully stable state before proceeding
- **Network Idle Detection**: Waits for `networkidle` state to ensure all network requests complete
- **DOM Readiness**: Verifies `document.readyState === 'complete'`

### Location: `src/Utils/helper.ts`
```typescript
export async function waitForPageStability(page: Page, timeoutMs: number = 5000)
```

### Usage in Tests
```typescript
await waitForPageStability(page, 3000);  // Wait 3 seconds max for stability
```

### Benefits
- Eliminates timing issues caused by late-loading content
- Reduces false positives from elements that haven't rendered yet
- Automatically retries if animations are in progress

---

## 2. waitForSelector/Response ✅

### What's Implemented

#### A. Wait for Selector with Retry
```typescript
export async function waitForSelectorWithRetry(
    page: Page,
    selector: string,
    config: RetryConfig
): Promise<void>
```
- Waits for element to be visible
- Auto-retries with exponential backoff
- Handles dynamic content loading

#### B. Wait for Network Response with Retry
```typescript
export async function waitForResponseWithRetry(
    page: Page,
    urlPattern: string | RegExp,
    config: RetryConfig
): Promise<void>
```
- Waits for specific network responses
- Patterns: `/api/cart`, `/login`, etc.
- Retries on network timeouts

#### C. Wait for Locator Visibility
```typescript
export async function waitForLocatorVisible(
    locator: Locator,
    config: RetryConfig
): Promise<void>
```
- Waits for Playwright `Locator` to be visible
- Built-in 5-second timeout
- Debugging console logs

### Enhanced CartAction Methods
All CartAction methods now use waits:
```typescript
async addBackpackToCart(config: RetryConfig = DEFAULT_RETRY_CONFIG) {
    await retryWithExponentialBackoff(
        async () => {
            await waitForLocatorVisible(this.cartPage.addBackpackButton);
            await this.cartPage.addBackpackButton.click();
            await waitForPageStability(this.cartPage.page, 3000);
        },
        config
    );
}
```

---

## 3. Retries with Exponential Backoff ✅

### What's Implemented
```typescript
export async function retryWithExponentialBackoff<T>(
    operation: () => Promise<T>,
    config: RetryConfig = DEFAULT_RETRY_CONFIG
): Promise<T>
```

### Retry Configuration
```typescript
interface RetryConfig {
    maxRetries?: number;      // Default: 3
    delayMs?: number;         // Default: 500
    timeoutMs?: number;       // Default: 5000
    debug?: boolean;          // Default: true
}
```

### Exponential Backoff Strategy
- **Attempt 1**: Wait 500ms before retry
- **Attempt 2**: Wait 1000ms before retry (500 × 2¹)
- **Attempt 3**: Wait 2000ms before retry (500 × 2²)

### Test-Level Retries
```typescript
test.describe.configure({
    timeout: 30000,
    retries: process.env.CI ? 2 : 1,  // 2 retries on CI, 1 locally
});
```

### Custom Retry Overrides
```typescript
await appAction.cart.addBackpackToCart({
    maxRetries: 5,
    delayMs: 1000,
    timeoutMs: 10000,
    debug: true,
});
```

### Retry Multiplication Effect

When both test-level retries and action-level retries are active, the total retry attempts multiply:

**Formula**: `totalAttempts = (1 + testRetries) × (1 + actionRetries)`

**Example with current defaults:**
- Test-level retries: 1 (locally)
- Action-level retries: 3 (DEFAULT_RETRY_CONFIG)
- Total attempts: (1 + 1) × (1 + 3) = **8 attempts per test**

On CI with 2 test-level retries:
- Total attempts: (1 + 2) × (1 + 3) = **12 attempts per test**

**Guidance:**
- When both layers are active, the total time can exceed test timeout (30000ms). Consider reducing one of the retry counts if tests timeout.
- If a test fails consistently across 8+ attempts, investigate the root cause instead of accepting transient failures.
- For flaky network operations, prefer lowering test-level retries and keeping action-level retries moderate (maxRetries: 2-3).
- If action-level retries are exhausted, escalate to investigation rather than relying on test-level retries to mask issues.

---

## 4. Flaky Test Debugging ✅

### What's Implemented

#### A. Structured Console Logging
All operations log with clear prefixes:
```
[Test Setup] Starting test - navigating to base URL...
[CartAction] Getting cart items count...
[CartAction] Found 3 cart items
[Retry Attempt 1/3] Starting operation...
[Retry Attempt 1/3] Failed: Element not visible (timeout 5000ms)
[WaitForSelector] Found selector: #add-to-cart-...
```

#### B. Error Tracking
```typescript
[Retry Attempt 1/3] Failed: Selector not found
[Retry] Waiting 500ms before retry...
[Retry Attempt 2/3] Starting operation...
```

#### C. Test-Level Debugging
```typescript
test("TC04 - User can add backpack", async ({ appAction, page }) => {
    try {
        console.log("[TC04] Test started");
        await appAction.cart.addBackpackToCart();
        console.log("[TC04] Test PASSED");
    } catch (error) {
        console.error("[TC04] Test FAILED:", error);
        console.log("[TC04] Current URL:", page.url());  // Debug info
        throw error;
    }
});
```

#### D. Expectation with Retry
```typescript
export async function expectWithRetry(
    condition: () => Promise<boolean> | boolean,
    config: RetryConfig = DEFAULT_RETRY_CONFIG
): Promise<void>
```

#### E. Debug Capture on Failure
- Current URL logged
- Network state information
- Timing information from retries

---

## Files Modified

### 1. `src/Utils/helper.ts`
**Added:**
- `RetryConfig` interface
- `retryWithExponentialBackoff<T>()` - Generic retry handler
- `waitForPageStability()` - Auto-wait for DOM + network
- `waitForSelectorWithRetry()` - Wait for selector with retries
- `waitForResponseWithRetry()` - Wait for network response
- `expectWithRetry()` - Assertion with retry
- `waitForLocatorVisible()` - Locator visibility wait
- Enhanced `navigateTo()` with logging

### 2. `src/action/cartaction.ts`
**Enhanced:**
- `getCartItemsCount()` - Added page stability wait + logging
- `openCart()` - Added retry + waits + logging
- `addBackpackToCart()` - Added retry + waits + logging
- `removeBackpackFromCart()` - Added retry + waits + logging
- `getCartBadgeCount()` - Added retry + logging
- `isBackpackVisibleInCart()` - Added retry + logging
- All methods now accept optional `RetryConfig`

### 3. `tests/Cart/cartTest.spec.ts`
**Enhanced:**
- Added test suite timeout: 30 seconds
- Added test-level retries (2 on CI, 1 locally)
- Enhanced `beforeEach` with logging and error handling
- Enhanced test cases with try-catch + debugging
- Test comments documenting retry behavior
- Page URL capture on failures

---

## Key Features

### 🔄 **Automatic Retry on Transient Failures**
- Network timeouts retry automatically
- DOM element visibility issues auto-recover
- Exponential backoff prevents overwhelming servers

### ⏱️ **Smart Waiting**
- No arbitrary sleep calls
- Waits for actual page stability
- Respects network activity
- Timeout protection

### 🐛 **Comprehensive Debugging**
- Structured console logging with prefixes
- Tracks retry attempts and delays
- Captures context on failures
- Easy to trace execution flow

### 🛡️ **Failure Resilience**
- Test-level retries (Playwright native)
- Action-level retries (custom logic)
- Exponential backoff strategy
- Timeout protection at all levels

---

## Configuration Examples

### Default Configuration
```typescript
const DEFAULT_RETRY_CONFIG: RetryConfig = {
    maxRetries: 3,
    delayMs: 500,
    timeoutMs: 5000,
    debug: true,
};
```

### Strict Configuration (for flaky operations)
```typescript
await appAction.cart.addBackpackToCart({
    maxRetries: 5,
    delayMs: 1000,
    timeoutMs: 10000,
    debug: true,
});
```

### Silent Configuration (minimal logging)
```typescript
await appAction.cart.openCart({
    maxRetries: 3,
    delayMs: 500,
    timeoutMs: 5000,
    debug: false,
});
```

---

## Test Execution

### Run all tests with new improvements:
```bash
npm test
```

### Run with detailed output (see all logging):
```bash
npm test -- --reporter=verbose
```

### Run single test with debug:
```bash
npm run test:debug -- cartTest.spec.ts
```

### View test report:
```bash
npm run report
```

---

## Debugging Tips

1. **Check console output** for `[CartAction]` and `[Retry]` prefixes
2. **Look for timeout errors** to adjust `timeoutMs`
3. **Count retry attempts** to identify patterns of flakiness
4. **Monitor page URLs** logged on failures for navigation issues
5. **Review traces/videos** for visual confirmation of issues

---

## Benefits Summary

| Issue | Solution | Benefit |
|-------|----------|---------|
| Timing issues | Auto-wait for page stability | More reliable tests |
| Network flakiness | Retry with exponential backoff | Handles transient failures |
| Element not found | Wait for visibility + retry | Reduces false negatives |
| Debugging difficulty | Structured logging | Easier troubleshooting |
| Test flakiness | Test-level retries | Higher pass rate |

---

## Next Steps

1. **Run tests** to verify improvements: `npm test`
2. **Monitor logs** for any patterns in failures
3. **Adjust timeouts** if you see consistent timeout errors
4. **Add to other test suites** (loginTest, searchTest, etc.)

All improvements follow Playwright best practices and the project's existing patterns.
# Cart Test Improvements - Implementation Summary

## Overview
Four key improvements have been implemented in the cart test suite to enhance reliability, reduce flakiness, and improve debugging:

1. **Auto-waiting internals**
2. **waitForSelector/Response**
3. **Retries with exponential backoff**
4. **Flaky test debugging**

---

## 1. Auto-waiting Internals ✅

### What's Implemented
- **Page Stability Waits**: `waitForPageStability()` ensures the page reaches a fully stable state before proceeding
- **Network Idle Detection**: Waits for `networkidle` state to ensure all network requests complete
- **DOM Readiness**: Verifies `document.readyState === 'complete'`

### Location: `src/Utils/helper.ts`
```typescript
export async function waitForPageStability(page: Page, timeoutMs: number = 5000)
```

### Usage in Tests
```typescript
await waitForPageStability(page, 3000);  // Wait 3 seconds max for stability
```

### Benefits
- Eliminates timing issues caused by late-loading content
- Reduces false positives from elements that haven't rendered yet
- Automatically retries if animations are in progress

---

## 2. waitForSelector/Response ✅

### What's Implemented

#### A. Wait for Selector with Retry
```typescript
export async function waitForSelectorWithRetry(
    page: Page,
    selector: string,
    config: RetryConfig
): Promise<void>
```
- Waits for element to be visible
- Auto-retries with exponential backoff
- Handles dynamic content loading

#### B. Wait for Network Response with Retry
```typescript
export async function waitForResponseWithRetry(
    page: Page,
    urlPattern: string | RegExp,
    config: RetryConfig
): Promise<void>
```
- Waits for specific network responses
- Patterns: `/api/cart`, `/login`, etc.
- Retries on network timeouts

#### C. Wait for Locator Visibility
```typescript
export async function waitForLocatorVisible(
    locator: Locator,
    config: RetryConfig
): Promise<void>
```
- Waits for Playwright `Locator` to be visible
- Built-in 5-second timeout
- Debugging console logs

### Enhanced CartAction Methods
All CartAction methods now use waits:
```typescript
async addBackpackToCart(config: RetryConfig = DEFAULT_RETRY_CONFIG) {
    await retryWithExponentialBackoff(
        async () => {
            await waitForLocatorVisible(this.cartPage.addBackpackButton);
            await this.cartPage.addBackpackButton.click();
            await waitForPageStability(this.cartPage.page, 3000);
        },
        config
    );
}
```

---

## 3. Retries with Exponential Backoff ✅

### What's Implemented
```typescript
export async function retryWithExponentialBackoff<T>(
    operation: () => Promise<T>,
    config: RetryConfig = DEFAULT_RETRY_CONFIG
): Promise<T>
```

### Retry Configuration
```typescript
interface RetryConfig {
    maxRetries?: number;      // Default: 3
    delayMs?: number;         // Default: 500
    timeoutMs?: number;       // Default: 5000
    debug?: boolean;          // Default: true
}
```

### Exponential Backoff Strategy
- **Attempt 1**: Wait 500ms before retry
- **Attempt 2**: Wait 1000ms before retry (500 × 2¹)
- **Attempt 3**: Wait 2000ms before retry (500 × 2²)

### Test-Level Retries
```typescript
test.describe.configure({
    timeout: 30000,
    retries: process.env.CI ? 2 : 1,  // 2 retries on CI, 1 locally
});
```

### Custom Retry Overrides
```typescript
await appAction.cart.addBackpackToCart({
    maxRetries: 5,
    delayMs: 1000,
    timeoutMs: 10000,
    debug: true,
});
```

---

## 4. Flaky Test Debugging ✅

### What's Implemented

#### A. Structured Console Logging
All operations log with clear prefixes:
```
[Test Setup] Starting test - navigating to base URL...
[CartAction] Getting cart items count...
[CartAction] Found 3 cart items
[Retry Attempt 1/3] Starting operation...
[Retry Attempt 1/3] Failed: Element not visible (timeout 5000ms)
[WaitForSelector] Found selector: #add-to-cart-...
```

#### B. Error Tracking
```typescript
[Retry Attempt 1/3] Failed: Selector not found
[Retry] Waiting 500ms before retry...
[Retry Attempt 2/3] Starting operation...
```

#### C. Test-Level Debugging
```typescript
test("TC04 - User can add backpack", async ({ appAction, page }) => {
    try {
        console.log("[TC04] Test started");
        await appAction.cart.addBackpackToCart();
        console.log("[TC04] Test PASSED");
    } catch (error) {
        console.error("[TC04] Test FAILED:", error);
        console.log("[TC04] Current URL:", page.url());  // Debug info
        throw error;
    }
});
```

#### D. Expectation with Retry
```typescript
export async function expectWithRetry(
    condition: () => Promise<boolean> | boolean,
    config: RetryConfig = DEFAULT_RETRY_CONFIG
): Promise<void>
```

#### E. Debug Capture on Failure
- Current URL logged
- Network state information
- Timing information from retries

---

## Files Modified

### 1. `src/Utils/helper.ts`
**Added:**
- `RetryConfig` interface
- `retryWithExponentialBackoff<T>()` - Generic retry handler
- `waitForPageStability()` - Auto-wait for DOM + network
- `waitForSelectorWithRetry()` - Wait for selector with retries
- `waitForResponseWithRetry()` - Wait for network response
- `expectWithRetry()` - Assertion with retry
- `waitForLocatorVisible()` - Locator visibility wait
- Enhanced `navigateTo()` with logging

### 2. `src/action/cartaction.ts`
**Enhanced:**
- `getCartItemsCount()` - Added page stability wait + logging
- `openCart()` - Added retry + waits + logging
- `addBackpackToCart()` - Added retry + waits + logging
- `removeBackpackFromCart()` - Added retry + waits + logging
- `getCartBadgeCount()` - Added retry + logging
- `isBackpackVisibleInCart()` - Added retry + logging
- All methods now accept optional `RetryConfig`

### 3. `tests/Cart/cartTest.spec.ts`
**Enhanced:**
- Added test suite timeout: 30 seconds
- Added test-level retries (2 on CI, 1 locally)
- Enhanced `beforeEach` with logging and error handling
- Enhanced test cases with try-catch + debugging
- Test comments documenting retry behavior
- Page URL capture on failures

---

## Key Features

### 🔄 **Automatic Retry on Transient Failures**
- Network timeouts retry automatically
- DOM element visibility issues auto-recover
- Exponential backoff prevents overwhelming servers

### ⏱️ **Smart Waiting**
- No arbitrary sleep calls
- Waits for actual page stability
- Respects network activity
- Timeout protection

### 🐛 **Comprehensive Debugging**
- Structured console logging with prefixes
- Tracks retry attempts and delays
- Captures context on failures
- Easy to trace execution flow

### 🛡️ **Failure Resilience**
- Test-level retries (Playwright native)
- Action-level retries (custom logic)
- Exponential backoff strategy
- Timeout protection at all levels

---

## Configuration Examples

### Default Configuration
```typescript
const DEFAULT_RETRY_CONFIG: RetryConfig = {
    maxRetries: 3,
    delayMs: 500,
    timeoutMs: 5000,
    debug: true,
};
```

### Strict Configuration (for flaky operations)
```typescript
await appAction.cart.addBackpackToCart({
    maxRetries: 5,
    delayMs: 1000,
    timeoutMs: 10000,
    debug: true,
});
```

### Silent Configuration (minimal logging)
```typescript
await appAction.cart.openCart({
    maxRetries: 3,
    delayMs: 500,
    timeoutMs: 5000,
    debug: false,
});
```

---

## Test Execution

### Run all tests with new improvements:
```bash
npm test
```

### Run with detailed output (see all logging):
```bash
npm test -- --reporter=verbose
```

### Run single test with debug:
```bash
npm run test:debug -- cartTest.spec.ts
```

### View test report:
```bash
npm run report
```

---

## Debugging Tips

1. **Check console output** for `[CartAction]` and `[Retry]` prefixes
2. **Look for timeout errors** to adjust `timeoutMs`
3. **Count retry attempts** to identify patterns of flakiness
4. **Monitor page URLs** logged on failures for navigation issues
5. **Review traces/videos** for visual confirmation of issues

---

## Benefits Summary

| Issue | Solution | Benefit |
|-------|----------|---------|
| Timing issues | Auto-wait for page stability | More reliable tests |
| Network flakiness | Retry with exponential backoff | Handles transient failures |
| Element not found | Wait for visibility + retry | Reduces false negatives |
| Debugging difficulty | Structured logging | Easier troubleshooting |
| Test flakiness | Test-level retries | Higher pass rate |

---

## Next Steps

1. **Run tests** to verify improvements: `npm test`
2. **Monitor logs** for any patterns in failures
3. **Adjust timeouts** if you see consistent timeout errors
4. **Add to other test suites** (loginTest, searchTest, etc.)

All improvements follow Playwright best practices and the project's existing patterns.
