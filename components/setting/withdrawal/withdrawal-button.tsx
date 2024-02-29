'use client';

import { useToggle } from '@/hooks/use-toggle';
import { useWithdrawal } from '@/hooks/api/auth';
import { WithdrawalModal } from './withdrawal-modal';
import { Button } from '@/components/base/button';

export default function WithdrawalButton() {
  const {
    handleToggleOff: handleWithdrawalModalClose,
    toggle: isWithdrawalModalOpen,
    handleToggleOn,
  } = useToggle();

  const { mutateAsync: withdrawalMutate } = useWithdrawal();

  const handleWithdrawal = () => {
    withdrawalMutate(undefined, {
      onSuccess: handleToggleOn,
    });
  };

  return (
    <>
      <Button
        size="large"
        variant="primary"
        onClick={handleWithdrawal}
        className="w-full"
      >
        탈퇴
      </Button>
      <WithdrawalModal
        isModalOpen={isWithdrawalModalOpen}
        onClose={handleWithdrawalModalClose}
      />
    </>
  );
}
