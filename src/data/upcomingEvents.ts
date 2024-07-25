// DIVING
import ImageHammerhead from '@public/assets/images/diving/hammerhead-belongas.jpg'
import ImageWobbegong from '@public/assets/images/diving/wobbegong-shark.jpg'
import ImageAlorMain from '@public/assets/images/diving/dive-alor-1.jpg'
import ImageAlorOne from '@public/assets/images/gallery/alor-5.jpg';
import ImageBimaMain from '@public/assets/images/gallery/bima-1.jpg';
import ImageBandarNeiraOne from '@public/assets/images/gallery/banda-neira-1.jpg';
import ImageBandarNeiraTwo from '@public/assets/images/gallery/banda-neira-2.jpg';
import ImageWayag from '@public/assets/images/gallery/wayag-1.jpg';
import ImageMaldivesOne from '@public/assets/images/liveaboard/velocean/maldives.jpg';
import ImageMaldivesTwo from '@public/assets/images/gallery/maldives-1.jpg';
import ImageMaldivesThree from '@public/assets/images/gallery/maldives-2.jpg';
import ImageMisoolOne from '@public/assets/images/gallery/raja-ampat-3.jpg';
import ImagePalawanOne from '@public/assets/images/gallery/palawan-1.jpg';
import ImagePalawanTwo from '@public/assets/images/gallery/palawan-2.jpg';
import ImageRingOfFire from '@public/assets/images/gallery/ring-of-fire.jpg';
import ImageLucipara from '@public/assets/images/gallery/lucipara-1.jpg';

// TOUR
import ImageLabuanBajoPrivate from '@public/assets/images/gallery/labuan-bajo-1.jpg'
import ImageLabuanBajoOpen from '@public/assets/images/gallery/labuan-bajo-4.jpg'
import ImageSumbasMain from '@public/assets/images/tours/sumba.jpg'
import ImageTorajaMain from '@public/assets/images/tours/toraja.jpg'
import ImageUbudMain from '@public/assets/images/tours/ubud.jpg'
import ImageKintamaniMain from '@public/assets/images/tours/kintamani.jpg'

// LIVEABOARD
import ImageVelocean from '@public/assets/images/vessels/velocean.jpg'
import ImageVeloceanMisoolOne from '@public/assets/images/gallery/raja-ampat-1.jpg'
import ImageVeloceanMisoolTwo from '@public/assets/images/gallery/raja-ampat-2.jpg'

