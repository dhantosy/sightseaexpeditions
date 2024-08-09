import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Your Booking Details - Sightsea Expeditions',
  description: 'Ready to embark on your dream dive vacation? Get in touch with our dive experts. We`re here to assist you with itinerary planning, booking, and any questions you may have. Contact us today to start your underwater adventure.',
  keywords: 'sightsea, expeditions, dive travel experts, luxury dive vacations, liveaboard diving, dive vacation planners, diving enthusiasts, curated dive trips, dive travel company, dive vacation consultants, about dive into perfection, exclusive dive trips, dive travel passion',
  openGraph: {
    title: 'Your Booking Details - Sightsea Expeditions',
    description: 'Ready to embark on your dream dive vacation? Get in touch with our dive experts. We`re here to assist you with itinerary planning, booking, and any questions you may have. Contact us today to start your underwater adventure.',
    type: 'website',
    images: '/assets/images/banner-photo.jpg'
  }
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Script src='https://www.google.com/recaptcha/api.js' strategy='afterInteractive' />
    </>
  )
}
