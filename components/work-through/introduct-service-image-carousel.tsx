import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import BrainAnimation from '@/assets/lottie/brain.json';
import FlagAnimation from '@/assets/lottie/flag.json';
import BadgeAnimation from '@/assets/lottie/badge.json';

const Lottie = dynamic(() => import('lottie-react'));

export function IntroductServiceImageCarousel() {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const settings: Settings = {
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true,
    infinite: false,
    customPaging: (idx) => (
      <div className="mt-2 flex">
        <div
          className={clsx(
            'h-2 rounded-full',
            currentSlideIdx === idx && 'w-4 bg-white',
            currentSlideIdx !== idx && 'w-2 bg-white-0.3'
          )}
        />
      </div>
    ),
    afterChange: (current) => setCurrentSlideIdx(current),
  };
  return (
    <div className="mx-auto w-[280px] mt-10 mb-9">
      <Slider {...settings}>
        {introductServiceSliderInfo.map((introduce, idx) => (
          <div key={idx}>
            <div className="w-[160px] h-[160px] mx-auto">{introduce.image}</div>
            <div className="h-[60px] text-p_s_light text-white-0.9 text-center px-4 mt-2">
              {introduce.description}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const introductServiceSliderInfo: {
  image: ReactNode;
  description: ReactNode;
}[] = [
  {
    image: <Lottie animationData={BrainAnimation} />,
    description: (
      <div>
        “무엇이든 21일간 계속하면 습관이 된다.
        <br />
        21일은 우리의 뇌가 새로운 행동에 익숙해지는데
        <br /> 걸리는 최소한의 시간이다.”
      </div>
    ),
  },
  {
    image: <Lottie animationData={FlagAnimation} />,
    description: (
      <div>
        이루고 싶은 목표를 정하고
        <br /> 21일간의 습관 만들기 여행을 떠나요.
      </div>
    ),
  },
  {
    image: <Lottie animationData={BadgeAnimation} />,
    description: (
      <div>
        매일 꾸준히 목표 달성을 위해 노력하고
        <br /> 21일 여행 완료 기념 배지를 받아요!
      </div>
    ),
  },
];
