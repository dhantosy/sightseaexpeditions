export interface categoryListProps {
  value: string;
  label: string;
}

export interface roomTypeListProps {
  value: string;
  label: string;
}

export interface pricePerRoomProps {
  price: string;
  currentcy: string;
  roomType: string;
  category: string;
}

export interface scheduleProps {
  time: string;
  descList: string[];
}

export interface roomGalleryProps {
  roomType: string;
  include: string[];
  roomImages: {
    img: string;
    imgAlt: string;
    blurDataUrl?: string;
  }
}

export interface PageDivingTripsProps {
  img: string;
  imgAlt: string;
  blurDataUrl: string;
  title: string;
  location: string;
  date: string;
  endDate: {
    day: string;
    month: string;
    year: string;
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
  categoryListOption: categoryListProps[];
  roomTypeListOption: roomTypeListProps[];
  pricePerRoom: pricePerRoomProps[];
  schedule: scheduleProps[];
  include: string[];
  notes: string[];
  roomGallery: roomGalleryProps[];
};

