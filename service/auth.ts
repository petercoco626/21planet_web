import axios from 'axios';
import { client } from '.';
import {
  ChangePasswordRequest,
  CheckCurrentPasswordRequest,
  CheckEmailDuplicationRequest,
  CheckEmailDuplicationResponse,
  IssueTempPasswordRequest,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from '@/types/api/auth';

export const checkEmailDuplication = async (
  body: CheckEmailDuplicationRequest
) => {
  const { data } = await client().post<CheckEmailDuplicationResponse>(
    '/auth/email/duplication',
    body
  );

  return data;
};

export const signUp = async (body: SignUpRequest) => {
  const { data } = await client().post<SignInResponse>('/auth/signUp', body);

  return data;
};

export const signIn = async (body: SignInRequest) => {
  const { data } = await client().post<SignInResponse>('/auth/signIn', body);

  return data;
};

export const signOut = async () => {
  const { status } = await client().post('/auth/signOut');

  return { status };
};

export const changePassword = async (body: ChangePasswordRequest) => {
  const { status } = await client().patch('/auth/password', body);

  return { status };
};

export const checkCurrentPassword = async (
  body: CheckCurrentPasswordRequest
) => {
  const { status } = await client().post('/auth/password/check', body);

  return { status };
};

export const withdrawal = async () => {
  const { status } = await client().delete('/auth/withdrawal');

  return { status };
};

export const issueTempPassword = async (body: IssueTempPasswordRequest) => {
  const { status } = await client().post('/auth/password/temp', body);

  return { status };
};

export const agreeMarketingTerm = async () => {
  const { status } = await client().patch('/auth/terms/marketing/agree');

  return { status };
};

export const disagreeMarketingTerm = async () => {
  const { status } = await client().patch('/auth/terms/marketing/disagree');

  return { status };
};

export const agreePersonalForMarketingTerm = async () => {
  const { status } = await client().patch(
    '/auth/terms/personal-for-marketing/agree'
  );

  return { status };
};

export const disagreePersonalForMarketingTerm = async () => {
  const { status } = await client().patch(
    '/auth/terms/personal-for-marketing/disagree'
  );

  return { status };
};

export const refreshAccessToken = async (refreshToken: string) => {
  return await axios.post(
    // 'https://api-dev.21planet.world/auth/refresh',
    'http://localhost:8080/auth/refresh',
    {
      refresh: refreshToken,
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );
};
