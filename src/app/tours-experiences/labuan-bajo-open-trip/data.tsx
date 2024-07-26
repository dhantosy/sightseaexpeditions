import ImageOne from '@public/assets/images/gallery/labuan-bajo-1.jpg';
import ImageTwo from '@public/assets/images/gallery/labuan-bajo-2.jpg';
import ImageThree from '@public/assets/images/gallery/labuan-bajo-3.jpg';
import ImageFour from '@public/assets/images/gallery/labuan-bajo-4.jpg';
import { upcomingTours } from '@/data/upcomingEvents';

export const EVENT_TITLE_FULL = 'Labuan Bajo Open Trip';

const findEventData = upcomingTours.find((item) => {
  return item.title === EVENT_TITLE_FULL;
});

export const PRICE_PER_PERSON = '1450000';
export const EVENT_TITLE = 'Labuan Bajo Open Trip: Trekking, Snorkeling & Island Hopping' || '';
export const EVENT_DATE = findEventData?.date;
export const PAGE_TYPE = 'Tours & Experiences';
export const EVENT_AVAILABILITY = findEventData?.available;
export const EVENT_OVERVIEW = 'Labuan Bajo, a stunning gateway to the Komodo National Park, beckons travelers with its rich biodiversity, dramatic landscapes, and vibrant culture. An open trip to Labuan Bajo offers an affordable and social way to experience this Indonesian paradise. Travel with like-minded adventurers: Open trips bring together a group of travelers seeking an unforgettable adventure in Labuan Bajo. You`ll share the experience with fellow explorers, creating new friendships and memories along the way.';

export const images = [
  {
    img: ImageFour.src,
    imgAlt: '',
    blurDataUrl: ImageFour.blurDataURL,
  },
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
