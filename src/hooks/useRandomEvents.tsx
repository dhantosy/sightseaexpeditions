import { useEffect, useState } from 'react';

interface HighlightProp {
  diveCount?: string;
  type?: string;
}

interface ArrayProp {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
  title: string;
  location?: string;
  date?: string;
  url: string;
  price?: string;
  type?: string;
  unit?: string;
  highlight?: HighlightProp;
}

export const useRandomEvents = (arrayVal?: ArrayProp[], string?: string, count?: number) => {
  const [events, setEvents] = useState(arrayVal);

  useEffect(() => {
    const filteredUpcomingTours = arrayVal?.filter(function (el) { return el.title !== string });
    const shuffled = filteredUpcomingTours?.sort(() => 0.5 - Math.random());
    const sliceArray = shuffled?.slice(0, count);
    setEvents(sliceArray);
  }, [arrayVal, count, string]);

  return events;
};
