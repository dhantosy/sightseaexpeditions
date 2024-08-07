import ImageGalleryOne from '@public/assets/images/liveaboard/giona-liveaboard/giona-1.jpg';
import ImageGalleryTwo from '@public/assets/images/liveaboard/giona-liveaboard/giona-2.jpg';
import ImageGalleryThree from '@public/assets/images/liveaboard/giona-liveaboard/giona-3.jpg';
import ImageGalleryFour from '@public/assets/images/liveaboard/giona-liveaboard/giona-4.jpg';

import ImageMoonOne from '@public/assets/images/liveaboard/giona-liveaboard/giona-poseidon-1.jpg';
import ImageMoonTwo from '@public/assets/images/liveaboard/giona-liveaboard/giona-poseidon-2.jpg';
import ImageMarsOne from '@public/assets/images/liveaboard/giona-liveaboard/giona-triton-1.jpg';
import ImageMarsTwo from '@public/assets/images/liveaboard/giona-liveaboard/giona-triton-2.jpg';
import ImageEarthOne from '@public/assets/images/liveaboard/giona-liveaboard/giona-doris-1.jpg';
import ImageEarthTwo from '@public/assets/images/liveaboard/giona-liveaboard/giona-doris-2.jpg';
import ImageFourOne from '@public/assets/images/liveaboard/giona-liveaboard/giona-thetis-1.jpg';
import ImageFourTwo from '@public/assets/images/liveaboard/giona-liveaboard/giona-thetis-2.jpg';

export const EVENT_TITLE_FULL = 'Giona Liveaboard';

export const PRICE_PER_PERSON = '3500000';
export const EVENT_TITLE = 'Giona Liveaboard' || '';
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
    value: 'Poseidon',
    label: 'Poseidon'
  },
  {
    value: 'Triton',
    label: 'Triton'
  },
  {
    value: 'Doris',
    label: 'Doris'
  },
  {
    value: 'Thetis',
    label: 'Thetis'
  },
];

export const roomGallery = [
  {
    roomType: 'Poseidon',
    include: [
      '1 Double Bed',
      'Sea View',
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
    roomType: 'Triton',
    include: [
      '1 Double Bed',
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
    roomType: 'Doris',
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
  {
    roomType: 'Thetis',
    include: [
      '2 Double Bed',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 4 Pax',
    ],
    gallery: [
      {
        img: ImageFourOne.src,
        imgAlt: '',
        blurDataUrl: ImageFourOne.blurDataURL,
      },
      {
        img: ImageFourTwo.src,
        imgAlt: '',
        blurDataUrl: ImageFourTwo.blurDataURL,
      },
    ],
  },
]

export const dataMain = [
  {
    price: '5,000,000',
    currency: 'IDR',
    roomType: 'Poseidon',
    destination: 'Komodo',
  },
  {
    price: '4,000,000',
    currency: 'IDR',
    roomType: 'Triton',
    destination: 'Komodo',
  },
  {
    price: '4,000,000',
    currency: 'IDR',
    roomType: 'Doris',
    destination: 'Komodo',
  },
  {
    price: '3,500,000',
    currency: 'IDR',
    roomType: 'Thetis',
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
  'Welcome Drinks',
  'Meals 3 times a day',
  'Liveaboard boat with ensuite AC and bathroom for 3D2N',
  'Daily Afternoon Snacks',
  'Transport in-out harbour',
  'Tour Guide',
  'Wifi on board',
  'Tv & Karaoke set',
  'Snorkeling Equipment',
  'Floaties, Kayak, SUP & Paddle Board',
  '10 Destinations around Komodo Island'
];
