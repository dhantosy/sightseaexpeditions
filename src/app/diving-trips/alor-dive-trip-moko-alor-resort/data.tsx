import ImageOne from '@public/assets/images/diving/dive-alor-1.jpg';
import ImageTwo from '@public/assets/images/diving/dive-alor-2.jpg';
import ImageThree from '@public/assets/images/diving/dive-alor-3.jpg';
import ImageFour from '@public/assets/images/diving/dive-alor-4.jpg';

export const PRICE_PER_PERSON = '16500000';
export const EVENT_TITLE = 'Alor Dive Trip - Moko Alor Resort' || '';

export const images = [
  {
    img: ImageOne.src,
    imgAlt: '',
    blurDataUrl: ImageOne.blurDataURL,
  },
  {
    img: ImageTwo.src,
    imgAlt: '',
    blurDataUrl: ImageTwo.blurDataURL,
  },
  {
    img: ImageThree.src,
    imgAlt: '',
    blurDataUrl: ImageThree.blurDataURL,
  },
  {
    img: ImageFour.src,
    imgAlt: '',
    blurDataUrl: ImageFour.blurDataURL,
  },
];

export const schedule = [
  {
    time: 'Day 1',
    descList: [
      'Arrive at Moko Alor in the morning.',
      'Hotel & Dive Briefing.',
      'Lunch.',
      'Dive 1 (Check Dive).',
      'Dinner.',
    ]
  },
  {
    time: 'Day 2',
    descList: [
      'Breakfast.',
      'Dive 2 & Dive 3.',
      'Lunch.',
      'Dive 4.',
      'Dinner.',
    ]
  },
  {
    time: 'Day 3',
    descList: [
      'Breakfast.',
      'Dive 5 & Dive 6.',
      'Lunch.',
      'Dive 7.',
      'Dinner.',
    ]
  },
  {
    time: 'Day 4',
    descList: [
      'Breakfast.',
      'Dive 8 & Dive 9.',
      'Lunch.',
      'Dive 10.',
      'Free Time & Dinner.',
    ]
  },
  {
    time: 'Day 5',
    descList: [
      'Hotel Checkout.',
      'Airport Transfer.',
    ]
  },
];

export const notes = [
  'IDR 500,000 discount for repeater guests.',
  'Dive equipment rental is available for IDR 400,000/day.',
  'The price excludes airflight tickets, Alor marine & park fee, and personal expenses (laundry, tipping, etc.).',
];

export const include = [
  'Private Room for Double/Twin Share',
  '3 Gourmet Meals per Day',
  '10 Dives with Tanks, & Weight Belt',
  '1:4 Ratio of an Experienced, Qualified Dive Master ',
  'Airport Transfer',
  'Underwater Documentation',
];