export const upcomingDivingTrips = [
  {
    img: ImageBimaMain.src,
    imgAlt: 'Bima Trip',
    blurDataUrl: ImageBimaMain.blurDataURL,
    title: 'Bima Dive Trip with Majestic Voyager',
    location: 'West Komodo, Indonesia',
    date: 'Aug 17th - 21st, 2024',
    url: '/diving-trips/bima-west-komodo-majestic-voyager',
    price: '19jt',
    priceNum: '19000000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: false,
  },
  {
    img: ImageBandarNeiraOne.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraOne.blurDataURL,
    title: 'Banda Neira Shark Dive Trip with Majestic Voyager',
    location: 'Maluku, Indonesia',
    date: 'Sep 25th - Oct 1st, 2024',
    url: '/diving-trips/banda-neira-shark-majestic-voyager',
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: false,
  },
  {
    img: ImageBandarNeiraTwo.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraTwo.blurDataURL,
    title: 'Banda Neira Hammerhead Shark Dive Trip with Majestic Voyager',
    location: 'Maluku, Indonesia',
    date: 'Oct 26th - Nov 1st, 2024',
    url: '/diving-trips/banda-neira-hammerhead-shark-majestic-voyager',
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageVeloceanMisoolOne.src,
    imgAlt: 'Misool Trip',
    blurDataUrl: ImageVeloceanMisoolOne.blurDataURL,
    title: 'Misool Dive Trip with Majestic Voyager',
    location: 'Raja Ampat, Indonesia',
    date: 'Dec 18th - 24th, 2024',
    url: '/diving-trips/raja-ampat-misool-majestic-voyager',
    price: '28,5jt',
    priceNum: '28500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageWayag.src,
    imgAlt: 'Wayag Trip',
    blurDataUrl: ImageWayag.blurDataURL,
    title: 'Wayag Dive Trip with Majestic Voyager',
    location: 'Raja Ampat, Indonesia',
    date: 'Dec 28th, 2024 - Jan 2nd, 2025',
    url: '/diving-trips/raja-ampat-wayag-majestic-voyager',
    price: '25,5jt',
    priceNum: '25500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageMaldivesTwo.src,
    imgAlt: 'Maldives Trip',
    blurDataUrl: ImageMaldivesTwo.blurDataURL,
    title: 'Best of Maldives Dive Trip',
    location: 'Maldives',
    date: 'Feb 2nd - 9th, 2025',
    url: '/diving-trips/best-of-maldives-dive-trip',
    price: '1,400',
    priceNum: '1400',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageMaldivesOne.src,
    imgAlt: 'Maldives Trip',
    blurDataUrl: ImageMaldivesOne.blurDataURL,
    title: 'Deep South Maldives Dive Trip',
    location: 'Maldives',
    date: 'Feb 16th - 23rd, 2025',
    url: '/diving-trips/deep-south-maldives-dive-trip',
    price: '1,400',
    priceNum: '1400',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageMaldivesThree.src,
    imgAlt: 'Maldives Trip',
    blurDataUrl: ImageMaldivesThree.blurDataURL,
    title: 'Lebaran Escape Best of Maldives Dive Trip with MYNA-1',
    location: 'Maldives',
    date: 'Mar 23rd - 30th, 2025',
    url: '/diving-trips/lebaran-escape-best-of-maldives-dive-trip',
    price: '1,650',
    priceNum: '1650',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageMisoolOne.src,
    imgAlt: 'Misool Trip',
    blurDataUrl: ImageMisoolOne.blurDataURL,
    title: 'Lebaran Escape Misool Dive Trip with Majestic Voyager',
    location: 'Raja Ampat, Indonesia',
    date: 'Mar 28rd - Apr 3rd, 2025',
    url: '/diving-trips/lebaran-escape-misool-dive-trip',
    price: '27,5jt',
    priceNum: '27500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImagePalawanOne.src,
    imgAlt: 'Tubbataha Trip',
    blurDataUrl: ImagePalawanOne.blurDataURL,
    title: 'Lebaran Escape Tubbataha Reef Dive Trip',
    location: 'Palawan, Philippines',
    date: 'Mar 26th - Apr 1st, 2025',
    url: '/diving-trips/lebaran-escape-tubbataha-dive-trip',
    price: '2,490',
    priceNum: '2490',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImagePalawanTwo.src,
    imgAlt: 'Tubbataha Trip',
    blurDataUrl: ImagePalawanTwo.blurDataURL,
    title: 'Tubbataha Dive Trip',
    location: 'Palawan, Philippines',
    date: 'May 7th - 13th, 2025',
    url: '/diving-trips/tubbataha-dive-trip',
    price: '2,490',
    priceNum: '2490',
    currency: 'USD',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageAlorOne.src,
    imgAlt: 'Alor Trip',
    blurDataUrl: ImageAlorOne.blurDataURL,
    title: 'Alor Dive Trip with Majestic Voyager',
    location: 'Nusa Tenggara, Indonesia',
    date: 'May 27th - 31st, 2025',
    url: '/diving-trips/alor-majestic-voyager',
    price: '20jt',
    priceNum: '20000000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageLabuanBajoOpen.src,
    imgAlt: 'Komodo Trip',
    blurDataUrl: ImageLabuanBajoOpen.blurDataURL,
    title: 'Komodo Dive Trip with Majestic Voyager',
    location: 'Komodo, Indonesia',
    date: 'Jun 25th - 29th, 2025',
    url: '/diving-trips/komodo-majestic-voyager',
    price: '17,5jt',
    priceNum: '17500000',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageBandarNeiraOne.src,
    imgAlt: 'Banda Neira Trip',
    blurDataUrl: ImageBandarNeiraOne.blurDataURL,
    title: 'Banda Neira Dive Trip with Majestic Voyager',
    location: 'Maluku, Indonesia',
    date: 'Sep 20th - 26th, 2025',
    url: '/diving-trips/banda-neira-majestic-voyager',
    price: '',
    priceNum: '',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageRingOfFire.src,
    imgAlt: 'Ring of Fire Trip',
    blurDataUrl: ImageRingOfFire.blurDataURL,
    title: 'Ring of Fire - Forgotten Island Dive Trip with Oceanix Voyager',
    location: 'Indonesia',
    date: 'Sep 29th - Oct 5th, 2025',
    url: '/diving-trips/ring-of-fire-oceanix-voyager-september',
    price: '',
    priceNum: '',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageRingOfFire.src,
    imgAlt: 'Ring of Fire Trip',
    blurDataUrl: ImageRingOfFire.blurDataURL,
    title: 'Ring of Fire - Forgotten Island Dive Trip with Oceanix Voyager',
    location: 'Indonesia',
    date: 'Oct 6th - 12th, 2025',
    url: '/diving-trips/ring-of-fire-oceanix-voyager-october',
    price: '',
    priceNum: '',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
  {
    img: ImageLucipara.src,
    imgAlt: 'Lucipara Suanggi Trip',
    blurDataUrl: ImageLucipara.blurDataURL,
    title: 'Lucipara Suanggi Dive Trip with Majestic Voyager',
    location: 'Maluku, Indonesia',
    date: 'Oct 12th - 17th, 2025',
    url: '/diving-trips/lucipara-suanggi-majestic-voyager',
    price: '',
    priceNum: '',
    currency: 'IDR',
    duration: '4 days',
    highlight: {
      diveCount: '11 dives',
      type: 'LOB'
    },
    available: true,
  },
];

export const upcomingTours = [
  {
    img: ImageLabuanBajoPrivate.src,
    imgAlt: 'Labuan Bajo Private Trip',
    blurDataUrl: ImageLabuanBajoPrivate.blurDataURL,
    title: 'Labuan Bajo Private Trip',
    location: 'NTT, Indonesia',
    date: 'Upon Request',
    url: '/tours-experiences/labuan-bajo-private-trip',
    price: '11jt',
    priceNum: '11000000',
    currency: 'IDR',
    duration: '4 days',
    unit: '/ 1-5 guests',
    type: 'Private Trip',
  },
  {
    img: ImageLabuanBajoOpen.src,
    imgAlt: 'Labuan Bajo Open Trip',
    blurDataUrl: ImageLabuanBajoOpen.blurDataURL,
    title: 'Labuan Bajo Open Trip',
    location: 'NTT, Indonesia',
    date: 'Every Fri - Sun',
    url: '/tours-experiences/labuan-bajo-open-trip',
    price: '1,45jt',
    priceNum: '1450000',
    currency: 'IDR',
    duration: '4 days',
    unit: '/ person',
    type: 'Open Trip',
  },
  {
    img: ImageSumbasMain.src,
    imgAlt: 'Sumba Tour',
    blurDataUrl: ImageSumbasMain.blurDataURL,
    title: 'Sumba Culture & Nature Tour',
    location: 'NTT, Indonesia',
    date: 'Nov 9th, 2024',
    url: '/',
    price: '12jt',
    priceNum: '12000000',
    currency: 'IDR',
    duration: '4 days',
    unit: '/ 1-5 guests',
    type: 'Private Trip',
  },
  {
    img: ImageTorajaMain.src,
    imgAlt: 'Toraja Tour',
    blurDataUrl: ImageTorajaMain.blurDataURL,
    title: 'Toraja Highland & Rafting Tour',
    location: 'Sulawesi, Indonesia',
    date: 'Nov 12th, 2024',
    url: '/',
    price: '14,9jt',
    priceNum: '14900000',
    currency: 'IDR',
    duration: '4 days',
    unit: '/ 1-5 guests',
    type: 'Private Trip',
  },
  {
    img: ImageUbudMain.src,
    imgAlt: 'Ubud Tour',
    blurDataUrl: ImageUbudMain.blurDataURL,
    title: 'Ubud Village & Tanah Lot Tour',
    location: 'Bali, Indonesia',
    date: 'Nov 14th, 2024',
    url: '/',
    price: '650rb',
    priceNum: '650000',
    currency: 'IDR',
    duration: '4 days',
    unit: '/ person',
    type: 'Open Trip',
  },
  {
    img: ImageKintamaniMain.src,
    imgAlt: 'Kintamani Tour',
    blurDataUrl: ImageKintamaniMain.blurDataURL,
    title: 'Kintamani, Batur & Besakih Tour',
    location: 'Bali, Indonesia',
    date: 'Nov 21st, 2024',
    url: '/',
    price: '600rb',
    priceNum: '600000',
    currency: 'IDR',
    duration: '4 days',
    unit: '/ person',
    type: 'Open Trip',
  },
];

export const upcomingLiveaboard = [
  {
    img: ImageVeloceanMisoolOne.src,
    imgAlt: 'Velocean raja ampat liveaboard',
    blurDataUrl: ImageVeloceanMisoolOne.blurDataURL,
    title: 'Raja Ampat - Misool Dive Trip with Velocean Liveaboard',
    location: 'Misool, Raja Ampat',
    date: 'Dec 8th - 16th, 2024',
    url: '/liveaboard/velocean-raja-ampat',
    price: '5,500',
    priceNum: '5500',
    currency: 'USD',
    duration: '8 days',
    available: false,
    shipName: 'Velocean Liveaboard',
  },
  {
    img: ImageVeloceanMisoolTwo.src,
    imgAlt: 'Lebaran Escape to Misool with Velocean Liveaboard',
    blurDataUrl: ImageVeloceanMisoolTwo.blurDataURL,
    title: 'Lebaran Escape to Misool with Velocean Liveaboard',
    location: 'Misool, Raja Ampat',
    date: 'Mar 28th - Apr 5th, 2025',
    url: '/liveaboard/velocean-lebaran-escape-misool',
    price: '5,414',
    priceNum: '5414',
    currency: 'USD',
    duration: '8 days',
    available: true,
    shipName: 'Velocean Liveaboard',
  },
]
