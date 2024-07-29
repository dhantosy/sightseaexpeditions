import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Labuan Bajo Private Trip - Sightsea Expeditions',
  description: 'Indulge in the ultimate Labuan Bajo experience with our exclusive private trips. Discover pristine beaches, encounter iconic Komodo dragons, and explore vibrant underwater worlds. Our meticulously crafted itineraries offer unparalleled luxury, personalized service, and unforgettable memories.',
  keywords: 'Labuan Bajo private trip, luxury Labuan Bajo, Komodo Island private tour, private yacht Labuan Bajo, bespoke Labuan Bajo itinerary, luxury travel Indonesia, private island hopping Labuan Bajo, exclusive Labuan Bajo experience, diving Labuan Bajo, snorkeling Labuan Bajo, Komodo dragon tour, luxury vacation Indonesia',
  openGraph: {
    title: 'Labuan Bajo Private Trip - Sightsea Expeditions',
    description: 'Indulge in the ultimate Labuan Bajo experience with our exclusive private trips. Discover pristine beaches, encounter iconic Komodo dragons, and explore vibrant underwater worlds. Our meticulously crafted itineraries offer unparalleled luxury, personalized service, and unforgettable memories.',
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
