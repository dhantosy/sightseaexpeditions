export interface ImageProps {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
}

export interface CategoryListProps {
  value: string;
  label: string;
}

export interface RoomTypeListProps {
  value: string;
  label: string;
}

export interface PricePerRoomProps {
  price: string;
  currency: string;
  roomType: string;
  category: string;
}

export interface ScheduleProps {
  time: string;
  descList: string[];
}

export interface RoomGalleryProps {
  roomType: string;
  include: string[];
  roomImages: ImageProps[];
}

export interface GalleryProps {
  img: string;
  imgAlt: string;
  blurDataUrl?: string;
}

export interface PageDivingTripsProps {
  project: {
    img: string;
    imgAlt: string;
    blurDataUrl?: string;
    title: string;
    location: string;
    date: string;
    endDate: {
      day: number;
      month: number;
      year: number;
    };
    url: string;
    price: string;
    priceNum: string;
    currency: string;
    duration: string;
    highlight: {
      diveCount: string;
      type: string;
    },
    available: boolean;
    multiCurrencies: boolean;
    category: string;
    metaDescription: string;
    metaKeywords: string;
    overview: string;
    categoryListOption: CategoryListProps[];
    roomTypeListOption: RoomTypeListProps[];
    pricePerRoom: PricePerRoomProps[];
    schedule: ScheduleProps[];
    include: string[];
    notes: string[];
    roomGallery: RoomGalleryProps[];
    gallery: GalleryProps[];
  }
};

