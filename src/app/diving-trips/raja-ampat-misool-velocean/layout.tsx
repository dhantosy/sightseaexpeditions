import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Velocean Raja Ampat Trip - Sightsea Expeditions',
  description: 'Experience the pinnacle of diving luxury with Velocean Raja Ampat. Immerse yourself in the breathtaking beauty of this underwater wonderland, teeming with vibrant coral reefs and extraordinary marine life. Our curated liveaboard adventure offers unparalleled comfort, world-class diving, and personalized service.',
  keywords: 'Velocean Raja Ampat, Raja Ampat diving, luxury dive trip, liveaboard Raja Ampat, dive vacation Indonesia, Raja Ampat liveaboard, premium dive experience, underwater paradise, marine biodiversity, luxury diving, dive travel, curated dive vacations, dive into perfection',
  openGraph: {
    title: 'Velocean Raja Ampat Trip - Sightsea Expeditions',
    description: 'Experience the pinnacle of diving luxury with Velocean Raja Ampat. Immerse yourself in the breathtaking beauty of this underwater wonderland, teeming with vibrant coral reefs and extraordinary marine life. Our curated liveaboard adventure offers unparalleled comfort, world-class diving, and personalized service.',
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
