import axios from 'axios';
import { BASE_URL, TIMEOUT } from '../const';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
});
