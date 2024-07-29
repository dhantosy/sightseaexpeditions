import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat, Open_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Providers } from './providers';
import Header from '@/components/partial/Header';
import Footer from '@/components/partial/Footer';
import WhatsappWidget from '@/components/ui/WhatsappWidget';
import '../styles/global.css';

const BASE_URL = 'https://www.sightseaexpeditions.com/';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-openSans',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  robots: 'index, follow',
  title: 'Sightsea Expeditions: Personalized Diving Trips and Liveaboard Experience',
  description: 'Discover the ultimate diving experience with our expertly curated liveaboard adventures. Explore pristine underwater worlds, encounter breathtaking marine life, and indulge in unparalleled luxury. From Raja Ampat to Maldives, we offer personalized itineraries and exceptional service for discerning divers and travellers alike.',
  keywords: 'sightsea, curated diving trips, luxury dive vacations, liveaboard diving, dive travel, premium dive experiences, underwater adventures, dive destinations, diving holidays, bespoke dive itineraries, diving luxury, exclusive dive trips, diving travel agency, dive vacation planner, dive trip consultant',
  openGraph: {
    title: 'Sightsea Expeditions: Personalized Diving Trips and Liveaboard Experience',
    description: 'Discover the ultimate diving experience with our expertly curated liveaboard adventures. Explore pristine underwater worlds, encounter breathtaking marine life, and indulge in unparalleled luxury. From Raja Ampat to Maldives, we offer personalized itineraries and exceptional service for discerning divers and travellers alike.',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicons/favicon-16x16.png' />
        <link rel='mask-icon' href='/assets/favicons/safari-pinned-tab.svg' color='#050a30' />
        <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#050a30' />
        <meta name='msapplication-config' content='/assets/favicons/browserconfig.xml' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} text-bluePrimary font-openSans`}>
        <Providers>
          <NextTopLoader
            color='#F1AD8E'
            showSpinner={false}
            height={5}
          />
          <Header />
          {children}
          <WhatsappWidget />
          <Footer />
        </Providers>
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-8CKH38ZP4C' strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-8CKH38ZP4C');
        `}
        </Script>
      </body>
    </html>
  );
}
