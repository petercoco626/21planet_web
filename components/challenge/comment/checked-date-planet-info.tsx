import { changeDateFormatYYMMDD } from '@/libs/utils';

interface CheckedDatePlanetInfoProps {
  title: string;
  description: string;
  checkedAt: Date;
}

export default function CheckedDatePlanetInfo({
  title,
  description,
  checkedAt,
}: CheckedDatePlanetInfoProps) {
  return (
    <>
      <div className="text-white-0.9 text-xl_bold text-center mb-2">
        {title}
      </div>
      <div className="text-white-0.7 text-s_light text-center mb-2">
        {description}
      </div>
      <div className="text-white-0.3 text-s_thin text-center mb-6">
        {changeDateFormatYYMMDD(new Date(checkedAt))}
      </div>
    </>
  );
}
