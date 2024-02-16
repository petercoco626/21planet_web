import { client } from '.';
import { BadgeListResponse } from '@/types/api/badge';

export const takeBadge = async () => {
  const { status } = await client().post('/badges');

  return { status };
};

export const fetchBadgeList = async () => {
  const { data } = await client().get<BadgeListResponse>('/badges');

  return data;
};
