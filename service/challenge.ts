import { client } from '.';
import {
  ChallengeChecksResponse,
  ChallengeListResponse,
  ChallengeResponse,
  CreateChallengeRequest,
  DeleteChallengeRequest,
} from '@/types/api/challenge';

const endPoint = '/challenges';

export const fetchAllChallenge = async () => {
  const { data } = await client().get<ChallengeListResponse>(endPoint);

  return data;
};
export const fetchChallenge = async (challengeId: string) => {
  const { data } = await client().get<ChallengeResponse>(
    `${endPoint}/${challengeId}`
  );

  return data;
};

export const fetchChallengeChecksOnChallengeId = async (
  challengeId: string
) => {
  const { data } = await client().get<ChallengeChecksResponse>(
    `${endPoint}/${challengeId}/checks`
  );

  return data;
};

export const createChallenge = async (body: CreateChallengeRequest) => {
  return await client().post(`${endPoint}`, body);
};

export const deleteChallenge = async ({
  challengeId,
}: DeleteChallengeRequest) => {
  return await client().delete(`${endPoint}/${challengeId}`);
};
