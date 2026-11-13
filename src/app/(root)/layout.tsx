import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'INBS Real Estate',
  description: 'Real estate brokerage, consultation and transaction assistance in Dubai.',
};

export default function RedirectRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
