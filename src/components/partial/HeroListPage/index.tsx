import Image from 'next/image';
import { HeroListPageProp } from './types';

export default function HeroListPage({
  title,
  subtitle,
  img,
  imgAlt,
  blurDataUrl
}: HeroListPageProp) {

  return (
    <section className='container relative mt-[66px] overflow-hidden border-[18px] border-white lg:border-[32px] h-80 lg:h-[480px] '>
      <div className='relative rounded-3xl  overflow-hidden h-full w-full'>
        <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute after:top-0 after:left-0'>
          <Image
            src={img}
            alt={imgAlt || ''}
            sizes='100vw, 33vw'
            style={{ objectFit: 'cover' }}
            fill
            priority
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </div>
      </div>
      <div className='absolute z-10 text-white left-0 top-0 bottom-0 right-0 m-auto flex items-center justify-center'>
        <div className='container px-4 lg:px-8 text-center'>
          <h1 className='mb-2 text-2xl uppercase font-montserrat font-bold 2sm:text-3xl lg:font-semibold lg:leading-tight lg:text-5xl'>{title}</h1>
          <p className='max-w-2xl text-white/90 text-base lg:text-xl mx-auto'>{subtitle}</p>
        </div>
      </div>
    </section>
  )
};
