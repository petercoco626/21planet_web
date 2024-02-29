import { create } from 'zustand';

type SignUpProcessType =
  | 'nickname'
  | 'email'
  | 'password'
  | 'terms'
  | 'success';

interface SignUpState {
  currentSignUpProcessType: SignUpProcessType;
  actions: {
    setCurrentSignUpProcessType: (SignUpProcessType: SignUpProcessType) => void;
  };
}

export const useSignUpStore = create<SignUpState>()((set) => ({
  currentSignUpProcessType: 'nickname',
  actions: {
    setCurrentSignUpProcessType: (SignUpProcessType: SignUpProcessType) => {
      set(() => ({ currentSignUpProcessType: SignUpProcessType }));
    },
  },
}));

export const useSignUpActions = () => useSignUpStore((state) => state.actions);

export const useCurrentSignUpProcessType = () =>
  useSignUpStore((state) => state.currentSignUpProcessType);
