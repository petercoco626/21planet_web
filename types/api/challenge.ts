import { ChallengeCheck } from './challenge-check';

export type ChallengeType = 'COMMON';
export type ChallengeStatus = 'LIVE' | 'DELETED' | 'COMPLETE';

export type Challenge = {
  id: string;
  startDate: Date;
  endDate: Date | null;
  type: ChallengeType;
  title: string;
  checkedDateListLength: number;
  currentPlanet: string | null;
  status: ChallengeStatus;
};

export type ChallengeListResponse = {
  success: boolean;
  data: Challenge[];
};

export type CreateChallengeRequest = {
  type: ChallengeType;
  title: string;
};

export type DeleteChallengeRequest = {
  challengeId: string;
};

export type ChallengeResponse = {
  success: boolean;
  data: Challenge;
};
export type ChallengeChecksResponse = {
  success: boolean;
  data: ChallengeCheck[];
};
