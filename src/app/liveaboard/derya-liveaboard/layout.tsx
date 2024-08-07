import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Derya Liveaboard - Sightsea Expeditions',
  description: 'Derya is derivied from the persian (Daryã) meaning ocean and sea. Traditional phinishi boat with modern concept for leisure. Designed for 10 person with 4 cabins and many spaces to relax or gather with your family and friends. Let’s enjoy the mesmerizing island of komodo with us.',
  keywords: 'Derya Liveaboard, luxury liveaboard, dive liveaboard, liveaboard diving, diving vacations, underwater adventures, liveaboard cruises, luxury dive trips, liveaboard travel, diving cruises, liveaboard experience, ocean cruises, dive boat vacations, luxury yacht cruises, premium liveaboard',
  openGraph: {
    title: 'Derya Liveaboard - Sightsea Expeditions',
    description: 'Derya is derivied from the persian (Daryã) meaning ocean and sea. Traditional phinishi boat with modern concept for leisure. Designed for 10 person with 4 cabins and many spaces to relax or gather with your family and friends. Let’s enjoy the mesmerizing island of komodo with us.',
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
