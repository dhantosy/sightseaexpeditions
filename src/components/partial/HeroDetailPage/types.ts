interface HeroDetailImagesProp {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
}

export interface HeroDetailPageProp {
  title: string;
  subtopic?: string;
  pageType?: string;
  images: HeroDetailImagesProp[];
}
