import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Raja Ampat Dive Center - Sightsea Expeditions',
  description: 'Immerse yourself in the breathtaking beauty of Raja Ampat with our world-class dive center. Discover a marine wonderland teeming with life, from vibrant coral reefs to mesmerizing manta ray cleaning stations. Experience unparalleled diving adventures with our expert guides and luxurious liveaboards.',
  keywords: 'Raja Ampat dive center, Raja Ampat diving, liveaboard Raja Ampat, dive sites Raja Ampat, manta ray diving, underwater photography Raja Ampat, diving holidays Raja Ampat, best dive sites in the world, luxury dive vacations, dive travel, scuba diving Raja Ampat',
  openGraph: {
    title: 'Lombok Dive Center - Sightsea Expeditions',
    description: 'Immerse yourself in the breathtaking beauty of Raja Ampat with our world-class dive center. Discover a marine wonderland teeming with life, from vibrant coral reefs to mesmerizing manta ray cleaning stations. Experience unparalleled diving adventures with our expert guides and luxurious liveaboards.',
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
