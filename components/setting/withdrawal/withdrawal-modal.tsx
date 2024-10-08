import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { pathname } from '@/constants/path';
import { deleteCookie } from '@/libs/cookie';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface WithdrawalModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

export function WithdrawalModal({
  isModalOpen,
  onClose,
}: WithdrawalModalProps) {
  const route = useRouter();

  const hanelWithdrawal = () => {
    deleteCookie('21-pl-rf');
    deleteCookie('21-pl-ac');
    axios.defaults.headers.common.Authorization = '';
    onClose();
    route.replace(pathname.WORK_THROUGH);
  };

  return (
    <Modal isOpen={isModalOpen}>
      <div className="p-4 bg-gray-700 rounded-3xl">
        <div className="text-m_light text-white-0.9 text-center py-4">
          탈퇴했습니다
          <br />
          그동안 21planet과 함께해 주셔서 감사합니다.
        </div>
        <Button
          variant="primary"
          size="large"
          className="w-full"
          onClick={hanelWithdrawal}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
}
