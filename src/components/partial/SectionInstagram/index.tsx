import Image from 'next/image';
import { SectionInstagramProp } from './types';

export default function SectionInstagram({
  titleMain,
  titleTop,
  gallery,
}: SectionInstagramProp) {

  return (
    <section className='my-12 md:my-20 relative'>
      <div className='absolute inset-x-0 -top-32 min-h-0 pl-20 py-24 flex justify-end overflow-hidden z-0'>
        <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-50 lg:w-96 lg:h-96' />
      </div>
      <div className='container relative px-4 text-center lg:px-8'>
        <div className='flex flex-col'>
          <div className='m-auto'>
            <h4 className='text-sm md:text-lg font-medium uppercase tracking-wider font-montserrat mb-1'>{titleTop}</h4>
            <h2 className='whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>
              <a href='https://www.instagram.com/sightsea/' target='_blank'>{titleMain}</a>
            </h2>
          </div>
          <div className='border border-slate-200 rounded-2xl mt-5 md:mt-7'>
            <div className='flex flex-col mx-auto overflow-x-auto lg:overflow-x-hidden'>
              <div className='flex mx-auto flex-nowrap lg:flex-wrap relative lg:px-4 lg:-mx-3'>
                {gallery.slice(0, 6).map(({ img, imgAlt, blurDataUrl, url }, index) => {
                  return (
                    <div key={index} className='p-3 flex flex-shrink-0 2xs:flex-shrink-0 flex-[220px] lg:flex-[16.66%] w-full'>
                      <a href={url} target='_blank' className='block w-full relative'>
                        <div className='relative top-0 transition-all p-4 h-48 lg:pb-[90%] shadow-lg rounded-2xl overflow-hidden hover:-top-1'>
                          <Image
                            src={img}
                            alt={imgAlt}
                            style={{ objectFit: 'cover' }}
                            placeholder='blur'
                            blurDataURL={blurDataUrl}
                            fill
                            sizes={'200px'}
                          />
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
              <div className='flex mx-auto flex-nowrap lg:flex-wrap relative lg:px-4 lg:-mx-3'>
                {gallery.slice(6, 12).map(({ img, imgAlt, blurDataUrl, url }, index) => {
                  return (
                    <div key={index} className='p-3 flex flex-shrink-0 2xs:flex-shrink-0 flex-[220px] lg:flex-[16.66%] w-full'>
                      <a href={url} target='_blank' className='block w-full relative'>
                        <div className='relative top-0 transition-all p-4 h-48 lg:pb-[90%] shadow-lg rounded-2xl overflow-hidden hover:-top-1'>
                          <Image
                            src={img}
                            alt={imgAlt}
                            style={{ objectFit: 'cover' }}
                            placeholder='blur'
                            blurDataURL={blurDataUrl}
                            fill
                            sizes={'200px'}
                          />
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
