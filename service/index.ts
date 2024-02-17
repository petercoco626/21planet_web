import axios from 'axios';
import { refreshAccessToken } from './auth';

const isProductionEnv = process.env.NEXT_PUBLIC_BUILD_ENV === 'production';

export const client = () => {
  const instance = axios.create({
    baseURL: isProductionEnv
      ? 'https://api-dev.21planet.world'
      : 'https://api-dev.21planet.world', // 추후 빌드 환경 구분해야함.
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    async (config) => {
      // const accessToken = await getAsyncStorage('access-token');
      // if (accessToken) {
      //   config.headers.Authorization = `Bearer ${accessToken}`;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      const { response } = error;

      if (response.status === 401) {
        return await resetTokenAndReattemptRequest(error);
      }

      return Promise.reject(error);
    }
  );

  let isAlreadyFetchingAccessToken = false;
  let subscribers: any = [];

  async function resetTokenAndReattemptRequest(error: any) {
    try {
      const { response: errorResponse } = error;

      // subscribers에 access token을 받은 이후 재요청할 함수 추가 (401로 실패했던)
      // retryOriginalRequest는 pending 상태로 있다가
      // access token을 받은 이후 onAccessTokenFetched가 호출될 때
      // access token을 넘겨 다시 axios로 요청하고
      // 결과값을 처음 요청했던 promise의 resolve로 settle시킨다.
      const retryOriginalRequest = new Promise((resolve, reject) => {
        addSubscriber(async (accessToken: string) => {
          try {
            errorResponse.config.headers['Authorization'] =
              'Bearer ' + accessToken;
            resolve(instance(errorResponse.config));
          } catch (err) {
            reject(err);
          }
        });
      });

      // refresh token을 이용해서 access token 요청
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true; // 문닫기 (한 번만 요청)

        // const refreshToken = await getAsyncStorage('refresh-token');

        // const { data, status } = await refreshAccessToken(refreshToken || '');
        // if (status === 201) {
        //   await setAsyncStorage('access-token', data.data.accessToken);

        //   isAlreadyFetchingAccessToken = false; // 문열기 (초기화)

        //   onAccessTokenFetched(data.data.accessToken);
        // }
      }

      return retryOriginalRequest; // pending 됐다가 onAccessTokenFetched가 호출될 때 resolve
    } catch (error) {
      // await removeAsyncStorage('refresh-token');
      // await removeAsyncStorage('access-token');
      return Promise.reject(error);
    }
  }

  function addSubscriber(callback: any) {
    subscribers.push(callback);
  }

  function onAccessTokenFetched(accessToken: string) {
    subscribers.forEach((callback: any) => callback(accessToken));
    subscribers = [];
  }

  return instance;
};
