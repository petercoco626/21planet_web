import { useRouter } from 'next/navigation';
import { Button } from '../base/button';
import { pathname } from '@/constants/path';

export function ForgetPasswordGuide() {
  const route = useRouter();

  const handleRouteForgetPasswordScreen = () => {
    route.push(pathname.FORGET_PASSWORD);
  };

  return (
    <div className="flex flex-row gap-x-1 items-center justify-center">
      <div className="text-s_light text-white-0.5">비밀번호를 잊으셨나요?</div>
      <Button
        size="middle"
        variant="text"
        onClick={handleRouteForgetPasswordScreen}
      >
        비밀번호 찾기
      </Button>
    </div>
  );
}
