import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { useState } from 'react';
import clsx from 'clsx';

export function Carousel() {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const settings: Settings = {
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true,
    infinite: false,
    customPaging: (idx) => (
      <div className="mt-2 flex justify-center">
        <div
          className={clsx(
            'h-2 rounded-full  ',
            currentSlideIdx === idx && 'w-4 bg-white',
            currentSlideIdx !== idx && 'w-2 bg-white-0.3'
          )}
        />
      </div>
    ),
    afterChange: (current) => setCurrentSlideIdx(current),
  };
  return (
    <div className="mx-auto w-[260px] mt-10 mb-9">
      <Slider {...settings}>
        {introductServiceSliderInfo.map((introduce) => (
          <div key={introduce.description}>
            <div className="h-[240px] bg-white-0.3" />
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
  image: string;
  description: string;
}[] = [
  {
    image: '',
    description:
      '“무엇이든 21일간 계속하면 습관이 된다.21일은 우리의 뇌가 새로운 행동에 익숙해지는데 걸리는 최소한의 시간이다.”',
  },
  {
    image: '',
    description:
      '이루고 싶은 목표를 정하고 21일간의 습관 만들기 여행을 떠나요.',
  },
  {
    image: '',
    description:
      '매일 꾸준히 목표 달성을 위해 노력하고 21일 여행 완료 기념 배지를 받아요!',
  },
];
