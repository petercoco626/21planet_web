import { CreateChallengeForm } from '@/components/challenge/create/create-challenge-form';
import { CreateChallengeHeader } from '@/components/challenge/create/header';

export default function CreateChallengePage() {
  return (
    <main className="w-full h-full box-border">
      <CreateChallengeHeader />
      <CreateChallengeForm />
    </main>
  );
}
