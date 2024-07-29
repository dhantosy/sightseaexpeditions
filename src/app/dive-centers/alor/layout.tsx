import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/dive-centers/alor',
  },
  title: 'Alor Dive Center - Sightsea Expeditions',
  description: 'Experience the magic of Alor`s underwater world with our world-class dive center. Discover vibrant coral reefs, encounter diverse marine life, and embark on unforgettable diving adventures. Our expert team provides top-notch equipment, personalized dive guidance, and exceptional service. Whether you`re a seasoned diver or a beginner, we`ll ensure your Alor diving experience is unforgettable.',
  keywords: 'Alor dive center, Alor diving, scuba diving Alor, dive shop Alor, Alor dive sites, learn to dive Alor, PADI courses Alor, dive packages Alor, Alor dive holidays, best dive spots Alor, underwater Alor, marine life Alor, diving equipment rental Alor, dive guides Alor, Alor dive experience',
  openGraph: {
    title: 'Alor Dive Center - Sightsea Expeditions',
    description: 'Experience the magic of Alor`s underwater world with our world-class dive center. Discover vibrant coral reefs, encounter diverse marine life, and embark on unforgettable diving adventures. Our expert team provides top-notch equipment, personalized dive guidance, and exceptional service. Whether you`re a seasoned diver or a beginner, we`ll ensure your Alor diving experience is unforgettable.',
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
