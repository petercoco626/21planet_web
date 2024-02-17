'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../base/input';
import { Button } from '../base/button';
import { useQueryClient } from '@tanstack/react-query';
import { useSignUpActions } from '@/stores/sign-up/sign-up.store';

interface PasswordFormValue {
  password: string;
  passwordCheck: string;
}

const passwordRegex =
  /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-])(?=.*[a-zA-Z])(?=.*\d).{8,20}$/;

export function PasswordForm() {
  const queryClient = useQueryClient();

  const setCurrentSignUpProcessType =
    useSignUpActions().setCurrentSignUpProcessType;

  const defaultPassword = queryClient.getQueryData<string>([
    'sign-up',
    'password',
  ]);

  const PasswordFormMethods = useForm<PasswordFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      password: defaultPassword || '',
      passwordCheck: '',
    },
  });

  const { handleSubmit, watch } = PasswordFormMethods;

  const currentPassword = watch('password');

  const handleNextButtonClick = ({ password }: PasswordFormValue) => {
    setCurrentSignUpProcessType('terms');
    queryClient.setQueryData(['sign-up', 'password'], password);
  };

  return (
    <FormProvider {...PasswordFormMethods}>
      <form
        className="w-full h-full flex flex-col justify-between"
        autoComplete="off"
        onSubmit={handleSubmit((PasswordFormValue) => {
          handleNextButtonClick(PasswordFormValue);
        })}
      >
        <div>
          <div className="my-8">
            <h1 className="text-xxl_light text-white-0.9  mb-1 ">
              비밀번호를 적어주세요.
            </h1>
            <p className="text-s_light text-white-0.5">
              특수문자, 영문, 숫자 포함, 8~20자
            </p>
          </div>
          <Input
            name="password"
            type="password"
            labelName="비밀번호"
            placeholder={'비밀번호'}
            required={{
              value: true,
              message: '비밀번호 작성 규칙에 맞게 작성해 주세요',
            }}
            pattern={{
              value: passwordRegex,
              message: '비밀번호 작성 규칙에 맞게 작성해 주세요',
            }}
            className="mb-4"
          />
          <Input
            name="passwordCheck"
            type="password"
            labelName="비밀번호 확인"
            placeholder={'비밀번호 확인'}
            required={{
              value: true,
              message: '비밀번호와 일치하지 않아요',
            }}
            pattern={{
              value: passwordRegex,
              message: '비밀번호와 일치하지 않아요',
            }}
            validate={(value) =>
              value === currentPassword || '비밀번호와 일치하지 않아요'
            }
          />
        </div>
        <Button variant="primary" size="large" className="w-full">
          다음
        </Button>
      </form>
    </FormProvider>
  );
}
