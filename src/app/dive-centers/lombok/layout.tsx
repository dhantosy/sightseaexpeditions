import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lombok Dive Center - Sightsea Expeditions',
  description: 'Immerse yourself in Lombok`s breathtaking underwater world with our world-class dive center. Experience thrilling dives, encounter diverse marine life, and receive expert guidance from our passionate team. Whether you`re a seasoned diver or a beginner, we offer unforgettable experiences tailored to your needs.',
  keywords: 'Lombok dive center, diving Lombok, scuba diving Lombok, Lombok dive sites, dive courses Lombok, dive shop Lombok, underwater adventures Lombok, marine life Lombok, dive holidays Lombok, PADI dive center Lombok, diving vacation Lombok, best dive center Lombok',
  openGraph: {
    title: 'Lombok Dive Center - Sightsea Expeditions',
    description: 'Immerse yourself in Lombok`s breathtaking underwater world with our world-class dive center. Experience thrilling dives, encounter diverse marine life, and receive expert guidance from our passionate team. Whether you`re a seasoned diver or a beginner, we offer unforgettable experiences tailored to your needs.',
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
