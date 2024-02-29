import { client } from '.';
import {
  ChallengeCheckResponse,
  CheckDateOnChallengeRequest,
  CommentOnCheckedDateRequest,
} from '@/types/api/challenge-check';

const endPoint = '/challenge-checks';

export const fetchChallengeCheck = async (challengeCheckId: string) => {
  const { data } = await client().get<ChallengeCheckResponse>(
    `${endPoint}/${challengeCheckId}`
  );

  return data;
};

export const checkChallengeDetail = async ({
  challengeId,
  sequence,
}: CheckDateOnChallengeRequest) => {
  const { status } = await client().post(`${endPoint}`, {
    challengeId,
    sequence,
  });

  return { status };
};

export const commentOnCheckedDate = async ({
  challengeCheckId,
  comment,
}: CommentOnCheckedDateRequest) => {
  const { status } = await client().patch(
    `${endPoint}/${challengeCheckId}/comment`,
    {
      comment,
    }
  );

  return { status };
};
