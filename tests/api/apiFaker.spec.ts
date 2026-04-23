import { test, expect } from '@playwright/test';
 
test.describe('Fake REST API - All Modules', () => {
    const apiBase = 'https://fakerestapi.azurewebsites.net/api/v1';
 
    // Activities.......
 
    test('TC_1-Activities-> GET Activities', async ({ request }) => {
        const res = await request.get(`${apiBase}/Activities`);
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(Array.isArray(body)).toBeTruthy();
        console.log(body);
    });
 
    test('TC_2-Activities-> POST Activity', async ({ request }) => {
        const payload = {
            title: 'Test Activity',
            dueDate: new Date().toISOString(),
            completed: false
        };
 
        const res = await request.post(`${apiBase}/Activities`, { data: payload });
        expect(res.status()).toBe(200);
    });
 
    test('TC_3-Activities-> PUT Activity', async ({ request }) => {
        const payload = {
            title: 'Updated Activity',
            dueDate: new Date().toISOString(),
            completed: true
        };
 
        const res = await request.put(`${apiBase}/Activities/1`, { data: payload });
        expect(res.status()).toBe(200);
    });
 
    test('TC_4-Activities-> DELETE Activity', async ({ request }) => {
        const res = await request.delete(`${apiBase}/Activities/1`);
        expect(res.status()).toBe(200);
    });
 
    // Authors.......
 
    test('TC_5-Authors-> GET Authors', async ({ request }) => {
        const res = await request.get(`${apiBase}/Authors`);
        expect(res.status()).toBe(200);
 
        const body = await res.json();
        expect(body[0]).toHaveProperty('id');
    });
 
    test('TC_6-Authors-> GET Author by id', async ({ request }) => {
        const res = await request.get(`${apiBase}/Authors/1`);
        expect(res.status()).toBe(200);
    });
 
    test('TC_7-Authors-> GET Authors by the book id', async ({ request }) => {
        const res = await request.get(`${apiBase}/Authors/authors/books/1`);
        expect(res.status()).toBe(200);
    });
 
    // test('T_4-Authors-> POST Author', async ({ request }) => {
    //     const payload = {
    //         id: 101,
    //         idBook: 1,
    //         firstName: "John",
    //         lastName: "Doe"
    //     };
 
    //     const res = await request.post(`${apiBase}/Authors`, { data: payload });
    //     expect(res.status()).toBe(200);
    // });
 
    // test('T_5-Authors-> PUT Author', async ({ request }) => {
    //     const payload = {
    //         id: 1,
    //         idBook: 1,
    //         firstName: "Updated",
    //         lastName: "Author"
    //     };
 
    //     const res = await request.put(`${apiBase}/Authors/1`, { data: payload });
    //     expect(res.status()).toBe(200);
    // });
 
    // test('T_6-Authors-> DELETE Author', async ({ request }) => {
    //     const res = await request.delete(`${apiBase}/Authors/1`);
    //     expect(res.status()).toBe(200);
    // });
 
    // Books.......
 
    // test('TC001-BOOKS-> GET Books', async ({ request }) => {
    //     const res = await request.get(`${apiBase}/Books`);
    //     expect(res.status()).toBe(200);
    // });
 
    // test('TC002-BOOKS-> GET Book by ID', async ({ request }) => {
    //     const res = await request.get(`${apiBase}/Books/1`);
    //     expect(res.status()).toBe(200);
    // });
 
    // test('TC003-BOOKS-> POST Book', async ({ request }) => {
    //     const payload = {
    //         id: 101,
    //         title: "Test Book",
    //         description: "Sample book",
    //         pageCount: 100,
    //         excerpt: "Excerpt",
    //         publishDate: new Date().toISOString()
    //     };
 
    //     const res = await request.post(`${apiBase}/Books`, { data: payload });
    //     expect(res.status()).toBe(200);
    // });
 
    // test('TC004-BOOKS-> PUT Book', async ({ request }) => {
    //     const payload = {
    //         id: 1,
    //         title: "Updated Book",
    //         description: "Updated",
    //         pageCount: 200,
    //         excerpt: "Updated excerpt",
    //         publishDate: new Date().toISOString()
    //     };
 
    //     const res = await request.put(`${apiBase}/Books/1`, { data: payload });
    //     expect(res.status()).toBe(200);
    // });
 
    // test('TC005-BOOKS-> DELETE Book', async ({ request }) => {
    //     const res = await request.delete(`${apiBase}/Books/1`);
    //     expect(res.status()).toBe(200);
    // });
 
    // ================= COVER PHOTOS =================
 
//     test('TC001-COVERPHOTOS-> GET CoverPhotos', async ({ request }) => {
//         const res = await request.get(`${apiBase}/CoverPhotos`);
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC002-COVERPHOTOS-> GET CoverPhoto by ID', async ({ request }) => {
//         const res = await request.get(`${apiBase}/CoverPhotos/1`);
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC003-COVERPHOTOS-> GET CoverPhoto by Book ID', async ({ request }) => {
//         const res = await request.get(`${apiBase}/CoverPhotos/books/covers/1`);
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC004-COVERPHOTOS-> POST CoverPhoto', async ({ request }) => {
//         const payload = {
//             id: 101,
//             idBook: 1,
//             url: "https://example.com/image.jpg"
//         };
 
//         const res = await request.post(`${apiBase}/CoverPhotos`, { data: payload });
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC005-COVERPHOTOS-> PUT CoverPhoto', async ({ request }) => {
//         const payload = {
//             id: 1,
//             idBook: 1,
//             url: "https://example.com/updated.jpg"
//         };
 
//         const res = await request.put(`${apiBase}/CoverPhotos/1`, { data: payload });
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC006-COVERPHOTOS-> DELETE CoverPhoto', async ({ request }) => {
//         const res = await request.delete(`${apiBase}/CoverPhotos/1`);
//         expect(res.status()).toBe(200);
//     });
 
//     // ================= USERS =================
 
//     test('TC001-USERS-> GET Users', async ({ request }) => {
//         const res = await request.get(`${apiBase}/Users`);
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC002-USERS-> GET User by ID', async ({ request }) => {
//         const res = await request.get(`${apiBase}/Users/1`);
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC003-USERS-> POST User', async ({ request }) => {
//         const payload = {
//             id: 101,
//             userName: "testuser",
//             password: "12345"
//         };
 
//         const res = await request.post(`${apiBase}/Users`, { data: payload });
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC004-USERS-> PUT User', async ({ request }) => {
//         const payload = {
//             id: 1,
//             userName: "updatedUser",
//             password: "updated123"
//         };
 
//         const res = await request.put(`${apiBase}/Users/1`, { data: payload });
//         expect(res.status()).toBe(200);
//     });
 
//     test('TC005-USERS-> DELETE User', async ({ request }) => {
//         const res = await request.delete(`${apiBase}/Users/1`);
//         expect(res.status()).toBe(200);
//     });
 
});
 