import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: 'About Sightsea Expeditions - Your Premium Trip Currator',
  description: 'Discover the passionate teams behind Sightsea Expeditions. We`re a team of seasoned divers and travel enthusiasts dedicated to crafting extraordinary dive vacations. With a deep love for the ocean and a commitment to excellence, we curate unforgettable liveaboard experiences for discerning travelers. Learn more about our mission and what sets us apart.',
  keywords: 'sightsea, expeditions, dive travel experts, luxury dive vacations, liveaboard diving, dive vacation planners, diving enthusiasts, curated dive trips, dive travel company, dive vacation consultants, about dive into perfection, exclusive dive trips, dive travel passion',
  openGraph: {
    title: 'About Sightsea Expeditions - Your Premium Trip Currator',
    description: 'Discover the passionate teams behind Sightsea Expeditions. We`re a team of seasoned divers and travel enthusiasts dedicated to crafting extraordinary dive vacations. With a deep love for the ocean and a commitment to excellence, we curate unforgettable liveaboard experiences for discerning travelers. Learn more about our mission and what sets us apart.',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
  }
}

export default function AboutLayout({
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
