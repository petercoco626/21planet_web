import { BadgeList } from '@/components/badge/badge-list';
import { BadgeHeader } from '@/components/badge/header';
import { BottomNavigation } from '@/components/common/bottom-navigation';

export default function BadgePage() {
  return (
    <main className="w-full h-full relative">
      <div className=" box-border h-full flex flex-col justify-between">
        <div>
          <BadgeHeader />
          <div className="mt-8 px-8">
            <h1 className="text-xxl_medium text-white-0.9 mb-2 text-center">
              배지 컬렉션
            </h1>
            <p className="text-s_light text-white-0.5 text-center mb-2">
              내 목표를 끝까지 달성할 때마다 배지를 받아요.
              <br />
              21일간의 노력을 배지로 기억해요.
            </p>
          </div>
        </div>
        <BadgeList />
      </div>
      <BottomNavigation />
    </main>
  );
}
