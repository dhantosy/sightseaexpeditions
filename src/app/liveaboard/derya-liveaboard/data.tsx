import ImageGalleryOne from '@public/assets/images/liveaboard/derya-liveaboard/derya-1.jpg';
import ImageGalleryTwo from '@public/assets/images/liveaboard/derya-liveaboard/derya-2.jpg';
import ImageGalleryThree from '@public/assets/images/liveaboard/derya-liveaboard/derya-3.jpg';
import ImageGalleryFour from '@public/assets/images/liveaboard/derya-liveaboard/derya-4.jpg';

import ImageMoonOne from '@public/assets/images/liveaboard/derya-liveaboard/derya-padar-1.jpg';
import ImageMoonTwo from '@public/assets/images/liveaboard/derya-liveaboard/derya-padar-2.jpg';
import ImageMarsOne from '@public/assets/images/liveaboard/derya-liveaboard/derya-komodo-1.jpg';
import ImageMarsTwo from '@public/assets/images/liveaboard/derya-liveaboard/derya-komodo-2.jpg';
import ImageEarthOne from '@public/assets/images/liveaboard/derya-liveaboard/derya-rinca-1.jpg';
import ImageEarthTwo from '@public/assets/images/liveaboard/derya-liveaboard/derya-rinca-2.jpg';
import ImageFourOne from '@public/assets/images/liveaboard/derya-liveaboard/derya-kanawa-1.jpg';
import ImageFourTwo from '@public/assets/images/liveaboard/derya-liveaboard/derya-kanawa-2.jpg';

export const EVENT_TITLE_FULL = 'Derya Liveaboard';

export const PRICE_PER_PERSON = '320';
export const EVENT_TITLE = 'Derya Liveaboard' || '';
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
    value: 'Padar',
    label: 'Padar'
  },
  {
    value: 'Komodo',
    label: 'Komodo'
  },
  {
    value: 'Rinca',
    label: 'Rinca'
  },
  {
    value: 'Kanawa',
    label: 'Kanawa'
  },
];

export const roomGallery = [
  {
    roomType: 'Padar',
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
    roomType: 'Komodo',
    include: [
      '1 Double Bed',
      'Sea View',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 3 Pax',
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
    roomType: 'Rinca',
    include: [
      '1 Double Bed',
      'Air Conditioner',
      'Shared Bathroom',
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
    roomType: 'Kanawa',
    include: [
      '2 Double Bed',
      'Air Conditioner',
      'Shared Bathroom',
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
    price: '480',
    currency: 'USD',
    roomType: 'Padar',
    destination: 'Komodo',
  },
  {
    price: '420',
    currency: 'USD',
    roomType: 'Komodo',
    destination: 'Komodo',
  },
  {
    price: '340',
    currency: 'USD',
    roomType: 'Rinca',
    destination: 'Komodo',
  },
  {
    price: '320',
    currency: 'USD',
    roomType: 'Kanawa',
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
