import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/liveaboard',
  },
  title: 'Liveaboards - Sightsea Expeditions',
  description: 'Embark on an unforgettable underwater adventure with our handpicked selection of luxury liveaboards. Explore pristine dive sites, relax in style, and create memories that last a lifetime. Discover the perfect liveaboard for your dream diving vacation.',
  keywords: 'liveaboard, luxury liveaboards, dive liveaboards, liveaboard diving, diving vacations, curated liveaboard trips, premium dive experiences, liveaboard cruises, dive boat holidays, best liveaboards, luxury dive boats, liveaboard itineraries, liveaboard destinations',
  openGraph: {
    title: 'Liveaboards - Sightsea Expeditions',
    description: 'Embark on an unforgettable underwater adventure with our handpicked selection of luxury liveaboards. Explore pristine dive sites, relax in style, and create memories that last a lifetime. Discover the perfect liveaboard for your dream diving vacation.',
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
