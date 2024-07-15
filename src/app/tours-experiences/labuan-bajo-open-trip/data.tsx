import ImageOne from '@public/assets/images/gallery/labuan-bajo-1.jpg';
import ImageTwo from '@public/assets/images/gallery/labuan-bajo-2.jpg';
import ImageThree from '@public/assets/images/gallery/labuan-bajo-3.jpg';
import ImageFour from '@public/assets/images/gallery/labuan-bajo-4.jpg';

export const PRICE_PER_PERSON = '1450000';

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
    time: '06:00',
    desc: 'Pick up at your hotel (exact time may vary) and start the trip.'
  },
  {
    time: '08:00',
    desc: 'Trekking at Padar Island.'
  },
  {
    time: '10:00',
    desc: 'Arrive at Pink Beach.'
  },
  {
    time: '12:00',
    desc: 'Arrive at Komodo Island.'
  },
  {
    time: '13:00',
    desc: 'Lunch Box.'
  },
  {
    time: '13:30',
    desc: 'Arrive at Taka Makassar.'
  },
  {
    time: '14:30',
    desc: 'Arrive at Manta Point.'
  },
  {
    time: '16:00',
    desc: 'Arrive at Kanawa Island.'
  },
  {
    time: '17:00',
    desc: 'Back to Labuan Bajo (Hotel Transfer).'
  },
];

export const notes = [
  'Komodo entrance fee (Local IDR 200,000/person, Foreigner IDR 500,000/person)',
  'Please prepare some cash for your personal expenses (if any).',
  'Additional Documentation, IDR 1,800,000/photographer (Drone, Gopro and Camera)'
];

export const include = [
  'Hotel Transfer (Pickup & Drop off)',
  'Lunch Box',
  'Coffee Break',
  'Snorkeling Kit',
  'Life Jacket',
  'Guide',
];
