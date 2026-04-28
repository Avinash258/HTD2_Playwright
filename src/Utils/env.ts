import loginData from '../testdata/login.json';

export function getBaseUrl(): string {
  return process.env.BASE_URL ?? loginData.baseUrl;
}
