import { test, expect } from '@playwright/test';

test.describe('API test cases', () => {
  const website = 'https://jsonplaceholder.typicode.com';
   test('GET → Fetch single user', async ({ request }) => {
  const response = await request.get(`${website}/users/2`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('email');
  expect(body).toHaveProperty('username');
  expect(body.address).toHaveProperty('city');
});
test('GET-> Fetch single post',async({request}) => {
const response = await request.get(`${website}/users/2`);
expect(response.status()).toBe(200);

const body = await response.json();
expect(body).toHaveProperty('username');
expect(body).toHaveProperty('email');

});

test('POST -> Create a new data', async ({ request }) => {
const payload = {
    name: 'Naksh',
    body: 'This is about my new post',
    title: 'This is my post'
};
const response =await request.post( `${website}/posts`,{
    data: payload,
});

});
test('PUT -> update entire post', async({request}) => {
const payload = {
    name : 'Gemini',
    body: 'updated my new post',
    title: 'update post title',
};
const resposne = await request.put(`${website}/posts/1`, {
  data: payload,
    });
expect(resposne.status()).toBe(200);
const body = await resposne.json();
expect(body).toMatchObject(payload);
});
test('PATCH -> partially update 1 post', async ({request}) => {
const payload = {
    title: 'Patched Title Only',
};
const response = await request.patch (`${website}/posts/1`,{
  data: payload,  
});
    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.title).toBe('Patched Title Only');
    expect(body).toHaveProperty('id');
  });


test('DELETE -> Remove post',async ({request}) => {
const response = await request.delete(`${website}/posts/1`);
expect(response.status()).toBe(200);
const body = await response.json();
expect(body).toEqual({});
});
});

