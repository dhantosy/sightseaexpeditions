import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Velocean Lebaran Escape to Misool - Sightsea Expeditions',
  description: 'Indulge in an unforgettable Lebaran escape with Velocean to the pristine waters of Misool. Experience the magic of this remote Indonesian paradise with world-class diving, luxurious accommodations, and exceptional service. Discover vibrant coral reefs, diverse marine life, and hidden underwater treasures. Book your dream Lebaran getaway now!',
  keywords: 'Velocean, Lebaran escape, Misool, diving, liveaboard, luxury dive vacation, Indonesia, Coral Triangle, marine life, underwater photography, dive travel, dive holiday, dive package',
  openGraph: {
    title: 'Velocean Lebaran Escape to Misool - Sightsea Expeditions',
    description: 'Indulge in an unforgettable Lebaran escape with Velocean to the pristine waters of Misool. Experience the magic of this remote Indonesian paradise with world-class diving, luxurious accommodations, and exceptional service. Discover vibrant coral reefs, diverse marine life, and hidden underwater treasures. Book your dream Lebaran getaway now!',
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
