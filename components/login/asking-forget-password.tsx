'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../base/button';
import { pathname } from '@/constants/path';

export function AskingForgetPassword() {
  const route = useRouter();

  const handleFindPasswordButtonClick = () => {
    route.push(pathname.FORGET_PASSWORD);
  };

  return (
    <div className="flex justify-center items-center gap-1 mt-7">
      <span className="text-s_light text-white-0.5">
        비밀번호를 잊으셨나요?
      </span>
      <Button
        variant="text"
        size="middle"
        onClick={handleFindPasswordButtonClick}
      >
        비밀번호 찾기
      </Button>
    </div>
  );
}
