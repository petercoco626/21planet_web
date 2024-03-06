import BgStarLeft from '@/assets/image/bg-star-left.png';
import BgStarRight from '@/assets/image/bg-star-right.png';

export function BackgroundLayout() {
  return (
    <div className="w-full h-full flex justify-between -z-10 absolute top-0 left-0">
      <img
        src={BgStarLeft.src}
        className="w-1/2 h-full"
        alt="21planet-background-star"
      />
      <img
        src={BgStarRight.src}
        className="w-1/2 h-full"
        alt="21planet-background-star"
      />
    </div>
  );
}
