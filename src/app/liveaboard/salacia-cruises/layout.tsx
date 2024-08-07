import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Salacia Cruises - Sightsea Expeditions',
  description: 'Cruising soon, Salacia Cruises provides the unmatched hospitality of liveaboard experience in a way they can indulge in the beauty of Indonesia above and under the sea, leaving them fulfilled.',
  keywords: 'Salacia Cruises, luxury liveaboard, dive liveaboard, liveaboard diving, luxury diving, dive vacations, liveaboard cruises, diving holidays, premium liveaboard, underwater adventures, dive boat, luxury yacht, diving travel',
  openGraph: {
    title: 'Salacia Cruises - Sightsea Expeditions',
    description: 'Cruising soon, Salacia Cruises provides the unmatched hospitality of liveaboard experience in a way they can indulge in the beauty of Indonesia above and under the sea, leaving them fulfilled.',
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
