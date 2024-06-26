import HeroLanding from '@/components/partial/HeroLanding';
import SectionInfo from '@/components/partial/SectionInfo';
import SectionUpcomingEvents from '@/components/partial/SectionUpcomingEvents';
import SectionInfoHorizontal from '@/components/partial/SectionInfoHorizontal';
import SectionTestimonials from '@/components/partial/SectionTestimonials';
import ImageVideoPoster from '@public/assets/images/video-poster.webp'
import ImageVelocean from '@public/assets/images/vessels/velocean.jpg'
import ImageSharkUnderwater from '@public/assets/images/gallery/gallery-1.jpg'
import ImageSharkSwimming from '@public/assets/images/gallery/gallery-2.jpg'
import ImagePaddling from '@public/assets/images/gallery/gallery-3.jpg'
import { upcomingDivingTrips, upcomingTours } from '@/data/upcomingEvents';
import { diveCentersList } from '@/data/diveCenters';
import { testimonials } from '@/data/testimonials';

const aboutImages = [
  {
    src: ImageSharkUnderwater.src,
    srcBlurData: ImageSharkUnderwater.blurDataURL,
    alt: 'Sightsea Underwater Shark',
  },
  {
    src: ImageSharkSwimming.src,
    srcBlurData: ImageSharkSwimming.blurDataURL,
    alt: 'Sightsea Swimming Shark',
  },
  {
    src: ImagePaddling.src,
    srcBlurData: ImagePaddling.blurDataURL,
    alt: 'Sightsea Sunset Paddling',
  },
];

export default function Home() {
  return (
    <main>
      <HeroLanding
        videoSrc='/assets/images/video-sightsea.mp4'
        videoPoster={ImageVideoPoster.src}
        title='Your Personalized Diving Trips and Liveaboard Experience'
        subtitle='Our adventures are currated by our experts in diving and leisure trips. With us, your trip will be a story that will last a lifetime.'
        btnMainText='Explore Diving Trips'
        btnMainUrl='/'
        btnSecondaryText='About Us'
        btnSecondaryUrl='/'
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
        events={upcomingDivingTrips}
        btnUrl='/'
        btnText='See All Diving Trips'
        cardClass='basis-[100%] 2lg:basis-[50%] p-4 grow-0'
        cardType='horizontal'
      />
      <div className='relative'>
        <div className='absolute inset-x-0 top-64 min-h-0 pl-20 py-24 flex justify-end overflow-hidden z-0'>
          <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 lg:w-96 lg:h-96' />
        </div>
      </div>
      <SectionInfoHorizontal
        titleTop='Ocean as Your Home'
        titleMain={`Liveaboard with VELOCEAN
          to the Pristine Maldives.`}
        description={`VELOCEAN is the brand new 52 Meters scuba purpose-built liveaboard with all Aluminium hull, deck superstructure and powerful twin marine engines providing 20 knots cruising speed making her the fastest diving liveaboard in Indonesia.

          With VELOCEAN, we will craft a personalized itinerary that whisks you away to hidden reefs teeming with life, pristine beaches where time slows down, and luxurious liveaboards that put comfort at the forefront. Dive into paradise and create memories that will leave you breathless.

          Our Maldives adventures will take you beyond the postcard, crafting a personalized liveaboard experience you will never forget.
        `}
        img={ImageVelocean.src}
        imgAlt='Liveaboard with VELOCEAN'
        blurDataUrl={ImageVelocean.blurDataURL}
        btnTopUrl='/'
        btnTopText='Learn More'
        btnBottomUrl='/'
        btnBottomText='Other Liveaboard'
      />
      <SectionUpcomingEvents
        titleTop='Unlock the Hidden Gems'
        titleMain='Tours Beyond the Expected.'
        events={upcomingTours}
        btnUrl='/'
        btnText='See All Tours & Experiences'
        cardClass='flex flex-shrink-0 2xs:flex-shrink-0 flex-[220px] 2xs:flex-[240px] lg:flex-[25%] w-full'
        cardType='vertical'
        cardSlide
      />
      <div className='relative'>
        <div className='absolute inset-x-0 -top-72 min-h-0 pl-20 py-24 flex justify-between overflow-hidden z-0'>
          <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 lg:w-96 lg:h-96' />
        </div>
      </div>
      <SectionUpcomingEvents
        titleTop='Discover the Underwater World'
        titleMain='Explore Dive Centers.'
        events={diveCentersList}
        btnUrl='/'
        btnText='See All Dive Centers'
        cardClass='flex flex-shrink-0 2xs:flex-shrink-0 flex-[220px] 2xs:flex-[240px] lg:flex-[20%] w-full'
        cardType='imageTitle'
        cardSlide
      />
      <SectionTestimonials testimonials={testimonials} />
    </main>
  );
}
