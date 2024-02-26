import { client } from '.';
import {
  BadgeType,
  FetchBadgeCountsResponse,
  FetchBadgeHistoriesResponse,
} from '@/types/api/badge';

export const fetchBadgeCountsByBadgeType = async () => {
  const { data } = await client().get<FetchBadgeCountsResponse>(
    '/badges/counts'
  );

  return data;
};
export const fetchBadgeHistories = async ({
  badgeType,
}: {
  badgeType: BadgeType;
}) => {
  const { data } = await client().get<FetchBadgeHistoriesResponse>(
    `/badges/histories/${badgeType}`
  );

  return data;
};
