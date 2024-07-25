interface HighlightProp {
  diveCount?: string;
  type?: string;
}

export interface CardHorizontalItemProp {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
  url: string;
  title: string;
  location: string;
  date: string;
  price: string;
  highlight?: HighlightProp;
  available: boolean;
  shipName?: string;
  currency: string;
}
