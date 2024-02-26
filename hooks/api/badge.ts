import {
  fetchBadgeCountsByBadgeType,
  fetchBadgeHistories,
} from '@/service/badge';
import { BadgeType } from '@/types/api/badge';
import { useQuery } from '@tanstack/react-query';

export const useBadgeHistories = (badgeType: BadgeType) => {
  return useQuery({
    queryFn: () => fetchBadgeHistories({ badgeType }),
    queryKey: ['badges', 'histories', badgeType],
    staleTime: Infinity,
  });
};

export const useBadgeCounts = () => {
  return useQuery({
    queryFn: fetchBadgeCountsByBadgeType,
    queryKey: ['badges', 'counts'],
    staleTime: Infinity,
  });
};
