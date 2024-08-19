import type { Metadata, ResolvingMetadata } from 'next'
import * as React from 'react';
import { divingTripsData } from '@/data/divingTrips';

type Props = {
  params: { uniquepage: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const urlPage = params.uniquepage;

  const pageItem = divingTripsData.find(item => item.url === urlPage);

  return {
    title: `${pageItem?.title} | Sightsea Expeditions`,
    description: pageItem?.metaDescription,
    keywords: pageItem?.metaKeywords,
    openGraph: {
      title: `${pageItem?.title} | Sightsea Expeditions`,
      description: pageItem?.metaDescription,
      type: 'website',
      images: pageItem?.img,
    }
  };
};

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
};
