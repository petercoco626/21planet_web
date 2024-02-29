import { useQuery } from '@tanstack/react-query';
import { userProfile } from '@/service/user';

export const useUserProfile = () => {
  return useQuery({
    queryFn: userProfile,
    queryKey: ['user-profile'],
    staleTime: Infinity,
  });
};
