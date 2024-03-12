import { BottomNavigation } from '@/components/common/bottom-navigation';
import { ChallengeList } from '@/components/challenge/challenge-list/challenge-list';
import { Greeting } from '@/components/challenge/challenge-list/greeting';
import { ChallengeListHeader } from '@/components/challenge/challenge-list/header';
import { KakaoAdfit } from '@/components/third-party/kakao-adfit';

export default function ChallengePage() {
  return (
    <main className="w-full h-full relative flex flex-col justify-between">
      <KakaoAdfit />
      <div>
        <ChallengeListHeader />
        <Greeting />
      </div>
      <ChallengeList />
      <BottomNavigation />
    </main>
  );
}
