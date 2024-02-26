import { useSearchParams } from 'next/navigation';

export function BadgeInfo() {
  const params = useSearchParams();

  const BadgeType = params.get('type');

  const BadgeTitle = params.get('title');

  if (!BadgeType || !BadgeTitle) return null;

  return (
    <div>
      <img />
      <div>{BadgeTitle}</div>
    </div>
  );
}
