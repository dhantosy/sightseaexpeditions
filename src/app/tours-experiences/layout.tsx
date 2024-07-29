import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tours & Experience - Sightsea Expeditions',
  description: 'Discover the heart and soul of your destination with our curated land-based tours and cultural experiences. From ancient ruins to vibrant city life, we offer unforgettable journeys that immerse you in local traditions, cuisine, and history. Explore hidden gems, meet fascinating people, and create lasting memories.',
  keywords: 'land-based tours, cultural experiences, cultural tours, immersive travel, cultural immersion, destination experiences, authentic travel, cultural tourism, heritage tours, local experiences, guided tours, cultural exploration, cultural discovery, cultural heritage, cultural activities, cultural attractions',
  openGraph: {
    title: 'Tours & Experience - Sightsea Expeditions',
    description: 'Discover the heart and soul of your destination with our curated land-based tours and cultural experiences. From ancient ruins to vibrant city life, we offer unforgettable journeys that immerse you in local traditions, cuisine, and history. Explore hidden gems, meet fascinating people, and create lasting memories.',
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
