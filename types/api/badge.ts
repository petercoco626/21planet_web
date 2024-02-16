export type BadgeType = 'COMMON';

export type BadgeSerialType = `BADGE_${BadgeType}_#${number}`;

export type TakeBadgeRequest = {
  challengeId: string;
};

export type FetchBadgesType = {
  title: string;
  serial: number;
  badgeType: BadgeType;
  description: string;
  imageUrl: string;
  count: number;
};

export type BadgeListResponse = {
  totalCount: number;
  results: FetchBadgesType[];
};
