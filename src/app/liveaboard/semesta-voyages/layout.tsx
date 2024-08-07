import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Semesta Voyages - Sightsea Expeditions',
  description: 'Designed with meticulous attention to detail, this ship embodies the pinnacle of modern maritime engineering and luxury. Semesta Voyages promises an unparalleled journey across the seas, offering passengers an unforgettable experience of comfort, elegance, and adventure.',
  keywords: 'Semesta Voyages, luxury liveaboard, dive liveaboard, liveaboard diving, diving vacations, underwater adventures, liveaboard cruises, luxury dive trips, liveaboard travel, diving cruises, liveaboard experience, ocean cruises, dive boat vacations, luxury yacht cruises, premium liveaboard',
  openGraph: {
    title: 'Semesta Voyages - Sightsea Expeditions',
    description: 'Designed with meticulous attention to detail, this ship embodies the pinnacle of modern maritime engineering and luxury. Semesta Voyages promises an unparalleled journey across the seas, offering passengers an unforgettable experience of comfort, elegance, and adventure.',
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
