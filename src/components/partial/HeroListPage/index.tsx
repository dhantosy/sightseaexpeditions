import Image from 'next/image';
import { HeroListPageProp } from './types';

export default function HeroListPage({
  title,
  img,
  imgAlt,
  blurDataUrl
}: HeroListPageProp) {

  return (
    <section className='relative overflow-hidden rounded-2xl border-[18px] border-white lg:border-[32px]'>
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
      <div className='px-0 py-7 p-16 rounded-3xl overflow-hidden'>
        <div className='container px-4 lg:px-8'>
          <div className='text-center'>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
};
