let baseUrl = 'http://local-dev-api-if-needed';
if(process.env.NODE_ENV === 'production'){
  baseUrl = 'https://production-api';
}
export const BASE_URL = baseUrl;
