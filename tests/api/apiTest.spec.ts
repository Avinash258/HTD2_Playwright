import { test, expect } from '@playwright/test';

test.describe('api test cases', () => {
  const apiBase = 'https://jsonplaceholder.typicode.com';

  test('GET → Fetch list of posts', async ({ request }) => {
    const response = await request.get(`${apiBase}/posts`);
    expect(response.status()).toBe(200);
   console.log(await response.json)
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('body');
  });

  test('GET → Fetch single post by ID', async ({ request }) => {
    const response = await request.get(`${apiBase}/posts/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('userId');
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('POST → Create new post', async ({ request }) => {
    const payload = {
      title: 'My New Post',
      body: 'This is the content of my new post',
      userId: 1,
    };

    const response = await request.post(`${apiBase}/posts`, {
      data: payload,
    });

    expect(response.status()).toBe(201);
    const body = await response.json();

    expect(body).toMatchObject(payload);
    expect(body).toHaveProperty('id');
  });

  test('PUT → Update entire post', async ({ request }) => {
    const payload = {
      id: 1,
      title: 'Updated Post Title',
      body: 'Updated post body content',
      userId: 1,
    };

    const response = await request.put(`${apiBase}/posts/1`, {
      data: payload,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body).toMatchObject(payload);
  });

  test('PATCH → Partially update post', async ({ request }) => {
    const payload = {
      title: 'Patched Title Only',
    };

    const response = await request.patch(`${apiBase}/posts/1`, {
      data: payload,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.title).toBe('Patched Title Only');
    expect(body).toHaveProperty('id');
  });

  test('DELETE → Remove post', async ({ request }) => {
    const response = await request.delete(`${apiBase}/posts/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toEqual({});
  });

  test('GET → Fetch user by ID', async ({ request }) => {
    const response = await request.get(`${apiBase}/users/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('email');
    expect(body).toHaveProperty('phone');
    expect(body).toHaveProperty('website');
  });

  test('GET → Fetch comments for a post', async ({ request }) => {
    const response = await request.get(`${apiBase}/posts/1/comments`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('postId');
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('email');
    expect(body[0]).toHaveProperty('body');
  });

  test('POST → Create new comment', async ({ request }) => {
    const payload = {
      postId: 1,
      name: 'Test Comment Name',
      email: 'test@example.com',
      body: 'This is a test comment',
    };

    const response = await request.post(`${apiBase}/comments`, {
      data: payload,
    });

    expect(response.status()).toBe(201);
    const body = await response.json();

    expect(body).toMatchObject(payload);
    expect(body).toHaveProperty('id');
  });
});