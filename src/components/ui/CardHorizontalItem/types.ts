interface HighlightProp {
  diveCount?: string;
  attraction?: string;
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
  duration: string;
  highlight?: HighlightProp;
}
