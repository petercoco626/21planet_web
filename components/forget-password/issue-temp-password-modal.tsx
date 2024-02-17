import { Modal } from '../base/modal';
import { Button } from '../base/button';

interface IssueTempPasswordModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  message: string;
}

export function IssueTempPasswordModal({
  isModalOpen,
  onClose,
  message,
}: IssueTempPasswordModalProps) {
  return (
    <Modal isOpen={isModalOpen}>
      <div className="p-4 bg-gray-800 rounded-3xl">
        <div className="py-4 min-h-[86px] w-[260px] box-border flex flex-row items-center justify-center mb-4">
          <div className="text-m_light text-white-0.9 text-center">
            {message}
          </div>
        </div>
        <Button
          variant="primary"
          size="large"
          className="w-full"
          onClick={onClose}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
}
