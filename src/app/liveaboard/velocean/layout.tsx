import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Velocean Liveaboard - Sightsea Expeditions',
  description: 'VELOCEAN is the brand new 52 Meters scuba purpose-built liveaboard with all Aluminium hull, deck superstructure and powerful twin marine engines providing 20 knots cruising speed making her the fastest diving liveaboard in Indonesia.',
  keywords: 'Velocean liveaboard, luxury liveaboard, dive liveaboard, liveaboard diving, diving vacations, underwater adventures, liveaboard cruises, luxury dive trips, liveaboard travel, diving cruises, liveaboard experience, ocean cruises, dive boat vacations, luxury yacht cruises, premium liveaboard',
  openGraph: {
    title: 'Velocean Liveaboard - Sightsea Expeditions',
    description: 'VELOCEAN is the brand new 52 Meters scuba purpose-built liveaboard with all Aluminium hull, deck superstructure and powerful twin marine engines providing 20 knots cruising speed making her the fastest diving liveaboard in Indonesia.',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
