import axios from 'axios';
import { getEnv } from '~/helpers/getEnv';

console.log(getEnv.API_URL);
const api = axios.create({
  baseURL: getEnv.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
