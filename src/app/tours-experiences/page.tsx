import HeroListPage from '@/components/partial/HeroListPage';
import CardVerticalItem from '@/components/ui/CardVerticalItem';
import ImageSharkUnderwater from '@public/assets/images/gallery/tours-banner-1.jpg'
import { upcomingTours } from '@/data/upcomingEvents';

export default function ToursExperiencesPage() {

  return (
    <main>
      <HeroListPage
        title='Tours & Experiences'
        subtitle='From historical landmarks to hidden gems, our expertly curated tours provide immersive travel experiences for all interests.'
        img={ImageSharkUnderwater.src}
        imgAlt='Tours & Experiences Page Image Banner'
        blurDataUrl={ImageSharkUnderwater.blurDataURL}
      />
      <div className='container px-4 lg:px-8 my-10'>
        <h2 className='mb-1 lg:mb-3 whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>Explore Our Tours & Experiences</h2>
        <div className='flex flex-wrap -mx-4'>
          {upcomingTours?.map(({ img, imgAlt, blurDataUrl, title, location, date, url, price, type, unit }, index) => {

            return (
              <div key={index} className='basis-[100%] md:basis-1/2 lg:basis-[25%] p-4 grow-0 flex-shrink-0'>
                <CardVerticalItem
                  img={img}
                  imgAlt={imgAlt}
                  blurDataUrl={blurDataUrl}
                  url={url}
                  title={title}
                  location={location || ''}
                  date={date || ''}
                  price={price || ''}
                  type={type}
                  unit={unit}
                />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
};
