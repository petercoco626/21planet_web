import { GoTravelButton } from '@/components/sign-up/success/GoTravelButton';
import { notFound } from 'next/navigation';

// TODO : 현재 페이지 부터는 auth가 적용 되야함.

export default function SignUpSuccessPage({
  searchParams,
}: {
  searchParams: { nickname: string };
}) {
  const nickname = searchParams.nickname;

  if (!nickname) notFound();

  return (
    <main className="px-6 pb-6 w-full h-full box-border">
      <div className="h-full w-full flex flex-col justify-between p-4 box-border">
        <div className="flex flex-col h-[48px] " />
        <div className="text-xxxl_medium text-white-0.9 text-center">
          <span className="text-violet-300">{nickname}</span>님, 계정을
          생성했어요.
          <br /> 21일간의 습관 만들기 여행을
          <br />
          떠나볼까요?
        </div>
        <GoTravelButton />
      </div>
    </main>
  );
}
