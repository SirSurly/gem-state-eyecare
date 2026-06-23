import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gem State Eyecare | Boise Eye Doctor',
  description: 'Your Eyes | Our Focus. Comprehensive eye care in Boise, Idaho since 1971.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
