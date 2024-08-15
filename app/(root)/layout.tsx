import { Metadata } from 'next';
import '@/styles/globals.css';
import seo_config from '../config/seo-config';

export const metadata: Metadata = seo_config

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}