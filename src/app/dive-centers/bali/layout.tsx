import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/dive-centers/bali',
  },
  title: 'Bali Dive Center - Sightsea Expeditions',
  description: 'Experience the magic of Bali`s underwater world with our world-class dive center. Discover vibrant coral reefs, encounter diverse marine life, and embark on unforgettable diving adventures. Our expert team provides top-notch equipment, personalized dive guidance, and exceptional service. Whether you`re a seasoned diver or a beginner, we`ll ensure your Bali diving experience is unforgettable.',
  keywords: 'Bali dive center, Bali diving, scuba diving Bali, dive shop Bali, Bali dive sites, learn to dive Bali, PADI courses Bali, dive packages Bali, Bali dive holidays, best dive spots Bali, underwater Bali, marine life Bali, diving equipment rental Bali, dive guides Bali, Bali dive experience',
  openGraph: {
    title: 'Bali Dive Center - Sightsea Expeditions',
    description: 'Experience the magic of Bali`s underwater world with our world-class dive center. Discover vibrant coral reefs, encounter diverse marine life, and embark on unforgettable diving adventures. Our expert team provides top-notch equipment, personalized dive guidance, and exceptional service. Whether you`re a seasoned diver or a beginner, we`ll ensure your Bali diving experience is unforgettable.',
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
