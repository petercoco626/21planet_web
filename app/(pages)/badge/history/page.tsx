import { BadgeInfo } from '@/components/badge/history/badge-into';
import { BadgeHistoryHeader } from '@/components/badge/history/header';

export default function BadgeHistoryPage() {
  return (
    <main className="w-full h-full">
      <BadgeHistoryHeader />
      <BadgeInfo />
    </main>
  );
}
