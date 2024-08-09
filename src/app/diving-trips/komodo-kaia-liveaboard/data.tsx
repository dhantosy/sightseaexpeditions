import ImageGalleryOne from '@public/assets/images/gallery/labuan-bajo-4.jpg';
import ImageGalleryTwo from '@public/assets/images/diving/bima-2.jpg';
import ImageGalleryThree from '@public/assets/images/diving/bima-3.jpg';
import ImageGalleryFour from '@public/assets/images/liveaboard/kaia-liveaboard/kaia-1.jpg';

import ImageCabinOne from '@public/assets/images/liveaboard/kaia-liveaboard/main-deck-1.jpg';
import ImageCabinTwo from '@public/assets/images/liveaboard/kaia-liveaboard/main-deck-2.jpg';
import { upcomingDivingTrips } from '@/data/upcomingEvents';

export const EVENT_TITLE_FULL = 'Komodo Dive Trip with Kaia Liveaboard';

const findEventData = upcomingDivingTrips.find((item) => {
  return item.title === EVENT_TITLE_FULL;
});

export const PRICE_PER_PERSON = findEventData?.priceNum;
export const EVENT_TITLE = 'Komodo Dive Trip - Kaia Liveaboard' || '';
export const EVENT_DATE = findEventData?.date;
export const EVENT_TYPE = 'LOB';
export const PAGE_TYPE = 'Diving Trips';
export const EVENT_AVAILABILITY = findEventData?.available;
export const EVENT_OVERVIEW = 'Experience the magic of Komodo with our exclusive liveaboard cruises. Discover pristine dive sites teeming with marine life, encounter iconic Komodo dragons, and indulge in luxury. Our carefully curated itineraries offer the ultimate Komodo adventure.';

export const categoryListOption = [
  {
    value: '',
    label: 'Select Category'
  },
  {
    value: 'Domestic / KITAS',
    label: 'Domestic / KITAS Holder'
  },
  {
    value: 'foreigner',
    label: 'Foreigner'
  },
];

export const roomTypeListOption = [
  {
    value: '',
    label: 'Select Cabin Type'
  },
  {
    value: 'Main Deck',
    label: 'Main Deck'
  },
];

export const roomGallery = [
  {
    roomType: 'Main Deck',
    include: [
      'Private Jacuzzi',
      'Sea View Balcony',
      'Twin Bed',
      'Air Conditioner',
      'Water Heater',
      'Private Bathroom',
    ],
    gallery: [
      {
        img: ImageCabinOne.src,
        imgAlt: '',
        blurDataUrl: ImageCabinOne.blurDataURL,
      },
      {
        img: ImageCabinTwo.src,
        imgAlt: '',
        blurDataUrl: ImageCabinTwo.blurDataURL,
      },
    ],
  },
]

export const dataMain = [
  {
    price: '18,500,000',
    currency: 'IDR',
    roomType: 'Main Deck',
    category: 'Domestic / KITAS',
  },
  {
    price: '18,500,000',
    currency: 'IDR',
    roomType: 'Main Deck',
    category: 'foreigner',
  },
];

export const images = [
  {
    img: ImageGalleryOne.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryOne.blurDataURL,
  },
  {
    img: ImageGalleryTwo.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryTwo.blurDataURL,
  },
  {
    img: ImageGalleryThree.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryThree.blurDataURL,
  },
  {
    img: ImageGalleryFour.src,
    imgAlt: '',
    blurDataUrl: ImageGalleryFour.blurDataURL,
  },
];

export const schedule = [
  {
    time: '',
    descList: []
  },
];

export const notes = [
  'Port Clearance Fee (IDR 1jt / pax).',
  'Dive equipment rental is available',
  'Alocolic beverages are available.',
  'Boat crew tip gratuities IDR 200rb / day / pax',
  'The price excludes airflight tickets.',
];

export const include = [
  'Airport Transfer in Labuan Bajo.',
  '4 Nights in AC Cabins Aboard on Sharing Basis.',
  'Full Onboard Meals.',
  'Unlimited tea, coffee, softdrinks and mineral water.',
  '10+ Dives with Tanks, Weight, & Belt.',
  'English Speaking Cruise Director.',
  'Divemaster & Local Dive Guide.',
  'Underwater Documentation.',
];
