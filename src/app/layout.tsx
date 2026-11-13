import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'INBS Real Estate', template: '%s | INBS Real Estate' },
  description: 'Real estate brokerage, consultation and transaction assistance in Dubai.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
