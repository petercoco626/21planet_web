import { getCookie } from '@/libs/cookie';
import axios from 'axios';

const isProductionEnv = process.env.NEXT_PUBLIC_BUILD_ENV === 'production';

export const client = () => {
  const instance = axios.create({
    baseURL: isProductionEnv
      ? 'https://api-dev.21planet.world'
      : 'http://localhost:8080', // 추후 빌드 환경 구분해야함.
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
