import { test, expect } from "@playwright/test";
import { request } from "http";

test.describe("Demo Test API", () => {
  const demoApi = 'https://restful-booker.herokuapp.com';

  let token: any;
  let bookingId: any;

  //i am creating toke (required for PUT and Patch)
  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${demoApi}/auth`, {
      data: {
        username: "admin",
        password: "password123"
      }
    
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    token = body.token;
    console.log("Token:", token);
  });

  test('GET → Fetch list of bookings', async ({ request }) => {
    const response = await request.get(`${demoApi}/booking`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('bookingid');
  });

  test('GET → Fetch single booking by ID', async ({ request }) => {
    const response = await request.get(`${demoApi}/booking/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);
    expect(body).toHaveProperty('firstname'); 
    expect(body).toHaveProperty('lastname');
    expect(body).toHaveProperty('totalprice');
  });
   test('post- create new post', async ({request}) =>{
    const payload ={
     firstname: 'Anil',
     lastname: 'Pandey',
     totalprice: 10000,
     depositpaid: true,
     bookingdates: { checkin: '2026-02-01', checkout: '2026-02-10' },
     additionalneeds: 'Dinner'

    };
       const postresponse = await request.post(`${demoApi}/booking`,{
        data: payload,
        headers:{
           "Content-Type": "application/json"
        }
       });
     expect(postresponse.status()).toBe(200)
       const body = await postresponse.json();
       console.log(body);
   });
  test('put-update the data', async ({request})=>{
      const playload={
          firstname: 'A',
          lastname: 'P',
          totalprice: 100000,
          depositpaid: true,
          bookingdates: { checkin: '2026-02-02', checkout: '2026-02-10' },
          additionalneeds: 'Dinner and'
      };
      const putresponse = await request.put(`${demoApi}/booking/1`,{
          data: playload,
          headers: {
             "Content-Type": "application/json",
             "Cookie": `token=${token}`
          }
      });

      expect(putresponse.status()).toBe(200)
      const body = await putresponse.json();
      console.log(body);
    
  });
     test('patch-partially updating data from booking App', async({ request }) =>{
    const payload = {
          firstname: 'Update',
          lastname: 'newupdate',
          totalprice: 100,
    };
      const patchresponse = await request.patch(`${demoApi}/booking/1`,{
         data : payload,
         headers:{
           "Content-Type": "application/json",
             "Cookie": `token=${token}`
         }

      });
        expect(patchresponse.status()).toBe(200);
        const body = await patchresponse.json();
        console.log(body);

     });

});