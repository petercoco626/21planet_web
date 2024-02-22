import { create } from 'zustand';

interface WebviewState {
  webviewMessage: any;
  actions: {
    setWebviewMessage: (message: any) => void;
  };
}

export const useWebviewStore = create<WebviewState>()((set) => ({
  webviewMessage: null,
  actions: {
    setWebviewMessage: (message: any) => {
      set(() => ({
        webviewMessage: message,
      }));
    },
  },
}));

export const useWebviewActions = () =>
  useWebviewStore((state) => state.actions);
