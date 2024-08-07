import ImageGalleryOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-1.jpg';
import ImageGalleryTwo from '@public/assets/images/liveaboard/semesta-voyages/semesta-2.jpg';
import ImageGalleryThree from '@public/assets/images/liveaboard/semesta-voyages/semesta-3.jpg';
import ImageGalleryFour from '@public/assets/images/liveaboard/semesta-voyages/semesta-4.jpg';

import ImageMoonOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-moon-1.jpg';
import ImageMoonTwo from '@public/assets/images/liveaboard/semesta-voyages/semesta-moon-2.jpg';
import ImageMarsOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-mars-1.jpg';
import ImageMarsTwo from '@public/assets/images/liveaboard/semesta-voyages/semesta-mars-2.jpg';
import ImageEarthOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-earth-1.jpg';
import ImageEarthTwo from '@public/assets/images/liveaboard/semesta-voyages/semesta-earth-2.jpg';
import ImageSunOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-sun-1.jpg';
import ImageSunTwo from '@public/assets/images/liveaboard/semesta-voyages/semesta-sun-2.jpg';
import ImageVenusOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-pluto-venus-1.jpg';
import ImageJupiterOne from '@public/assets/images/liveaboard/semesta-voyages/semesta-jupiter-mercury-1.jpg';

export const EVENT_TITLE_FULL = 'Semesta Voyages';

export const PRICE_PER_PERSON = '360';
export const EVENT_TITLE = 'Semesta Voyages' || '';
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
    value: 'Moon',
    label: 'Moon'
  },
  {
    value: 'Mars',
    label: 'Mars'
  },
  {
    value: 'Earth',
    label: 'Earth'
  },
  {
    value: 'Sun',
    label: 'Sun'
  },
  {
    value: 'Pluto and Venus',
    label: 'Pluto and Venus'
  },
  {
    value: 'Jupiter and Mercury',
    label: 'Jupiter and Mercury'
  },
];

export const roomGallery = [
  {
    roomType: 'Moon',
    include: [
      '1 Double Bed',
      'Sea View',
      'Private Jacuzzi',
      'Private Balcony',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 2 - 4 Pax',
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
    roomType: 'Mars',
    include: [
      '1 Double Bed',
      'Sea View',
      'Private Bathtub',
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
    roomType: 'Earth',
    include: [
      '1 Double Bed',
      'Sea View',
      'Private Jacuzzi',
      'Private Balcony',
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
    roomType: 'Sun',
    include: [
      '1 Double Bed',
      'Sea View',
      'Private Bathutub',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 2 Pax',
    ],
    gallery: [
      {
        img: ImageSunOne.src,
        imgAlt: '',
        blurDataUrl: ImageSunOne.blurDataURL,
      },
      {
        img: ImageSunTwo.src,
        imgAlt: '',
        blurDataUrl: ImageSunTwo.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Pluto and Venus',
    include: [
      '1 Double Bed',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 2 Pax',
    ],
    gallery: [
      {
        img: ImageVenusOne.src,
        imgAlt: '',
        blurDataUrl: ImageVenusOne.blurDataURL,
      },
    ],
  },
  {
    roomType: 'Jupiter and Mercury',
    include: [
      '1 Double Bed',
      'Air Conditioner',
      'Private Bathroom',
      'Capacity 2 Pax',
    ],
    gallery: [
      {
        img: ImageJupiterOne.src,
        imgAlt: '',
        blurDataUrl: ImageJupiterOne.blurDataURL,
      },
    ],
  },
]

export const dataMain = [
  {
    price: '730',
    currency: 'USD',
    roomType: 'Moon',
    destination: 'Komodo',
  },
  {
    price: '660',
    currency: 'USD',
    roomType: 'Mars',
    destination: 'Komodo',
  },
  {
    price: '600',
    currency: 'USD',
    roomType: 'Earth',
    destination: 'Komodo',
  },
  {
    price: '530',
    currency: 'USD',
    roomType: 'Sun',
    destination: 'Komodo',
  },
  {
    price: '430',
    currency: 'USD',
    roomType: 'Pluto and Venus',
    destination: 'Komodo',
  },
  {
    price: '360',
    currency: 'USD',
    roomType: 'Jupiter and Mercury',
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
