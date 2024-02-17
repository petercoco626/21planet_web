import { useRouter } from 'next/navigation';
import { pathname } from '@/constants/path';
import { Button } from '@/components/base/button';

export function NoChallengeData() {
  const route = useRouter();

  const handleRouteCreateChallengeScreen = () => {
    route.push(pathname.CREATE_CHALLENGE);
  };

  return (
    <div className="mt-6">
      <div className="text-s_light text-white-0.5 mb-4 text-center">
        아직 목표를 정하지 않았어요.{'\n'}
        목표를 정하고 매일 꾸준히 달성해 봐요!
      </div>
      <Button
        size="small"
        variant="tertiary"
        onClick={handleRouteCreateChallengeScreen}
        className="w-40 mx-auto"
      >
        새로운 목표 추가
      </Button>
    </div>
  );
}
