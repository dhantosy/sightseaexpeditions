import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bima West Komodo Dive Trip with Majestic Voyager - Sightsea Expeditions',
  description: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
  keywords: 'luxury dive trips, liveaboard diving, dive vacations, curated dive experiences, dive destinations, diving holidays, premium dive trips, exclusive dive travel, dive trip planner, best dive trips, diving adventures, underwater exploration',
  openGraph: {
    title: 'Bima West Komodo Dive Trip with Majestic Voyager - Sightsea Expeditions',
    description: 'Embark on an extraordinary underwater journey with our curated collection of luxury dive trips. Explore pristine dive sites, encounter incredible marine life, and indulge in unparalleled comfort aboard our hand-picked liveaboard vessels. Discover your perfect dive vacation today.',
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
