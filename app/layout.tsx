import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from './client-layout';
import { BackgroundLayout } from './(pages)/background-layout';
import { WebViewControl } from './webViewControl';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  viewport:
    'initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-screen h-screen font-SUIT"
        style={{
          background: 'linear-gradient(0deg, #302773 0%, #0E0D1A 100%)',
        }}
      >
        <ClientLayout>
          <div className="w-full h-full  max-w-[500px] mx-auto relative">
            {children}
            <BackgroundLayout />
            <WebViewControl />
          </div>
        </ClientLayout>
        <div id="modal-root" />
      </body>
    </html>
  );
}
