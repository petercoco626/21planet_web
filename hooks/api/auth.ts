import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  changePassword,
  checkCurrentPassword,
  agreeMarketingTerm,
  disagreeMarketingTerm,
  agreePersonalForMarketingTerm,
  disagreePersonalForMarketingTerm,
  issueTempPassword,
  signIn,
  signOut,
  signUp,
  withdrawal,
  checkEmailDuplication,
} from '@/service/auth';

export const useCheckEmailDuplication = () => {
  return useMutation({
    mutationFn: checkEmailDuplication,
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};

export const useSignOut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ['challenge-list'],
      });
      queryClient.removeQueries({
        queryKey: ['challenge-check'],
      });
      queryClient.removeQueries({
        queryKey: ['user-profile'],
      });
      queryClient.removeQueries({
        queryKey: ['challenge'],
      });
      queryClient.removeQueries({
        queryKey: ['badges'],
      });
    },
  });
};
export const useWithdrawal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: withdrawal,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ['challenge-list'],
      });
      queryClient.removeQueries({
        queryKey: ['challenge-check'],
      });
      queryClient.removeQueries({
        queryKey: ['user-profile'],
      });
      queryClient.removeQueries({
        queryKey: ['challenge'],
      });
      queryClient.removeQueries({
        queryKey: ['badges'],
      });
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
  });
};

export const useCheckCurrentPassword = () => {
  return useMutation({
    mutationFn: checkCurrentPassword,
  });
};

export const useIssueTempPassword = () => {
  return useMutation({
    mutationFn: issueTempPassword,
  });
};

export const useAgreeMarketingTerm = () => {
  return useMutation({
    mutationFn: agreeMarketingTerm,
  });
};

export const useDisagreeMarketingTerm = () => {
  return useMutation({
    mutationFn: disagreeMarketingTerm,
  });
};

export const useAgreePersonalForMarketingTerm = () => {
  return useMutation({
    mutationFn: agreePersonalForMarketingTerm,
  });
};

export const useDisagreePersonalForMarketingTerm = () => {
  return useMutation({
    mutationFn: disagreePersonalForMarketingTerm,
  });
};
