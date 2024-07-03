import Image from 'next/image';
import SectionInfo from '@/components/partial/SectionInfo';
import SectionInstagram from '@/components/partial/SectionInstagram';
import SectionTestimonials from '@/components/partial/SectionTestimonials';
import Title from '@/components/ui/Title';
import ImageSharkUnderwater from '@public/assets/images/gallery/gallery-1.jpg'
import ImageSharkSwimming from '@public/assets/images/gallery/gallery-2.jpg'
import ImagePaddling from '@public/assets/images/gallery/gallery-3.jpg'
import ImageFounder from '@public/assets/images/gallery/about-founder.jpg';
import ImageVision from '@public/assets/images/gallery/about-vision.jpg';
import ImageMission from '@public/assets/images/gallery/about-mission.jpg';
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

export default function AboutPage() {

  return (
    <main className='mt-28 lg:mt-40'>
      <SectionInfo
        titleTop='About Sightsea Expeditions'
        titleMain='Your Premium Trip Currator.'
        images={aboutImages}
        description='Sightsea Expeditions specializes in providing unforgettable experiences in exotic, untouched islands and dive sites with dedication to create unique moments and rare sightings for our clients. With over a decade of experience, we are experts in offering dive trips, non-diver trips, and boat charters that showcase astonishing biomarine diversity.'
      />
      <section className='relative container my-10 lg:my-12 px-4 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap items-center -mx-4'>
            <div className='basis-[100%] lg:basis-[50%] px-4 grow-0'>
              <div className='relative border border-slate-200 rounded-2xl p-3 after:content-[""] after:w-full after:top-0 after:left-0 after:bg-white/10 after:blur after:h-full after:absolute'>
                <div className='relative z-10 rounded-2xl overflow-hidden w-full h-full pb-[60%] shadow-2xl'>
                  <Image
                    src={ImageFounder.src}
                    alt='Sightsea Expeditions Founder Image'
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 1340px) 590px, 100vw"
                    placeholder='blur'
                    blurDataURL={ImageFounder.blurDataURL}
                    fill
                  />
                </div>
              </div>
            </div>
            <div className='basis-[100%] lg:basis-[50%] px-4 grow-0 mt-6 lg:mt-0 w-full'>
              <Title titleMain='👋 From Our Founder.' />
              <p className='whitespace-pre-line	mt-6 text-bluePrimary/70 text-lg'>Sightsea Expeditions was founded by a passionate and experienced dive master “Dimas Cungkring” who has amassed extensive experience in the dive trip industry dating back to 2011. He can be found adventuring on Instagram at <a href='https://www.instagram.com/cungkring/' target='_blank' className='font-semibold underline'>@cungkring</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative container my-10 lg:my-12 px-4 lg:px-8'>
        <div className='relative'>
          <div className='absolute inset-x-0 top-0 min-h-0 pl-20 py-24 flex overflow-hidden z-0'>
            <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
          </div>
        </div>
        <div className='max-w-6xl mx-auto relative'>
          <div className='flex flex-wrap flex-col-reverse lg:flex-row items-center -mx-4'>
            <div className='basis-[100%] lg:basis-[50%] px-4 grow-0 mt-6 lg:mt-0 w-full'>
              <Title titleMain='Our Vision.' />
              <p className='whitespace-pre-line	mt-6 text-bluePrimary/70 text-lg'>To be the leading provider of extraordinary island adventures, connecting people with themselves and others through unique natural experiences.</p>
            </div>
            <div className='basis-[100%] lg:basis-[50%] px-4 grow-0  w-full h-full'>
              <div className='relative border border-slate-200 rounded-2xl p-3 after:content-[""] after:w-full after:top-0 after:left-0 after:bg-white/10 after:blur after:h-full after:absolute'>
                <div className='relative z-10 rounded-2xl overflow-hidden w-full h-full pb-[60%] shadow-2xl'>
                  <Image
                    src={ImageVision.src}
                    alt='Sightsea Expeditions Vision Image'
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 1340px) 590px, 100vw"
                    placeholder='blur'
                    blurDataURL={ImageVision.blurDataURL}
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative container mb-12 lg:mb-20 mt-10 lg:mt-12 px-4 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap items-center -mx-4'>
            <div className='basis-[100%] lg:basis-[50%] px-4 grow-0'>
              <div className='relative border border-slate-200 rounded-2xl p-3 after:content-[""] after:w-full after:top-0 after:left-0 after:bg-white/10 after:blur after:h-full after:absolute'>
                <div className='relative z-10 rounded-2xl overflow-hidden w-full h-full pb-[60%] shadow-2xl'>
                  <Image
                    src={ImageMission.src}
                    alt='Sightsea Expeditions Mission Image'
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 1340px) 590px, 100vw"
                    placeholder='blur'
                    blurDataURL={ImageMission.blurDataURL}
                    fill
                  />
                </div>
              </div>
            </div>
            <div className='basis-[100%] lg:basis-[50%] px-4 grow-0 mt-6 lg:mt-0 w-full'>
              <Title titleMain='Our Mission.' />
              <p className='whitespace-pre-line	mt-6 text-bluePrimary/70 text-lg'>We are committed to crafting immersive island experiences that foster a deep appreciation for nature, marine life, and the beauty of the untouched world. We aim to create unforgettable memories and inspire our clients to become stewards of the environment.</p>
            </div>
          </div>
        </div>
      </section>
      <SectionTestimonials testimonials={testimonials} />
      <SectionInstagram titleMain='@sightsea' titleTop='Follow Us on Instagram' gallery={instagramImages} />
    </main>
  )
};
