interface ChallengeTitleProps {
  title: string;
}

export function ChallengeTitle({ title }: ChallengeTitleProps) {
  return (
    <div className="flex justify-center">
      <div
        className="mb-8 mt-4 border-[0.5px] border-white-0.15 text-white-0.9 relative flex items-center justify-center p-3 box-border break-keep rounded-xl backdrop-blur-lg
        "
        style={{
          background:
            'linear-gradient(115deg,rgba(122,115,153,0.6) 0%, rgba(50,46,77,0.0) 98.94%)',
        }}
      >
        {title}
      </div>
    </div>
  );
}
