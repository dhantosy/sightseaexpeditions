import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Header from '@/components/partial/Header';
import Footer from '@/components/partial/Footer';
import WhatsappWidget from '@/components/ui/WhatsappWidget';
import '../styles/global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const cabin = Open_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: 'Sightsea Expeditions',
  description: 'Sightsea Expeditions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${cabin.variable} ${montserrat.variable} text-bluePrimary font-cabin`}>
        <NextTopLoader
          color='#F1AD8E'
          showSpinner={false}
          height={5}
        />
        <Header />
        {children}
        <WhatsappWidget />
        <Footer />
      </body>
    </html>
  );
}
