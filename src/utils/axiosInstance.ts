import axios from 'axios';

/* The code `export const api = axios.create({ ... })` is creating an instance of the Axios library
with specific configuration options. */
export const api = axios.create({
  /* TODO .env */
  baseURL: 'https://api.mercadolibre.com',
  timeout: 15000
});
