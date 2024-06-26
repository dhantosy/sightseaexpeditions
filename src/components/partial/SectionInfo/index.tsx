import Image from 'next/image';
import Title from '@/components/ui/Title';
import { SectionInfoProp } from './types';

export default function SectionInfo({
  titleTop,
  titleMain,
  images,
  description,
}: SectionInfoProp) {

  return (
    <section className='my-12 md:my-20 relative'>
      <div className='absolute inset-x-0 -top-24 min-h-0 pl-20 py-24 flex justify-between overflow-hidden z-0'>
        <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-50 lg:w-96 lg:h-96' />
        <span className='block bg-sky-300 w-72 h-72 -ml-20 mt-96 sm:mt-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-96' />
      </div>
      <div className='container relative px-4 text-center lg:px-8'>
        <div className='flex flex-col'>
          <div className='max-w-[250px] sm:max-w-full m-auto'>
            <Title
              titleTop={titleTop}
              titleMain={titleMain}
            />
          </div>
          <div className='flex relative gap-6 md:gap-10 max-w-5xl w-full mx-auto flex-nowrap overflow-x-auto my-7 border border-slate-200 rounded-2xl p-5'>
            {images.map(({ src, srcBlurData, alt }) => {
              return (
                <div key={alt} className='flex flex-shrink-0 flex-[240px] relative z-10 rounded-2xl overflow-hidden w-full h-80 md:pb-[40%] shadow-xl'>
                  <Image
                    src={src}
                    alt={alt}
                    sizes='(min-width: 1340px) 590px, 100vw'
                    style={{ objectFit: 'cover' }}
                    placeholder='blur'
                    blurDataURL={srcBlurData}
                    fill
                  />
                </div>
              )
            })}
          </div>
          <p className='max-w-4xl m-auto text-bluePrimary/70 text-lg'>{description}</p>
        </div>
      </div>
    </section>
  )
};
