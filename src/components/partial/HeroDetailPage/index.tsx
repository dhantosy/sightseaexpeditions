import Image from 'next/image';
import { FaCalendar, FaTents } from 'react-icons/fa6';
import Title from '@/components/ui/Title';
import { HeroDetailPageProp } from './types';

export default function HeroDetailPage({
  title,
  schedule,
  pageType,
  tripType,
  images
}: HeroDetailPageProp) {

  return (
    <section className='container px-4 lg:px-8 relative mt-40 2xs:mt-28 lg:mt-40'>
      <Title titleTop={pageType} titleMain={title} />
      <div className='flex gap-0 3xs:gap-4 flex-col 3xs:flex-row'>
        {schedule && (
          <div className='mt-3 w-fit flex px-5 py-2 text-sm lg:text-base items-center gap-3 rounded-full bg-emerald-100 text-emerald-600 font-semibold'>
            <FaCalendar className='flex-shrink-0' />
            <span>{schedule}</span>
          </div>
        )}
        {tripType && (
          <div className='mt-3 w-fit flex px-5 py-2 text-sm lg:text-base items-center gap-3 rounded-full bg-orange-100 text-orange-700 font-semibold'>
            <FaTents className='flex-shrink-0' />
            <span>{tripType}</span>
          </div>
        )}
      </div>
      <div className='mx-auto overflow-x-auto lg:overflow-hidden h-[400px] lg:h-[600px] border border-slate-200 rounded-3xl px-4 py-2 lg:py-2 my-6 lg:my-8'>
        <div className='flex flex-nowrap lg:flex-wrap h-full w-full'>
          <div className='flex flex-shrink-0 2xs:flex-shrink-0 basis-[300px] lg:basis-1/2 w-full h-full'>
            <div className='border-8 border-l-0 border-white relative w-full'>
              <Image
                src={images[0].img}
                alt={images[0].imgAlt}
                sizes='100vw, 33vw'
                style={{ objectFit: 'cover' }}
                fill
                priority
                placeholder='blur'
                blurDataURL={images[0].blurDataUrl}
                className='rounded-3xl overflow-hidden'
              />
            </div>
          </div>
          <div className='flex-shrink-0 basis-full lg:basis-1/2 w-full relative flex flex-row lg:flex-col'>
            <div className='relative h-full w-full flex-shrink-0 basis-[308px] lg:basis-1/2'>
              <div className='border-8 lg:border-r-0 border-white relative w-full h-full'>
                <Image
                  src={images[1].img}
                  alt={images[1].imgAlt}
                  sizes='100vw, 33vw'
                  style={{ objectFit: 'cover' }}
                  fill
                  priority
                  placeholder='blur'
                  blurDataURL={images[1].blurDataUrl}
                  className='rounded-3xl overflow-hidden'
                />
              </div>
            </div>
            <div className='relative flex-shrink-0 flex basis-[616px] lg:basis-1/2'>
              <div className='relative rounded-3xl overflow-hidden h-full w-full basis-[308px] lg:basis-1/2'>
                <div className='border-8 border-white relative w-full h-full'>
                  <Image
                    src={images[2].img}
                    alt={images[2].imgAlt}
                    sizes='100vw, 33vw'
                    style={{ objectFit: 'cover' }}
                    fill
                    priority
                    placeholder='blur'
                    blurDataURL={images[2].blurDataUrl}
                    className='rounded-3xl overflow-hidden'
                  />
                </div>
              </div>
              <div className='relative rounded-3xl overflow-hidden h-full w-full basis-[308px] lg:basis-1/2'>
                <div className='border-8 border-r-[16px] lg:border-r-0 border-white relative w-full h-full'>
                  <Image
                    src={images[3].img}
                    alt={images[3].imgAlt}
                    sizes='100vw, 33vw'
                    style={{ objectFit: 'cover' }}
                    fill
                    priority
                    placeholder='blur'
                    blurDataURL={images[3].blurDataUrl}
                    className='rounded-3xl overflow-hidden'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
