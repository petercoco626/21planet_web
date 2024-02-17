'use client';

import { EmailForm } from '@/components/sign-up/email-form';
import { NicknameForm } from '@/components/sign-up/nickname-form';
import { pathname } from '@/constants/path';
import { useCurrentSignUpProcessType } from '@/stores/sign-up/sign-up.store';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PasswordForm } from './password-form';

export function SignUpForm() {
  const route = useRouter();

  const queryClient = useQueryClient();

  const currentSignUpProcessType = useCurrentSignUpProcessType();

  useEffect(() => {
    const writtenNickname = queryClient.getQueryData<string>([
      'sign-up',
      'nickname',
    ]);

    const writtenEmail = queryClient.getQueryData<string>(['sign-up', 'email']);

    const writtenPassword = queryClient.getQueryData<string>([
      'sign-up',
      'password',
    ]);

    if (currentSignUpProcessType === 'email') {
      if (!writtenNickname) route.push(pathname.WORK_THROUGH);
    }

    if (currentSignUpProcessType === 'password') {
      if (!writtenNickname || !writtenEmail) route.push(pathname.WORK_THROUGH);
    }

    if (currentSignUpProcessType === 'terms') {
      if (!writtenNickname || !writtenEmail || !writtenPassword)
        route.push(pathname.WORK_THROUGH);
    }
  }, [currentSignUpProcessType]);

  return (
    <section className="w-full h-full">
      {currentSignUpProcessType === 'nickname' && <NicknameForm />}
      {currentSignUpProcessType === 'email' && <EmailForm />}
      {currentSignUpProcessType === 'password' && <PasswordForm />}
    </section>
  );
}
