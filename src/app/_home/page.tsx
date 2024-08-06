import HeroLanding from '@/components/partial/HeroLanding';
import SectionInfo from '@/components/partial/SectionInfo';
import SectionUpcomingEvents from '@/components/partial/SectionUpcomingEvents';
import SectionInfoHorizontal from '@/components/partial/SectionInfoHorizontal';
import SectionTestimonials from '@/components/partial/SectionTestimonials';
import SectionInstagram from '@/components/partial/SectionInstagram';
import ImageVideoPoster from '@public/assets/images/video-poster.webp'
import ImageVelocean from '@public/assets/images/vessels/velocean.jpg'
import ImageSharkUnderwater from '@public/assets/images/gallery/gallery-1.jpg'
import ImageSharkSwimming from '@public/assets/images/gallery/gallery-2.jpg'
import ImagePaddling from '@public/assets/images/gallery/gallery-3.jpg'
import { upcomingDivingTrips, upcomingTours } from '@/data/upcomingEvents';
import { diveCentersList } from '@/data/diveCenters';
import { testimonials } from '@/data/testimonials';
import { instagramImages } from '@/data/gallery';

const aboutImages = [
  {
    img: ImageSharkUnderwater.src,
    blurDataUrl: ImageSharkUnderwater.blurDataURL,
    imgAlt: 'Sightsea Underwater Shark',
  },
  {
    img: ImageSharkSwimming.src,
    blurDataUrl: ImageSharkSwimming.blurDataURL,
    imgAlt: 'Sightsea Swimming Shark',
  },
  {
    img: ImagePaddling.src,
    blurDataUrl: ImagePaddling.blurDataURL,
    imgAlt: 'Sightsea Sunset Paddling',
  },
];

export default function Home() {
  return (
    <main>
      <HeroLanding
        videoSrc='/assets/images/video-sightsea.mp4'
        videoPoster={ImageVideoPoster.src}
        title='Personalized exotic Diving Trips and Liveaboard Experience'
        subtitle='We specialize in providing unforgettable experiences in exotic and untouched islands and dive sites.'
        btnMainText='Explore Diving Trips'
        btnMainUrl='/diving-trips'
        btnSecondaryText='About Us'
        btnSecondaryUrl='/about'
      />
      <SectionInfo
        titleTop='About Sightsea Expeditions'
        titleMain='We are a Premium Trip Currator.'
        images={aboutImages}
        description='Sightsea Expeditions specializes in providing unforgettable experiences in exotic, untouched islands and dive sites with dedication to create unique moments and rare sightings for our clients. With over a decade of experience, we are experts in offering dive trips, non-diver trips, and boat charters that showcase astonishing biomarine diversity.'
      />
      <SectionUpcomingEvents
        titleTop='Unveil Deep Sea Wonders'
        titleMain='Our Upcoming Diving Trips.'
        events={upcomingDivingTrips.slice(0, 4)}
        btnUrl='/diving-trips'
        btnText='See All Diving Trips'
        cardClass='basis-full 2lg:basis-1/2 p-3 grow-0'
        cardType='horizontal'
      />
      <div className='relative'>
        <div className='absolute inset-x-0 top-64 min-h-0 pl-20 py-24 flex justify-end overflow-hidden z-0'>
          <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
        </div>
      </div>
      <SectionInfoHorizontal
        titleTop='Ocean as Your Home'
        titleMain={`Liveaboard with VELOCEAN.`}
        description={`VELOCEAN is the brand new 52 Meters scuba purpose-built liveaboard with all Aluminium hull, deck superstructure and powerful twin marine engines providing 20 knots cruising speed making her the fastest diving liveaboard in Indonesia.

          With VELOCEAN, we will craft a personalized itinerary that whisks you away to hidden reefs teeming with life, pristine beaches where time slows down, and luxurious liveaboards that put comfort at the forefront. Dive into paradise and create memories that will leave you breathless.

          Our adventures will take you beyond the postcard, crafting a personalized liveaboard experience you will never forget.
        `}
        img={ImageVelocean.src}
        imgAlt='Liveaboard with VELOCEAN'
        blurDataUrl={ImageVelocean.blurDataURL}
        btnTopUrl='/liveaboard/velocean'
        btnTopText='See Velocean'
        btnBottomUrl='/liveaboard'
        btnBottomText='Other Liveaboard'
      />
      <SectionUpcomingEvents
        titleTop='Unlock the Hidden Gems'
        titleMain='Tours Beyond the Expected.'
        events={upcomingTours.slice(0, 4)}
        btnUrl='/tours-experiences'
        btnText='See All Tours & Experiences'
        cardClass='flex shrink-0 grow-0 basis-[220px] 2xs:basis-[240px] lg:basis-1/4 w-full px-3'
        cardType='vertical'
        cardSlide
      />
      <div className='relative'>
        <div className='absolute inset-x-0 -top-48 md:-top-72 min-h-0 pl-20 py-24 flex justify-between overflow-hidden z-0'>
          <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
        </div>
      </div>
      <SectionUpcomingEvents
        titleTop='Discover the Underwater World'
        titleMain='Explore Dive Centers.'
        events={diveCentersList.slice(0, 5)}
        btnUrl='/dive-centers'
        btnText='See All Dive Centers'
        cardClass='flex shrink-0 grow-0 basis-[220px] 2xs:basis-[240px] lg:basis-1/5 w-full px-3'
        cardType='imageTitle'
        cardSlide
      />
      <SectionTestimonials testimonials={testimonials} />
      <SectionInstagram titleMain='@sightsea' titleTop='Follow Us on Instagram' gallery={instagramImages} />
    </main>
  );
}
