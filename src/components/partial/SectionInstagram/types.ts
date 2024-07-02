interface GalleryProp {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
  url?: string;
}

export interface SectionInstagramProp {
  titleTop: string;
  titleMain: string;
  gallery: GalleryProp[];
}
