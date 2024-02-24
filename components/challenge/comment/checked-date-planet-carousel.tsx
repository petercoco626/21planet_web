import { ChallengeCheck } from '@/types/api/challenge-check';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import './carousel.css';

interface CheckedDateInfoProps {
  challengeChecks: ChallengeCheck[];
  onChangePageIndex: (newPage: number) => void;
}

export function CheckedDatePlanetCarousel({
  challengeChecks,
  onChangePageIndex,
}: CheckedDateInfoProps) {
  const settings: Settings = {
    slidesToShow: 1,
    className: 'center variable-width',
    variableWidth: true,
    centerMode: true,
    speed: 500,
    arrows: false,
    infinite: false,
    afterChange: (current) => onChangePageIndex(current),
  };

  return (
    <div className="w-full box-border mb-4">
      <Slider {...settings}>
        {challengeChecks.map((planetInfo, idx) => (
          <img
            className={clsx('w-[180px] h-[180px]')}
            src={planetInfo.planet.url}
            key={planetInfo.id}
          />
        ))}
      </Slider>
    </div>
  );
}
