'use client';

import IcCaretRight from '@/assets/icon/ic-caret-right.svg';
import { useUserProfile } from '@/hooks/api/user';
import {
  useAgreeMarketingTerm,
  useDisagreeMarketingTerm,
  useAgreePersonalForMarketingTerm,
  useDisagreePersonalForMarketingTerm,
} from '@/hooks/api/auth';
import { useQueryClient } from '@tanstack/react-query';
import { getToday } from '@/libs/utils';
import OptionListLayout from '../option-list-layout';
import { Toggle } from '@/components/base/toggle';
import { useState } from 'react';
import { useToggle } from '@/hooks/use-toggle';
import { Toast } from '@/components/base/toast';
import { TermNotionModal } from '../term-notion-modal';
import { termNotionIdInfo } from '@/constants/term-notion';

export function NotificationMarketing() {
  const { data: userProfile, error } = useUserProfile();

  const queryClient = useQueryClient();

  const { toggle, handleToggleOff, handleToggleOn } = useToggle();

  const {
    toggle: isMarketingTermModalOpen,
    handleToggleOn: handleMarketingTermModalOpen,
    handleToggleOff: handleMarketingTermModalClose,
  } = useToggle();

  const {
    toggle: isMarketingPersonalTermModalOpen,
    handleToggleOn: handleMarketingPersonalTermModalOpen,
    handleToggleOff: handleMarketingPersonalTermModalClose,
  } = useToggle();

  const [toastMessage, setToastMessage] = useState('');

  const { mutateAsync: agreeMarktingTermMutate } = useAgreeMarketingTerm();

  const { mutateAsync: disagreeMarktingTermMutate } =
    useDisagreeMarketingTerm();

  const { mutateAsync: agreePersonalForMarktingTermMutate } =
    useAgreePersonalForMarketingTerm();

  const { mutateAsync: disagreePersonalForMarktingTermMutate } =
    useDisagreePersonalForMarketingTerm();

  const handleAgreeMarketingTerm = async () => {
    await agreeMarktingTermMutate(undefined, {
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ['user-profile'],
        });
        setToastMessage(`${getToday()} 마케팅 정보 수신 동의`);
        handleToggleOn();
      },
    });
  };

  const handleDisagreeMarketingTerm = async () => {
    await disagreeMarktingTermMutate(undefined, {
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ['user-profile'],
        });
        setToastMessage(`${getToday()} 마케팅 정보 수신 동의 철회`);
        handleToggleOn();
      },
    });
  };

  const handleAgreePersonalForMarketingTerm = async () => {
    await agreePersonalForMarktingTermMutate(undefined, {
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ['user-profile'],
        });
        setToastMessage(`${getToday()} 마케팅 목적 개인정보 수집 이용 동의`);
        handleToggleOn();
      },
    });
  };

  const handleDisagreePersonalForMarketingTerm = async () => {
    await disagreePersonalForMarktingTermMutate(undefined, {
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ['user-profile'],
        });
        setToastMessage(
          `${getToday()} 마케팅 목적 개인정보 수집 이용 동의 철회`
        );
        handleToggleOn();
      },
    });
  };

  if (error || !userProfile) return null;

  const optionList: OptionList = {
    options: [
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">
              마케팅 목적 개인정보 수집 이용 동의
            </div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: () => {
          handleMarketingPersonalTermModalOpen();
        },
      },
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-s_light text-white-0.5">
              {userProfile.data.termPersonalForMarketing ? '동의' : '미동의'}
            </div>
            <Toggle
              checked={userProfile.data.termPersonalForMarketing}
              onChange={async () => {
                if (userProfile.data.termPersonalForMarketing) {
                  await handleDisagreePersonalForMarketingTerm();
                  return;
                }

                await handleAgreePersonalForMarketingTerm();
              }}
            />
          </div>
        ),
        onClick: () => {},
      },
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-m_light text-white">마케팅 정보 수신 동의</div>
            <div className="w-8 h-8 flex flex-row justify-center items-center">
              <IcCaretRight className="stroke-gray-400" />
            </div>
          </div>
        ),
        onClick: () => {
          handleMarketingTermModalOpen();
        },
      },
      {
        content: (
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-s_light text-white-0.5">
              {userProfile.data.termMarketing ? '동의' : '미동의'}
            </div>
            <Toggle
              checked={userProfile.data.termMarketing}
              onChange={async () => {
                if (userProfile.data.termMarketing) {
                  await handleDisagreeMarketingTerm();
                  return;
                }

                await handleAgreeMarketingTerm();
              }}
            />
          </div>
        ),
        onClick: () => {},
      },
    ],
  };

  return (
    <>
      <OptionListLayout optionLayoutInfo={optionList} classname="mb-6" />
      <Toast
        message={toastMessage}
        classname="mb-10"
        isToastOn={toggle}
        onToastOff={handleToggleOff}
      />
      <TermNotionModal
        isModalOpen={isMarketingTermModalOpen}
        onClose={handleMarketingTermModalClose}
        notionPageId={termNotionIdInfo.marketing}
      />
      <TermNotionModal
        isModalOpen={isMarketingPersonalTermModalOpen}
        onClose={handleMarketingPersonalTermModalClose}
        notionPageId={termNotionIdInfo.personal_for_marketing}
      />
    </>
  );
}
