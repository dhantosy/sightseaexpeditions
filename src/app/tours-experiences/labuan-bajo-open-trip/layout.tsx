import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Labuan Bajo Open Trip - Sightsea Expeditions',
  description: 'Embark on an unforgettable adventure to Labuan Bajo with our open trip! Explore the stunning Komodo National Park, snorkel into vibrant coral reefs, trek to see the iconic Komodo dragons, and relax on pristine beaches. Join like-minded travelers for a fun-filled and hassle-free vacation. Book your spot now!',
  keywords: 'Labuan Bajo open trip, Komodo National Park, Komodo dragon tour, diving Labuan Bajo, open trip Indonesia, group tour Labuan Bajo, Komodo island tour, snorkeling Labuan Bajo, island hopping Indonesia, adventure travel, group vacation, budget travel',
  openGraph: {
    title: 'Labuan Bajo Open Trip - Sightsea Expeditions',
    description: 'Embark on an unforgettable adventure to Labuan Bajo with our open trip! Explore the stunning Komodo National Park, snorkel into vibrant coral reefs, trek to see the iconic Komodo dragons, and relax on pristine beaches. Join like-minded travelers for a fun-filled and hassle-free vacation. Book your spot now!',
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
