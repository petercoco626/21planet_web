'use client';

import { useRouter } from 'next/navigation';
import { GoBackButton } from '../common/go-back-button';
import {
  useCurrentSignUpProcessType,
  useSignUpActions,
} from '@/stores/sign-up/sign-up.store';
import { useQueryClient } from '@tanstack/react-query';
import { pathname } from '@/constants/path';

export function SignUpHeader() {
  const queryClient = useQueryClient();

  const route = useRouter();

  const setCurrentSignUpProcessType =
    useSignUpActions().setCurrentSignUpProcessType;

  const currentSignUpProcessType = useCurrentSignUpProcessType();

  const handleGoBackButtonClick = () => {
    if (currentSignUpProcessType === 'nickname') {
      queryClient.removeQueries({ queryKey: ['sign-up'] });
      route.replace(pathname.WORK_THROUGH);
      return;
    }

    if (currentSignUpProcessType === 'email') {
      setCurrentSignUpProcessType('nickname');
    }

    if (currentSignUpProcessType === 'password') {
      setCurrentSignUpProcessType('email');
    }

    if (currentSignUpProcessType === 'terms') {
      setCurrentSignUpProcessType('password');
    }
  };

  return (
    <div className="w-full h-14 py-2 box-border">
      <GoBackButton onClickGobackButton={handleGoBackButtonClick} />
    </div>
  );
}
