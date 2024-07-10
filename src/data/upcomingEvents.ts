// DIVING
import ImageBelangasMain from '@public/assets/images/diving/hammerhead-belongas.jpg'
import ImageMisoolMain from '@public/assets/images/diving/wobbegong-shark.jpg'
import ImageMaratuaMain from '@public/assets/images/diving/barracuda-main.jpg'
import ImageAlorMain from '@public/assets/images/diving/hammerhead-alor.jpg'

// TOUR
import ImageSumbasMain from '@public/assets/images/tours/sumba.jpg'
import ImageTorajaMain from '@public/assets/images/tours/toraja.jpg'
import ImageUbudMain from '@public/assets/images/tours/ubud.jpg'
import ImageKintamaniMain from '@public/assets/images/tours/kintamani.jpg'

// LIVEABOARD
import ImageVelocean from '@public/assets/images/vessels/velocean.jpg'

export const upcomingDivingTrips = [
  {
    img: ImageBelangasMain.src,
    imgAlt: 'Belongas Diving Hammershark',
    blurDataUrl: ImageBelangasMain.blurDataURL,
    title: 'Belongas Diving Trip',
    location: 'Lombok, Indonesia',
    date: 'Jun 28th - Jul 1st, 2024',
    url: '/',
    price: 'USD 480',
    duration: '4 days',
    highlight: {
      diveCount: '6 dives',
      attraction: 'Hammerhead Sharks'
    }
  },
  {
    img: ImageMaratuaMain.src,
    imgAlt: 'Maratua Diving Trip',
    blurDataUrl: ImageMaratuaMain.blurDataURL,
    title: 'Maratua Diving Trip',
    location: 'Kalimantan, Indonesia',
    date: 'Oct 15th - Oct 19th, 2024',
    url: '/',
    price: 'USD 360',
    duration: '4 days',
    highlight: {
      diveCount: '6 dives',
      attraction: 'Tornado Barracudas'
    }
  },
  {
    img: ImageMisoolMain.src,
    imgAlt: 'Raja Amppat Diving',
    blurDataUrl: ImageMisoolMain.blurDataURL,
    title: 'Misool Diving Trip',
    location: 'Raja Ampat, Indonesia',
    date: 'Sep 7th - Sep 11th, 2024',
    url: '/',
    price: 'USD 620',
    duration: '4 days',
    highlight: {
      diveCount: '5 dives',
      attraction: 'Wobbegong Sharks'
    }
  },
  {
    img: ImageAlorMain.src,
    imgAlt: 'Alor Diving Trip',
    blurDataUrl: ImageAlorMain.blurDataURL,
    title: 'Alor Diving Trip',
    location: 'Nusa Tenggara, Indonesia',
    date: 'Nov 25th - Nov 29th, 2024',
    url: '/',
    price: 'USD 550',
    duration: '4 days',
    highlight: {
      diveCount: '6 dives',
      attraction: 'Hammerhead Sharks'
    }
  },
];

export const upcomingTours = [
  {
    img: ImageSumbasMain.src,
    imgAlt: 'Sumba Tour',
    blurDataUrl: ImageSumbasMain.blurDataURL,
    title: 'Sumba Culture & Nature Tour',
    location: 'NTT, Indonesia',
    date: 'Nov 9th, 2024',
    url: '/',
    price: 'USD 1,100',
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
    price: 'USD 450',
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
    price: 'USD 250',
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
    price: 'USD 200',
    duration: '4 days',
    unit: '/ person',
    type: 'Open Trip',
  },
];

export const upcomingLiveaboard = [
  {
    img: ImageVelocean.src,
    imgAlt: 'Velocean maldives liveaboard',
    blurDataUrl: ImageVelocean.blurDataURL,
    title: 'VELOCEAN',
    location: 'Maldives',
    date: 'Dec 25th, 2024 - Jan 1st, 2025',
    url: '/',
    price: 'USD 4,950',
    duration: '8 days',
  },
]
