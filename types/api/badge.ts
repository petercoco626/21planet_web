import { Challenge } from './challenge';

export type BadgeType = `COMMON_${number}`;

export type BadgeCountInfo = {
  type: BadgeType;
  count: number;
  imageUrl: string;
  title: string;
};

export type FetchBadgeCountsResponse = {
  data: BadgeCountInfo[];
  sucess: boolean;
};

export type FetchBadgeHistoriesResponse = {
  badgeImageUrl: string;
  title: string;
  challenges: Challenge[];
};
