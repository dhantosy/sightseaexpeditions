import HeroListPage from '@/components/partial/HeroListPage';
import CardImageTitle from '@/components/ui/CardImageTitle';
import ImageBanner from '@public/assets/images/gallery/dive-center-banner-3.jpg'
import { diveCentersList } from '@/data/diveCenters';
import SectionInstagram from '@/components/partial/SectionInstagram';
import SectionTestimonials from '@/components/partial/SectionTestimonials';
import { instagramImages } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';

export default function DiveCentersPage() {

  return (
    <main>
      <HeroListPage
        title='Dive Centers'
        subtitle='Our professional dive centers provide certified instruction, equipment rentals, and guided diving, catering to novice and experienced divers.'
        img={ImageBanner.src}
        imgAlt='Dive Centers Page Image Banner'
        blurDataUrl={ImageBanner.blurDataURL}
      />
      <div className='container px-4 lg:px-8 my-10'>
        <h2 className='mb-1 lg:mb-3 whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>Find Dive Centers</h2>
        <div className='flex flex-wrap -mx-4'>
          {diveCentersList?.map(({ img, imgAlt, url, title, blurDataUrl }, index) => {

            return (
              <div key={index} className='basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/5 p-4 grow-0 flex-shrink-0'>
                <CardImageTitle img={img} imgAlt={imgAlt} url={url} title={title} blurDataUrl={blurDataUrl} />
              </div>
            )
          })}
        </div>
      </div>
      <SectionTestimonials testimonials={testimonials} />
      <SectionInstagram titleMain='@sightsea' titleTop='Follow Us on Instagram' gallery={instagramImages} />
    </main>
  )
};
