import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createChallenge,
  deleteChallenge,
  fetchChallenge,
  fetchAllChallenge,
  fetchChallengeChecksOnChallengeId,
  fetchBadgeOnChallengeId,
} from '@/service/challenge';
import { AxiosError, AxiosResponse } from 'axios';
import {
  BadgeByChallengeIdResponse,
  ChallengeChecksResponse,
  ChallengeListResponse,
  ChallengeResponse,
  CreateChallengeRequest,
  DeleteChallengeRequest,
} from '@/types/api/challenge';

interface ErrorResponse {
  success: boolean;
  statusCode: number;
  timestamp: string;
  path: string;
  message: string;
  error: string;
}

export const useChallengeList = () =>
  useQuery<ChallengeListResponse, AxiosError>({
    queryKey: ['challenges'],
    queryFn: fetchAllChallenge,
    staleTime: 1000 * 60,
  });

export const useChallenge = (challengeId: string) =>
  useQuery<ChallengeResponse, AxiosError>({
    queryKey: ['challenge', challengeId],
    queryFn: () => fetchChallenge(challengeId),
    staleTime: Infinity,
  });

export const useChallengeChecksOnChallengeId = (challengeId: string) =>
  useQuery<ChallengeChecksResponse, AxiosError>({
    queryKey: ['challenge-checks', challengeId],
    queryFn: () => fetchChallengeChecksOnChallengeId(challengeId),
    staleTime: Infinity,
  });

export const useBadgeOnChallengeId = (challengeId: string, sequence: number) =>
  useQuery<BadgeByChallengeIdResponse, AxiosError>({
    queryKey: ['challenge', challengeId, 'badge'],
    queryFn: () => fetchBadgeOnChallengeId(challengeId),
    staleTime: Infinity,
    enabled: sequence === 21,
  });

export const useCreateChallenge = () => {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse,
    AxiosError<ErrorResponse>,
    CreateChallengeRequest
  >({
    mutationFn: createChallenge,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

export const useDeleteChallenge = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, DeleteChallengeRequest>({
    mutationFn: deleteChallenge,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['challenges'],
      });
      queryClient.refetchQueries({
        queryKey: ['challenges-checks'],
      });
    },
  });
};
