'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { Input } from '@/components/base/input';
import { Button } from '@/components/base/button';
import { useChangePassword } from '@/hooks/api/auth';
import { useUserProfile } from '@/hooks/api/user';
import { ConfirmResetPasswordModal } from './confirm-reset-password-modal';
import { useToggle } from '@/hooks/use-toggle';
import { passwordRegex } from '@/constants/regex';

interface ChangePasswordFormValue {
  newPassword: string;
  newPasswordCheck: string;
}

export function ChangePasswordForm() {
  const queryClient = useQueryClient();

  const { mutateAsync: changePasswordMutate } = useChangePassword();

  const { data: userProfile } = useUserProfile();

  const {
    handleToggleOff: handleLogoutModalClose,
    toggle: isLogoutModalOpen,
    handleToggleOn,
  } = useToggle();

  const currentPassword = queryClient.getQueryData<string>([
    'reset-password',
    'current-password',
  ]);

  const changePasswordFormMethods = useForm<ChangePasswordFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      newPassword: '',
      newPasswordCheck: '',
    },
  });

  const { handleSubmit, watch } = changePasswordFormMethods;

  const currentNewPassword = watch('newPassword');

  const handleChangePasswordButtonClick = ({
    newPassword,
  }: ChangePasswordFormValue) => {
    if (!currentPassword) {
      throw new Error('에러가 발생하였습니다.');
    }

    changePasswordMutate(
      {
        newPassword,
        email: userProfile?.data.email || '',
        password: currentPassword,
      },
      {
        onSuccess: () => {
          handleToggleOn();
        },
      }
    );
  };

  return (
    <FormProvider {...changePasswordFormMethods}>
      <form
        className="w-full h-full flex flex-col justify-between"
        autoComplete="off"
        onSubmit={handleSubmit((ChangePasswordFormValue) => {
          handleChangePasswordButtonClick(ChangePasswordFormValue);
        })}
      >
        <div>
          <div className="mb-8">
            <h1 className="text-xxl_light text-white-0.9  mb-1 ">
              비밀번호를 적어주세요.
            </h1>
            <p className="text-s_light text-white-0.5">
              특수문자, 영문, 숫자 포함, 8~20자
            </p>
          </div>
          <Input
            name="newPassword"
            type="password"
            labelName="새로운 비밀번호"
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
            name="newPasswordCheck"
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
              value === currentNewPassword || '비밀번호와 일치하지 않아요'
            }
            className="mb-8"
          />
        </div>
        <Button variant="primary" size="large" className="w-full">
          완료
        </Button>
      </form>
      <ConfirmResetPasswordModal
        isModalOpen={isLogoutModalOpen}
        onClose={handleLogoutModalClose}
      />
    </FormProvider>
  );
}
