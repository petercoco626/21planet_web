'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../base/input';
import { Button } from '../base/button';
import { useIssueTempPassword } from '@/hooks/api/auth';
import { useToggle } from '@/hooks/use-toggle';
import { useState } from 'react';
import { IssueTempPasswordModal } from './issue-temp-password-modal';

interface IssueTempPasswordFormValue {
  email: string;
}

export function IssueTempPasswordForm() {
  const { mutate: issueTempPasswordMutate } = useIssueTempPassword();

  const {
    handleToggleOff: handleIssueTempPasswordClose,
    toggle: isIssueTempPasswordModalOpen,
    handleToggleOn: handleIssueTempPasswordOn,
  } = useToggle();

  const IssueTempPasswordFormMethods = useForm<IssueTempPasswordFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  const { handleSubmit } = IssueTempPasswordFormMethods;

  const [modalMessage, setModalMessage] = useState('');

  const handleIssueTempPasswordButtonClick = ({
    email,
  }: IssueTempPasswordFormValue) => {
    issueTempPasswordMutate(
      { email },
      {
        onSuccess: () => {
          handleIssueTempPasswordOn();
          setModalMessage(
            '임시 비밀번호를 보냈습니다. 로그인 후 마이페이지 > 계정 관리에서 비밀번호를 변경해 주세요.'
          );
        },
        onError: () => {
          setModalMessage('계정이 없어요. 회원가입 해주세요.');
          handleIssueTempPasswordOn();
        },
      }
    );
  };

  return (
    <FormProvider {...IssueTempPasswordFormMethods}>
      <form
        className="w-full h-[calc(100%-56px])"
        autoComplete="off"
        onSubmit={handleSubmit((IssueTempPasswordFormValue) => {
          handleIssueTempPasswordButtonClick(IssueTempPasswordFormValue);
        })}
      >
        <div className="mb-8">
          <h1 className="text-xxl_light text-white-0.9 mb-1">
            비밀번호를 잊으셨나요?
          </h1>
          <p className="text-s_light text-white-0.5">
            가입한 계정을 알려주세요. 임시 비밀번호를 알려드릴게요.
          </p>
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
          pattern={{
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: '이메일을 확인해주세요',
          }}
        />
        <Button variant="primary" size="large" className="w-full mt-8">
          임시 비밀번호 발급
        </Button>
        <IssueTempPasswordModal
          isModalOpen={isIssueTempPasswordModalOpen}
          onClose={handleIssueTempPasswordClose}
          message={modalMessage}
        />
      </form>
    </FormProvider>
  );
}
