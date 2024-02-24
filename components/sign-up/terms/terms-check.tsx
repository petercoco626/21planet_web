import { useSignUp } from '@/hooks/api/auth';
import { useToggle } from '@/hooks/use-toggle';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Toast } from '../../base/toast';
import { GradientButton } from '../../base/gradient-button';
import { TermscheckForm } from './terms-check-form';
import { useSignUpActions } from '@/stores/sign-up/sign-up.store';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from '@/libs/cookie';
import { useDebounce } from '@/hooks/use-debounce';

export type TermsInfoType =
  | 'age'
  | 'service'
  | 'personal'
  | 'personal_for_marketing'
  | 'marketing';

export type TermsInfo = {
  type: TermsInfoType;
  text: string;
  isChecked: boolean;
};

const termsInfoDefalut: TermsInfo[] = [
  {
    type: 'age',
    text: '(필수) 만 14세 이상입니다.',
    isChecked: false,
  },
  {
    type: 'service',
    text: '(필수) 서비스 이용약관',
    isChecked: false,
  },
  {
    type: 'personal',
    text: '(필수) 개인정보 수집 이용 동의',
    isChecked: false,
  },
  {
    type: 'personal_for_marketing',
    text: '(선택) 마케팅 목적의 개인정보 수집 이용',
    isChecked: false,
  },
  {
    type: 'marketing',
    text: '(선택) 마케팅 정보 수신 동의',
    isChecked: false,
  },
];

export function TermsCheck() {
  const route = useRouter();

  const queryClient = useQueryClient();

  const setCurrentSignUpProcessType =
    useSignUpActions().setCurrentSignUpProcessType;

  const { toggle, handleToggleOff, handleToggleOn } = useToggle();

  const { mutateAsync: signUpMutate } = useSignUp();

  const email = queryClient.getQueryData<string>(['sign-up', 'email']);

  const nickname = queryClient.getQueryData<string>(['sign-up', 'nickname']);

  const password = queryClient.getQueryData<string>(['sign-up', 'password']);

  const [termsInfo, setTermsInfo] = useState(termsInfoDefalut);

  const handleCheckTerm = (termsType: TermsInfoType) => {
    setTermsInfo(
      termsInfo.map((termsInfo) => {
        if (termsInfo.type === termsType) {
          return {
            ...termsInfo,
            isChecked: !termsInfo.isChecked,
          };
        }
        return termsInfo;
      })
    );
  };

  const handleCheckAllTerm = () => {
    //TODO : 현재 all 상태가 뭔지 필요.
    setTermsInfo(
      termsInfo.map((termsInfo) => {
        return {
          ...termsInfo,
          isChecked: true,
        };
      })
    );
  };

  const handleStartServiceButtonClick = useDebounce(async () => {
    if (!nickname || nickname.length === 0) {
      alert('닉네임이 제대로 입력되지 않았어요 !');
      return;
    }
    if (!email || email.length === 0) {
      alert('이메일이 제대로 입력되지 않았어요 !');
      return;
    }
    if (!password || password.length === 0) {
      alert('비밀번호이 제대로 입력되지 않았어요 !');
      return;
    }

    const termsAge = termsInfo.find((terms) => terms.type === 'age');
    const termsMarketing = termsInfo.find(
      (terms) => terms.type === 'marketing'
    );
    const termsPersonal = termsInfo.find((terms) => terms.type === 'personal');
    const termsPersonalForMarketing = termsInfo.find(
      (terms) => terms.type === 'personal_for_marketing'
    );
    const termsService = termsInfo.find((terms) => terms.type === 'service');

    if (
      !termsAge ||
      !termsMarketing ||
      !termsPersonal ||
      !termsPersonalForMarketing ||
      !termsService
    ) {
      alert('약관 에러가 발생했습니다.');
      return;
    }

    if (
      !termsAge.isChecked ||
      !termsPersonal.isChecked ||
      !termsService.isChecked
    ) {
      handleToggleOn();
      return;
    }

    await signUpMutate(
      {
        email,
        password,
        nickname,
        term_age: termsAge.isChecked,
        term_service: termsService.isChecked,
        term_personal: termsPersonal.isChecked,
        term_personal_for_marketing: termsPersonalForMarketing.isChecked,
        term_marketing: termsMarketing.isChecked,
      },
      {
        onSuccess: ({ data }) => {
          axios.defaults.headers.common.Authorization = `Bearer ${data?.accessToken}`;
          setCookie('21-pl-rf', data?.refreshToken || '', 30);
          route.push(`/sign-up/success?nickname=${nickname}`);
        },
        onError: () => {
          alert('에러가 발생하였습니다. 관리자에게 문의해주세요!');
        },
      }
    );
  }, 300);

  return (
    <div className="w-full h-full flex flex-col justify-between ">
      <div>
        <h1 className="text-xxl_light text-white-0.9 mb-8">
          약관만 동의하면 끝이에요!
        </h1>
        <TermscheckForm
          onCheckTerms={handleCheckTerm}
          onCheckAllTerms={handleCheckAllTerm}
          termsInfo={termsInfo}
        />
      </div>
      <div className="px-6">
        <Toast
          message={'필수 약관을 동의해 주세요'}
          classname="mb-6"
          isToastOn={toggle}
          onToastOff={handleToggleOff}
        />
        <GradientButton
          size="large"
          variant="gradient"
          onClick={handleStartServiceButtonClick}
        >
          다 했어요!
        </GradientButton>
      </div>
    </div>
  );
}
