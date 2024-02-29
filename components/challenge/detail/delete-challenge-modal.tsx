'use client';

import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { pathname } from '@/constants/path';
import { useDeleteChallenge } from '@/hooks/api/challenge';
import { useRouter } from 'next/navigation';

interface DeleteChallengeModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  challengeId: string;
}

export function DeleteChallengeModal({
  isModalOpen,
  onClose,
  challengeId,
}: DeleteChallengeModalProps) {
  const route = useRouter();

  const { mutateAsync: deleteChallengeMutate } = useDeleteChallenge();

  const handleDeleteChallengeButtonClick = async () => {
    await deleteChallengeMutate(
      { challengeId },
      {
        onSuccess: () => {
          route.push(pathname.CHALLENGE);
        },
      }
    );
  };

  return (
    <Modal isOpen={isModalOpen}>
      <div className="p-4 bg-gray-700 rounded-3xl">
        <div className="text-m_light text-white-0.9 text-center py-4">
          목표를 삭제하시겠어요?
          <br />
          삭제된 목표는 복구할 수 없어요.
        </div>
        <div className="grid grid-cols-2 gap-x-2 mt-4">
          <Button
            variant="secondary"
            size="large"
            className="w-full"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            variant="primary"
            size="large"
            className="w-full"
            onClick={handleDeleteChallengeButtonClick}
          >
            삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
}
