interface HeroDetailImagesProp {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
}

export interface HeroDetailPageProp {
  title: string;
  schedule?: string;
  pageType?: string;
  tripType?: string;
  images: HeroDetailImagesProp[];
}
