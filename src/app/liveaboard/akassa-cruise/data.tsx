import ImageGalleryOne from '@public/assets/images/liveaboard/akassa-cruise/akassa-1.jpg';
import ImageGalleryTwo from '@public/assets/images/liveaboard/akassa-cruise/akassa-2.jpg';
import ImageGalleryThree from '@public/assets/images/liveaboard/akassa-cruise/akassa-3.jpg';
import ImageGalleryFour from '@public/assets/images/liveaboard/akassa-cruise/akassa-4.jpg';

import ImageMoonOne from '@public/assets/images/liveaboard/akassa-cruise/akassa-vip-1.jpg';
import ImageMoonTwo from '@public/assets/images/liveaboard/akassa-cruise/akassa-vip-2.jpg';
import ImageMarsOne from '@public/assets/images/liveaboard/akassa-cruise/akassa-deluxe-1.jpg';
import ImageMarsTwo from '@public/assets/images/liveaboard/akassa-cruise/akassa-deluxe-2.jpg';
import ImageEarthOne from '@public/assets/images/liveaboard/akassa-cruise/akassa-superior-1.jpg';
import ImageEarthTwo from '@public/assets/images/liveaboard/akassa-cruise/akassa-superior-2.jpg';

export const EVENT_TITLE_FULL = 'Akassa Cruise';

export const PRICE_PER_PERSON = '340';
export const EVENT_TITLE = 'Akassa Cruise' || '';
export const PAGE_TYPE = 'Liveaboard';
export const EVENT_AVAILABILITY = true;

export const destinationsListOption = [
  {
    value: '',
    label: 'Select Destination'
  },
  {
    value: 'Komodo',
    label: 'Komodo'
  },
];

export const roomTypeListOption = [
  {
    value: '',
    label: 'Select Cabin Type'
  },
  {
    value: 'VIP',
    label: 'VIP'
  },
  {
    value: 'Deluxe',
    label: 'Deluxe'
  },
  {
    value: 'Superior',
    label: 'Superior'
  },
];

export const roomGallery = [
  {
    roomType: 'VIP',
    include: [
      '1 Double Bed',
      'Sea View',
      'Private Bathtub in Balcony',
      'Private Balcony',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity up to 4 Pax',
    ],
    gallery: [
      {
        img: ImageMoonOne.src,
        imgAlt: '',
        blurDataUrl: ImageMoonOne.blurDataURL,
      },
      {
        img: ImageMoonTwo.src,
        imgAlt: '',
        blurDataUrl: ImageMoonTwo.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Deluxe',
    include: [
      '1 Double Bed',
      'Sea View',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 2 Pax',
    ],
    gallery: [
      {
        img: ImageMarsOne.src,
        imgAlt: '',
        blurDataUrl: ImageMarsOne.blurDataURL,
      },
      {
        img: ImageMarsTwo.src,
        imgAlt: '',
        blurDataUrl: ImageMarsTwo.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Superior',
    include: [
      '1 Double Bed',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 2 Pax',
    ],
    gallery: [
      {
        img: ImageEarthOne.src,
        imgAlt: '',
        blurDataUrl: ImageEarthOne.blurDataURL,
      },
      {
        img: ImageEarthTwo.src,
        imgAlt: '',
        blurDataUrl: ImageEarthTwo.blurDataURL,
      },
    ],
  },
]

export const dataMain = [
  {
    price: '480',
    currency: 'USD',
    roomType: 'VIP',
    destination: 'Komodo',
  },
  {
    price: '410',
    currency: 'USD',
    roomType: 'Deluxe',
    destination: 'Komodo',
  },
  {
    price: '340',
    currency: 'USD',
    roomType: 'Superior',
    destination: 'Komodo',
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

export const notes = [
  'The price displayed may be subjected to change based on the specific operator`s rates and availability.',
  'The availability of the cabin at the selected date may be subjected to change based on the liveaboard operator availability.',
  'Once you made your booking, we will get back to you as soon as possible to provide updates of your booking.',
];

export const include = [
  'Pick up and drop-off (in and out harbour)',
  'Liveaboard boat with ensuite AC and bathroom for 3D2N',
  'Daily Breakfast, Lunch, and Dinner fresh from the boat kitchen',
  'Free flow Mineral water, coffee and tea',
  'Afternoon snack and juice',
  'Sundeck and Lazy Chairs',
  'Tender boat, canoes, floaties',
  'Karaoke Set, Playstation and Wifi Onboard',
  'Snorkeling equipment, Life Jacket',
  'Local Tour Guide'
];
