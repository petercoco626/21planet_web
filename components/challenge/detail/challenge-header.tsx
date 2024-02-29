'use client';

import IcExport from '@/assets/icon/ic-export.svg';
import IcTrash from '@/assets/icon/ic-trash.svg';
import { DeleteChallengeModal } from './delete-challenge-modal';
import { useToggle } from '@/hooks/use-toggle';
import { GoBackButton } from '@/components/common/go-back-button';

interface ChallengeDetailHeaderProps {
  challengeId: string;
}

export function ChallengeDetailHeader({
  challengeId,
}: ChallengeDetailHeaderProps) {
  const {
    handleToggleOff: handleDeleteModalClose,
    toggle: isDeleteModalOpen,
    handleToggleOn,
  } = useToggle();

  const handleShareButtonClick = () => {};

  return (
    <header className="px-6 w-full h-14 py-2 flex justify-between items-center box-border">
      <GoBackButton />
      <div className="flex">
        <button
          className="w-10 h-10 flex flex-col items-center justify-center mr-2"
          onClick={handleShareButtonClick}
          type="button"
        >
          <IcExport />
        </button>
        <button
          className="w-10 h-10 flex flex-col items-center justify-center"
          onClick={() => handleToggleOn()}
          type="button"
        >
          <IcTrash />
        </button>
      </div>
      <DeleteChallengeModal
        challengeId={challengeId}
        isModalOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
      />
    </header>
  );
}
