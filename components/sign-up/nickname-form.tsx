'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../base/input';
import { Button } from '../base/button';
import { useQueryClient } from '@tanstack/react-query';
import { useSignUpActions } from '@/stores/sign-up/sign-up.store';

interface NicknameFormValue {
  nickname: string;
}

export function NicknameForm() {
  const queryClient = useQueryClient();

  const setCurrentSignUpProcessType =
    useSignUpActions().setCurrentSignUpProcessType;

  const defaultNickname = queryClient.getQueryData<string>([
    'sign-up',
    'nickname',
  ]);

  const nicknameFormMethods = useForm<NicknameFormValue>({
    mode: 'all',
    defaultValues: {
      nickname: defaultNickname || '',
    },
  });

  const { handleSubmit } = nicknameFormMethods;

  const handleNextButtonClick = ({ nickname }: NicknameFormValue) => {
    setCurrentSignUpProcessType('email');
    queryClient.setQueryData(['sign-up', 'nickname'], nickname);
  };

  return (
    <FormProvider {...nicknameFormMethods}>
      <form
        className="w-full h-full flex flex-col justify-between"
        autoComplete="off"
        onSubmit={handleSubmit((nicknameFormValue) => {
          handleNextButtonClick(nicknameFormValue);
        })}
      >
        <div className="">
          <h1 className="text-xxl_light text-white-0.9  mb-8">
            21 planet에 오신 걸 환영해요.
            <br />
            어떻게 불러드릴까요?
          </h1>

          <Input
            name="nickname"
            type="text"
            placeholder={'닉네임'}
            required={{
              value: true,
              message: '닉네임을 알려주세요',
            }}
            maxLength={{
              value: 20,
              message: '닉네임은 20자 이하로 정해주세요',
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
