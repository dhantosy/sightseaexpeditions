type CardType = 'horizontal' | 'vertical' | 'imageTitle';

interface HighlightProp {
  diveCount?: string;
  attraction?: string;
}

interface CardsProp {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
  title: string;
  location?: string;
  date?: string;
  url: string;
  price?: string;
  duration?: string;
  highlight?: HighlightProp;
}

export interface SectionUpcomingEventsProp {
  titleTop: string,
  titleMain: string,
  events?: CardsProp[],
  btnUrl: string;
  btnText: string;
  cardClass: string;
  cardType: CardType;
}
