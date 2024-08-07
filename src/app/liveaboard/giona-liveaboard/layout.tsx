import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giona Liveaboard - Sightsea Expeditions',
  description: 'Giona liveaboard is wooden phinisi boat that Offering you the best experience for you to new Ocean adventures and memories with your loved Ones. Our experienced crew will provide all the necessary amenities and services to make your vacation a memorable experience.',
  keywords: 'Giona Liveaboard, luxury liveaboard, dive liveaboard, liveaboard diving, diving vacations, underwater adventures, liveaboard cruises, luxury dive trips, liveaboard travel, diving cruises, liveaboard experience, ocean cruises, dive boat vacations, luxury yacht cruises, premium liveaboard',
  openGraph: {
    title: 'Giona Liveaboard - Sightsea Expeditions',
    description: 'Giona liveaboard is wooden phinisi boat that Offering you the best experience for you to new Ocean adventures and memories with your loved Ones. Our experienced crew will provide all the necessary amenities and services to make your vacation a memorable experience.',
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
