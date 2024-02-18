import { Button } from '@/components/base/button';
import { Input } from '@/components/base/input';
import { useCheckCurrentPassword } from '@/hooks/api/auth';
import { useResetPasswordActions } from '@/stores/reset-password/sign-up.store';
import { useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

interface CheckCurrentPasswordFormValue {
  currentPassword: string;
}

export function CheckCurrentPasswordForm() {
  const queryClient = useQueryClient();

  const setCurrentResetPasswordProcessType =
    useResetPasswordActions().setCurrentResetPasswordProcessType;

  const { mutate: checkCurrentPasswordMutate } = useCheckCurrentPassword();

  const CheckCurrentPasswordFormMethods =
    useForm<CheckCurrentPasswordFormValue>({
      mode: 'onSubmit',
      defaultValues: {
        currentPassword: '',
      },
    });

  const { handleSubmit, setError } = CheckCurrentPasswordFormMethods;

  const handleCheckCurrentPassword = ({
    currentPassword,
  }: CheckCurrentPasswordFormValue) => {
    checkCurrentPasswordMutate(
      {
        currentPassword,
      },
      {
        onSuccess: () => {
          queryClient.setQueryData(
            ['reset-password', 'current-password'],
            currentPassword
          );
          setCurrentResetPasswordProcessType('change-password');
        },
        onError: () => {
          setError('currentPassword', {
            message: '비밀번호가 맞지 않아요',
          });
        },
      }
    );
  };

  return (
    <FormProvider {...CheckCurrentPasswordFormMethods}>
      <form
        className="w-full h-[calc(100%-56px)]"
        autoComplete="off"
        onSubmit={handleSubmit((CheckCurrentPasswordFormValue) => {
          handleCheckCurrentPassword(CheckCurrentPasswordFormValue);
        })}
      >
        <div className="mb-8">
          <h1 className="text-xxl_light text-white-0.9  mb-1 break-keep">
            현재 비밀번호를 알려주세요.
          </h1>
        </div>
        <Input
          name="currentPassword"
          type="password"
          labelName="비밀번호"
          placeholder={'비밀번호'}
          required={{
            value: true,
            message: '비밀번호를 입력해주세요.',
          }}
          className="mb-4"
        />
        <Button variant="primary" size="large" className="w-full mb-8">
          다음
        </Button>
      </form>
    </FormProvider>
  );
}
