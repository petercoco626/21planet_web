'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../base/input';
import { Button } from '../base/button';
import { useQueryClient } from '@tanstack/react-query';
import { useSignUpActions } from '@/stores/sign-up/sign-up.store';

interface EmailFormValue {
  email: string;
}

export function EmailForm() {
  const queryClient = useQueryClient();

  const setCurrentSignUpProcessType =
    useSignUpActions().setCurrentSignUpProcessType;

  const defaultEmail = queryClient.getQueryData<string>(['sign-up', 'email']);

  const writtenNickname = queryClient.getQueryData<string>([
    'sign-up',
    'nickname',
  ]);

  const EmailFormMethods = useForm<EmailFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      email: defaultEmail || '',
    },
  });

  const { handleSubmit } = EmailFormMethods;

  const handleNextButtonClick = ({ email }: EmailFormValue) => {
    setCurrentSignUpProcessType('password');
    queryClient.setQueryData(['sign-up', 'email'], email);
  };

  return (
    <FormProvider {...EmailFormMethods}>
      <form
        className="w-full h-full flex flex-col justify-between"
        autoComplete="off"
        onSubmit={handleSubmit((EmailFormValue) => {
          handleNextButtonClick(EmailFormValue);
        })}
      >
        <div>
          <h1 className="text-xxl_light text-white-0.9  my-8">
            <span className="text-xxl_bold text-violet-300">
              {writtenNickname}
            </span>
            님, 반가워요!
            <br />
            여행 일지 저장을 위해 계정을 생성할게요.
          </h1>

          <Input
            name="email"
            type="text"
            labelName="이메일"
            placeholder={'email@address.com'}
            required={{
              value: true,
              message: '이메일을 알려주세요',
            }}
            pattern={{
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: '이메일 형식에 맞지 않아요',
            }}
          />
        </div>
        <Button variant="primary" size="large" className="w-full">
          다음
        </Button>
      </form>
    </FormProvider>
  );
}
