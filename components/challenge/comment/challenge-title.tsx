interface ChallengeTitleProps {
  title: string;
}

export function ChallengeTitle({ title }: ChallengeTitleProps) {
  return (
    <div className="flex justify-center">
      <span className="rounded-xl bg-white-0.5 mb-8 border border-gray-400 mt-4 text-white-0.9 p-3">
        {title}
      </span>
    </div>
  );
}
