interface ImagesProp {
  img: string;
  blurDataUrl?: string;
  imgAlt: string;
}

export interface SectionInfoProp {
  titleTop: string,
  titleMain: string,
  images: ImagesProp[],
  description: string,
}
