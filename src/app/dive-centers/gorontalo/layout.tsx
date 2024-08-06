import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gorontalo Dive Center - Sightsea Expeditions',
  description: 'Immerse yourself in the pristine beauty of Gorontalo with our exclusive dive center. Explore vibrant coral reefs, encounter mesmerizing marine life, and experience the warm hospitality of the local people. Dive into a world of underwater wonder with our expert guides.',
  keywords: 'Gorontalo diving, Gorontalo dive center, Indonesia diving, liveaboard Gorontalo, dive vacation Gorontalo, underwater photography Gorontalo, coral reefs Gorontalo, marine life Gorontalo, dive travel Gorontalo, diving holidays Gorontalo, dive sites Gorontalo, diving packages Gorontalo',
  openGraph: {
    title: 'Lombok Dive Center - Sightsea Expeditions',
    description: 'Immerse yourself in the pristine beauty of Gorontalo with our exclusive dive center. Explore vibrant coral reefs, encounter mesmerizing marine life, and experience the warm hospitality of the local people. Dive into a world of underwater wonder with our expert guides.',
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
