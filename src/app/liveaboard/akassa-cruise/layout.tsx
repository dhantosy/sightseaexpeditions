import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akassa Cruise - Sightsea Expeditions',
  description: 'Akassa Cruise is a luxury wooden phinishi boat that offers fantastic sailing trips in Komodo National Park. Our experienced crew will provide all the necessary amenities and services to make your vacation a memorable experience.',
  keywords: 'Akassa Cruise, luxury liveaboard, dive liveaboard, liveaboard diving, diving vacations, underwater adventures, liveaboard cruises, luxury dive trips, liveaboard travel, diving cruises, liveaboard experience, ocean cruises, dive boat vacations, luxury yacht cruises, premium liveaboard',
  openGraph: {
    title: 'Akassa Cruise - Sightsea Expeditions',
    description: 'Akassa Cruise is a luxury wooden phinishi boat that offers fantastic sailing trips in Komodo National Park. Our experienced crew will provide all the necessary amenities and services to make your vacation a memorable experience.',
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
