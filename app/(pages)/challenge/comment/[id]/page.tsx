import { ChallengeCommentInfo } from '@/components/challenge/comment';
import { ChallengeCommentHeader } from '@/components/challenge/comment/header';

interface ChallengeCommentPageParams {
  params: {
    id: string;
  };
}

export default function ChallengeCommentPage({
  params: { id: challengeId },
}: ChallengeCommentPageParams) {
  return (
    <div className="overflow-hidden">
      <ChallengeCommentHeader />
      <ChallengeCommentInfo challengeId={challengeId} />
    </div>
  );
}
