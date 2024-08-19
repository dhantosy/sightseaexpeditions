import { divingTripsData } from '@/data/divingTrips';
import { notFound } from 'next/navigation';
import PageDivingTrips from '@/components/partial/PageDivingTrips';

export async function generateStaticParams() {
  return divingTripsData.map((p) => ({
    uniquepage: p.url,
  }))
}

export default function BimaDivingTripMajescticVoyagerPage({ params: { uniquepage } }: { params: { uniquepage: string } }) {
  const project = divingTripsData.find(p => p.url === uniquepage)

  if (!project) {
    notFound()
  }

  return (
    <PageDivingTrips project={project} />
  )
};
