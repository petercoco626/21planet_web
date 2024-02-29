export type ChallengeCheck = {
  id: string;
  challengeId: string;
  sequence: number;
  comment: string | null;
  checkedAt: Date;
  planet: {
    url: string;
    title: string;
    description: string;
  };
};

export type ChallengeCheckResponse = {
  success: boolean;
  data: ChallengeCheck;
};

export type CheckDateOnChallengeRequest = {
  challengeId: string;
  sequence: number;
};

export type CommentOnCheckedDateRequest = {
  challengeCheckId: string;
  comment: string;
};
