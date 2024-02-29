import { create } from 'zustand';

type ResetPasswordProcessType = 'check-current-password' | 'change-password';

interface ResetPasswordState {
  currentResetPasswordProcessType: ResetPasswordProcessType;
  actions: {
    setCurrentResetPasswordProcessType: (
      resetPasswordProcessType: ResetPasswordProcessType
    ) => void;
  };
}

export const useResetPasswordStore = create<ResetPasswordState>()((set) => ({
  currentResetPasswordProcessType: 'check-current-password',
  actions: {
    setCurrentResetPasswordProcessType: (
      resetPasswordProcessType: ResetPasswordProcessType
    ) => {
      set(() => ({
        currentResetPasswordProcessType: resetPasswordProcessType,
      }));
    },
  },
}));

export const useResetPasswordActions = () =>
  useResetPasswordStore((state) => state.actions);

export const useCurrentResetPasswordProcessType = () =>
  useResetPasswordStore((state) => state.currentResetPasswordProcessType);
