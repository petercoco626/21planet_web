'use client';
import { pathname } from '@/constants/path';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function WebViewControl() {
  const route = useRouter();

  useEffect(() => {
    if (!window.isRNView) {
      route.replace(pathname.LOGIN);
    }
  }, []);

  return <></>;
}
