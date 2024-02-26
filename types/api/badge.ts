import { Challenge } from './challenge';

export type BadgeType = `COMMON_${number}`;

export type BadgeCountInfo = {
  type: BadgeType;
  count: number;
  imageUrl: string;
  title: string;
};

export type FetchBadgeCountsResponse = {
  success: boolean;
  data: BadgeCountInfo[];
};

export type BadgeHistories = {
  badgeImageUrl: string;
  title: string;
  challenges: Challenge[];
};

export type FetchBadgeHistoriesResponse = {
  success: boolean;
  data: BadgeHistories;
};
