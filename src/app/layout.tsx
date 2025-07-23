import { Fredoka} from 'next/font/google';

import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';
import Scroll from './components/scroll';

const fredokaFont = Fredoka({
  weight:['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-fredoka',
})

export const metadata: Metadata = {
  title: 'CareLoops Daycare Center',
  description: 'At Careloop, our mission is to create a healthy community where all children feel loved and cared for',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fredokaFont.variable}>
      <body>
        <Header />
        <Scroll />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
