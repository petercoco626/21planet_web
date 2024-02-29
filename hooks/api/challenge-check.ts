import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  checkChallengeDetail,
  commentOnCheckedDate,
  fetchChallengeCheck,
} from '@/service/challenge-check';
import {
  CommentOnCheckedDateRequest,
  CheckDateOnChallengeRequest,
} from '@/types/api/challenge-check';

export const useChallengeCheck = (challengeCheckId: string) =>
  useQuery({
    queryKey: ['challenge-check', challengeCheckId],
    queryFn: () => fetchChallengeCheck(challengeCheckId),
    staleTime: Infinity,
  });

export const useCheckDateOnChallenge = (
  request: CheckDateOnChallengeRequest
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => checkChallengeDetail(request),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['challenge-checks', request.challengeId],
      });
      queryClient.refetchQueries({ queryKey: ['challenges'] });
      queryClient.refetchQueries({
        queryKey: ['challenge', request.challengeId],
      });
    },
  });
};

export const useCommentOnCheckedDate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CommentOnCheckedDateRequest) =>
      commentOnCheckedDate(request),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['challenge-check'] });
      queryClient.refetchQueries({ queryKey: ['challenge-checks'] });
    },
  });
};
