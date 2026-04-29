import { test, expect } from '../src/fixture/Nilesh.fixture';
import { faker, Faker } from '@faker-js/faker';



test('Verify Test Cases page opens', async ({ appAction }) => {
  const password = faker.internet.password();
  const ssn = faker.string.numeric(9);
  const Data = {

    FirstName: faker.person.firstName(),
    LastNamre: faker.person.lastName(),
    Address: faker.location.streetAddress(),
    City: faker.location.city(),
    State: faker.location.state(),
    Zipcode: faker.location.zipCode(),
    Phone: faker.phone.number(),
    SSN: ssn,
    username: faker.internet.username(),
    password: password,
    confirm: password,

  }
  await appAction.paraAction.filldata(

    Data.FirstName,
    Data.LastNamre,
    Data.Address,
    Data.City,
    Data.State,
    Data.Zipcode,
    Data.Phone,
    Data.SSN,
    Data.username,
    Data.password,
    Data.confirm,
  )

});
