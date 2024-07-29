import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dive Centers - Sightsea Expeditions',
  description: 'Discover the best dive centers handpicked by our experts. Whether you`re a seasoned diver or a beginner, find the perfect dive center for your next adventure. From world-class training to unforgettable dive experiences, our curated list ensures you dive with confidence.',
  keywords: 'dive centers, best dive centers, top-rated dive centers, diving schools, scuba diving centers, diving courses, dive center reviews, dive center recommendations, diving locations, dive travel, dive vacation planning, diving holidays, dive center directory',
  openGraph: {
    title: 'Dive Centers - Sightsea Expeditions',
    description: 'Discover the best dive centers handpicked by our experts. Whether you`re a seasoned diver or a beginner, find the perfect dive center for your next adventure. From world-class training to unforgettable dive experiences, our curated list ensures you dive with confidence.',
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
