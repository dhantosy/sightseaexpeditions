import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Komodo Dive Trip with Kaia Liveaboard - Sightsea Expeditions',
  description: 'Experience the magic of Komodo with our exclusive liveaboard cruises. Discover pristine dive sites teeming with marine life, encounter iconic Komodo dragons, and indulge in luxury. Our carefully curated itineraries offer the ultimate Komodo adventure.',
  keywords: 'Komodo dive trips, Komodo liveaboard, Komodo diving, luxury Komodo cruises, Komodo National Park, Komodo dragons, Komodo dive vacation, dive Komodo, Komodo dive sites, Komodo dive itinerary, Komodo diving holidays, Komodo dive travel, Komodo dive packages',
  openGraph: {
    title: 'Komodo Dive Trip with Kaia Liveaboard - Sightsea Expeditions',
    description: 'Experience the magic of Komodo with our exclusive liveaboard cruises. Discover pristine dive sites teeming with marine life, encounter iconic Komodo dragons, and indulge in luxury. Our carefully curated itineraries offer the ultimate Komodo adventure.',
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
