// import {test, expect, request} from '@playwright/test';

// test.describe('CRUD API Test Cases', () => {
//   const apiBase = 'https://reqres.in/api/users/2';

//    test('GET → Fetch list of posts', async ({ request }) => {

// const response = await request.get(`${apiBase}/api/users?page=2`);

// console.log('STATUS:', response.status());
// console.log(await response.text());

//    });


//  test('POST → create user', async ({ request }) => {
// const response = await request.post(`${apiBase}/api/users`);
//     const Data = {
//         name: 'Goury',
//         job: 'QA Engineer'
        
//     };
//     console.log('STATUS:', response.status());
//     console.log(await response.text());
//    });

//    test('update user',async ({ request }) => {
//     const response = await request.put(`${apiBase}/api/users/2`);
//     const updatedpayload = {
//         name: 'Goury updated',
//         job: 'Senior QA Engineer'
//  };
//  console.log('STATUS:', response.status());
//  console.log(await response.text());

// });

//    });



import { test, expect, request } from '@playwright/test';

test.describe('CRUD API Test Cases', () => {

  const baseURL = 'https://reqres.in/api';

 
  test('GET → Fetch users list', async ({ request }) => {
    const response = await request.get(`${baseURL}/users?page=2`);

    // expect(response.status()).toBe(200);

    // const body = await response.json();
    // console.log(body);

    // expect(body.data.length).toBeGreaterThan(0);

    console.log('STATUS:', response.status());
console.log(await response.text());
  });


  test('POST → Create user', async ({ request }) => {

    const payload = {
      name: 'Goury',
      job: 'QA Engineer'
    };

    const response = await request.post(`${baseURL}/users`, {
      data: payload
    });

    // expect(response.status()).toBe(201);

    // const body = await response.json();
    // console.log(body);

    // expect(body.name).toBe(payload.name);

    console.log('STATUS:', response.status());
console.log(await response.text());
  });

  
  test('PUT → Update user', async ({ request }) => {

    const updatedPayload = {
      name: 'Goury updated',
      job: 'Senior QA Engineer'
    };

    const response = await request.put(`${baseURL}/users/2`, {
      data: updatedPayload
    });

    // expect(response.status()).toBe(200);

    // const body = await response.json();
    // console.log(body);

    // expect(body.name).toBe(updatedPayload.name);

    console.log('STATUS:', response.status());
console.log(await response.text());
  });

});

   
   




  


  