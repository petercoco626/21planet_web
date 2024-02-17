import { ChallengeDataCardList } from '@/components/challenge/detail/challenge-data-card-list';
import { ChallengeDetailHeader } from '@/components/challenge/detail/challenge-header';
import { ChallengeInfo } from '@/components/challenge/detail/challenge-info';

interface ChallengeDetailPageParams {
  params: {
    id: string;
  };
}

export default function ChallengeDetailPage({
  params: { id },
}: ChallengeDetailPageParams) {
  return (
    <main className="w-full h-full flex flex-col justify-between">
      <div>
        <ChallengeDetailHeader challengeId={id} />
        <ChallengeInfo challengeId={id} />
      </div>
      <ChallengeDataCardList challengeId={id} />
    </main>
  );
}
