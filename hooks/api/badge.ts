import { fetchBadgeList, takeBadge } from '@/service/badge';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useTakeBadge = () => {
  return useMutation({
    mutationFn: takeBadge,
  });
};
export const useBadge = () => {
  return useQuery({
    queryFn: fetchBadgeList,
    queryKey: ['badges'],
    staleTime: Infinity,
  });
};
