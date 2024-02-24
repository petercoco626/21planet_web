'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../base/input';
import { Button } from '../base/button';
import { useQueryClient } from '@tanstack/react-query';
import { useSignIn } from '@/hooks/api/auth';
import { SignInResponse } from '@/types/api/auth';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/libs/cookie';
import { pathname } from '@/constants/path';
import { Toast } from '../base/toast';
import { useState } from 'react';
import { useToggle } from '@/hooks/use-toggle';

interface LoginFormValue {
  email: string;
  password: string;
}

export function LoginForm() {
  const queryClient = useQueryClient();

  const route = useRouter();

  const { mutate: signInMutate } = useSignIn();

  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const { toggle, handleToggleOff, handleToggleOn } = useToggle();

  const LoginFormMethods = useForm<LoginFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      email: '',
    },
  });

  const { handleSubmit } = LoginFormMethods;

  const handleNextButtonClick = ({ email, password }: LoginFormValue) => {
    signInMutate(
      {
        email,
        password,
      },
      {
        onSuccess: ({ data }: SignInResponse) => {
          axios.defaults.headers.common.Authorization = `Bearer ${data?.accessToken}`;
          setCookie('21-pl-ac', data?.accessToken || '', 1);
          setCookie('21-pl-rf', data?.refreshToken || '', 30);
          queryClient.refetchQueries({
            queryKey: ['user-profile'],
          });
          route.push(pathname.CHALLENGE);
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            setLoginErrorMessage(error.response?.data.message || '');
            handleToggleOn();
          }
        },
      }
    );
  };

  return (
    <FormProvider {...LoginFormMethods}>
      <form
        className="w-full"
        autoComplete="off"
        onSubmit={handleSubmit((LoginFormValue) => {
          handleNextButtonClick(LoginFormValue);
        })}
      >
        <div className="mb-8">
          <h1 className="text-xxl_light text-white-0.9  mb-1 break-keep">
            21 planet에 다시 방문해 주셔서 감사해요.
          </h1>
        </div>
        <Input
          name="email"
          type="text"
          labelName="이메일"
          placeholder={'email@address.com'}
          required={{
            value: true,
            message: '이메일을 알려주세요',
          }}
          className="mb-4"
        />
        <Input
          name="password"
          type="password"
          labelName="비밀번호"
          placeholder={'비밀번호'}
          required={{
            value: true,
            message: '비밀번호를 작성해주세요',
          }}
          className="mb-8"
        />
        <Button variant="primary" size="large" className="w-full">
          로그인
        </Button>{' '}
        <Toast
          message={loginErrorMessage}
          classname="absolute bottom-6 left-1/2 -translate-x-1/2"
          isToastOn={toggle}
          onToastOff={handleToggleOff}
        />
      </form>
    </FormProvider>
  );
}
