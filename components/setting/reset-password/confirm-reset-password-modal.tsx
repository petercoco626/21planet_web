import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { pathname } from '@/constants/path';
import { useResetPasswordActions } from '@/stores/reset-password/sign-up.store';
import { useRouter } from 'next/navigation';

interface ConfirmResetPasswordModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

export function ConfirmResetPasswordModal({
  isModalOpen,
  onClose,
}: ConfirmResetPasswordModalProps) {
  const setCurrentResetPasswordProcessType =
    useResetPasswordActions().setCurrentResetPasswordProcessType;

  const route = useRouter();

  const handleModalClose = () => {
    onClose();
    route.push(pathname.SETTING);
    setCurrentResetPasswordProcessType('check-current-password');
  };
  return (
    <Modal isOpen={isModalOpen}>
      <div className="w-full h-full bg-modal-background  flex flex-row items-center justify-center">
        <div className="p-4 bg-gray-800 rounded-3xl">
          <div className="flex flex-row items-center justify-center w-[260px] h-[86px] mb-4 text-m_light text-white-0.9 text-center">
            비밀번호 변경을 완료했어요.
          </div>
          <Button
            variant="primary"
            size="large"
            className="w-full"
            onClick={handleModalClose}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
}
