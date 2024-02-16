import { client } from '.';
import { UserProfileResponse } from '../types/api/user';

export const userProfile = async () => {
  const { data } = await client().get<UserProfileResponse>('/auth/me');

  return data;
};
