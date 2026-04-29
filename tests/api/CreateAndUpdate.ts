import { test, expect } from '@playwright/test';

// GET users
test('API test', async ({ request }) => {

  const res = await request.get('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);

  expect(res.status()).toBe(200);

});



test('Create user API test', async ({ request }) => {

  const res = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Ankit',
      job: 'Tester'
    }
  });

  const data = await res.json();

  console.log(data);

  expect(res.status()).toBe(201);

});


test('Create Automation User', async ({ request }) => {

  const res1 = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'xyz',
      job: 'Automation'
    }
  });

  const data2 = await res1.json();

  console.log(data2);

  expect(res1.status()).toBe(201);

});