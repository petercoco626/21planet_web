import { BottomNavigation } from '@/components/challenge/challenge-list/bottom-navigation';
import { ChallengeList } from '@/components/challenge/challenge-list/challenge-list';
import { Greeting } from '@/components/challenge/challenge-list/greeting';
import { ChallengeListHeader } from '@/components/challenge/challenge-list/header';

export default function ChallengePage() {
  return (
    <main className="w-full h-full relative flex flex-col justify-between">
      <div>
        <ChallengeListHeader />
        <Greeting />
      </div>
      <ChallengeList />
      <BottomNavigation />
    </main>
  );
}
