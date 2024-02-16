import { useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';

const { StatusBarManager } = NativeModules;

export default function useStatusHeight() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: any) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return { statusBarHeight };
}
