'use client';

import { useEffect, useRef } from 'react';

export function KakaoAdfit() {
  const divRef = useRef(false);

  useEffect(() => {
    if (!divRef.current) {
      let ins = document.createElement('ins');
      let scr = document.createElement('script');
      ins.className = 'kakao_ad_area';
      // ins.style = "display:none; width:100%;";
      scr.async = true;
      scr.type = 'text/javascript';
      scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
      ins.setAttribute('data-ad-width', '320');
      ins.setAttribute('data-ad-height', '50');
      ins.setAttribute('data-ad-unit', 'DAN-jpDCarBUpJJ1y1pq');
      document.querySelector('.adfit')?.appendChild(ins);
      document.querySelector('.adfit')?.appendChild(scr);
      divRef.current = true;
    }
  }, []);

  return <div className="adfit" />;
}
