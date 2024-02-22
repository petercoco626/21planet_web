'use client';
import { pathname } from '@/constants/path';
import { useWebviewStore } from '@/stores/webview/webview.store';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

export function WebViewControl() {
  const route = useRouter();

  const isUIWebView = () => {
    return navigator.userAgent
      .toLowerCase()
      .match(/\(ip.*applewebkit(?!.*(version|crios))/);
  };

  const onMessageEvent = (e: any) => {
    const message = String(e.data);
    console.log(e.data);
    if (message !== 'fromApp') {
      route.replace(pathname.LOGIN);
    }
  };

  useEffect(() => {
    if (!isUIWebView()) {
      route.replace(pathname.LOGIN);
    }
  }, []);

  useEffect(() => {
    const receiver = isUIWebView() ? window : document;

    receiver.addEventListener('message', onMessageEvent);
    return () => {
      receiver.removeEventListener('message', onMessageEvent);
    };
  }, []);

  return <></>;
}
