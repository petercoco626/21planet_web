import { apiServerHost } from '@/libs/config';
import { getCookie } from '@/libs/cookie';
import axios from 'axios';

export const client = () => {
  const instance = axios.create({
    baseURL: apiServerHost,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    async (config) => {
      const accessToken = getCookie('21-pl-ac');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
