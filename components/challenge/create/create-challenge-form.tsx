'use client';

import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';
import { useState } from 'react';
import { useToggle } from '@/hooks/use-toggle';
import { GradientButton } from '@/components/base/gradient-button';
import { Toast } from '@/components/base/toast';
import { useCreateChallenge } from '@/hooks/api/challenge';
import clsx from 'clsx';

interface CreateChallengeFormValue {
  title: string;
}

const maxTitleLength = 30;

export function CreateChallengeForm() {
  const route = useRouter();

  const { mutate: createChallengeMutate } = useCreateChallenge();

  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const { toggle, handleToggleOff, handleToggleOn } = useToggle();

  const CreateChallengeFormMethods = useForm<CreateChallengeFormValue>({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
    },
  });

  const { handleSubmit, register, watch } = CreateChallengeFormMethods;

  const currentTitle = watch('title');

  const handleCreateChallengeButtonClick = ({
    title,
  }: CreateChallengeFormValue) => {
    const replacedTitle = title.replaceAll('\n', ' ').trim();

    if (replacedTitle.length === 0) {
      setLoginErrorMessage('목표를 적어주세요.');
      handleToggleOn();
      return;
    }

    createChallengeMutate(
      { title: replacedTitle, type: 'COMMON' },
      {
        onSuccess: () => {
          route.push(pathname.CHALLENGE);
        },
      }
    );
  };

  const onCreateChallengeError = (
    error: FieldErrors<CreateChallengeFormValue>
  ) => {
    if (error.title?.message) {
      setLoginErrorMessage(error.title?.message);
      handleToggleOn();
    }
  };

  return (
    <FormProvider {...CreateChallengeFormMethods}>
      <form
        className="w-full h-[calc(100%-56px)] flex flex-col justify-between pt-8 box-border"
        autoComplete="off"
        onSubmit={handleSubmit((CreateChallengeFormValue) => {
          handleCreateChallengeButtonClick(CreateChallengeFormValue);
        }, onCreateChallengeError)}
      >
        <div className="px-6 pb-6 w-full">
          <div className="mb-8 text-center">
            <h1 className="text-xxl_light text-white-0.9  mb-2 break-keep">
              어떤 습관을 만들고 싶나요?
            </h1>
            <p className="text-s_light text-white-0.5">
              목표명은 변경이 어려우니 한 번 더 확인해 주세요.
            </p>
          </div>
        </div>
        <textarea
          maxLength={maxTitleLength}
          className="w-full text-xxxl_bold h-[200px] px-10 text-white-0.9 resize-none bg-transparent caret-violet-400 outline-none text-center "
          {...register('title', {
            required: {
              value: true,
              message: '목표를 적어주세요.',
            },
            max: {
              value: maxTitleLength,
              message: `${maxTitleLength}자 이하로 작성해주세요!`,
            },
          })}
        />
        <div className="flex flex-col items-center">
          <Toast
            message={loginErrorMessage}
            classname="mb-[2px]"
            isToastOn={toggle}
            onToastOff={handleToggleOff}
          />
          <div
            className={clsx(
              'text-xs_light  mx-auto mb-1',
              currentTitle.length === maxTitleLength
                ? 'text-red-1'
                : 'text-white-0.5'
            )}
          >
            {currentTitle.length}/{maxTitleLength}
          </div>
          <GradientButton
            variant="gradient-full"
            size="large"
            className="w-full"
          >
            완료
          </GradientButton>
        </div>
      </form>
    </FormProvider>
  );
}
