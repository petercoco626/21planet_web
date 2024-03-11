import { getCookie } from '@/libs/cookie';
import axios from 'axios';

const isProductionEnv = process.env.NEXT_PUBLIC_BUILD_ENV === 'production';

export const client = () => {
  const instance = axios.create({
    baseURL: isProductionEnv
      ? 'https://api.21planet.world'
      : 'https://api-dev.21planet.world',
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
