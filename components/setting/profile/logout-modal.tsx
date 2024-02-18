import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { pathname } from '@/constants/path';
import { deleteCookie } from '@/libs/cookie';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface LogoutModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

export function LogoutModal({ isModalOpen, onClose }: LogoutModalProps) {
  const route = useRouter();

  const hanelLogout = () => {
    deleteCookie('21-pl-rf');
    deleteCookie('21-pl-ac');
    axios.defaults.headers.common.Authorization = '';
    onClose();
    route.replace(pathname.LOGIN);
  };

  return (
    <Modal isOpen={isModalOpen}>
      <div className="w-full h-full bg-modal-background  flex flex-row items-center justify-center">
        <div className="p-4 bg-gray-800 rounded-3xl">
          <div className="text-m_light text-white-0.9 text-center py-4">
            로그아웃 할까요?
          </div>
          <div className="grid grid-cols-2 gap-x-2 mt-4">
            <Button
              variant="tertiary"
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
              onClick={hanelLogout}
            >
              로그아웃
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
