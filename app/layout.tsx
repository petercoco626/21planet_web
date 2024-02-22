import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from './client-layout';
import { BackgroundLayout } from './(pages)/background-layout';
import { WebViewControl } from './webViewControl';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-background">
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
