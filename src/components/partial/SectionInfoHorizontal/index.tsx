import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/Button';
import { SectionInfoHorizontalProp } from './types';

export default function SectionInfoHorizontal({
  titleTop,
  titleMain,
  description,
  img,
  imgAlt,
  blurDataUrl,
  btnTopUrl,
  btnTopText,
  btnBottomUrl,
  btnBottomText,
}: SectionInfoHorizontalProp) {

  return (
    <section className='relative container my-24 px-4 lg:px-8'>
      <div className='flex flex-wrap items-center -mx-6'>
        <div className='basis-[100%] md:basis-[50%] px-6 grow-0'>
          <div className='relative border border-slate-200 rounded-2xl p-3 after:content-[""] after:w-full after:top-0 after:left-0 after:bg-white/10 after:blur after:h-full after:absolute'>
            <div className='relative z-10 rounded-2xl overflow-hidden w-full h-[160px] md:h-full md:pb-[100%] shadow-2xl'>
              <Image
                src={img}
                alt={imgAlt}
                style={{ objectFit: 'cover' }}
                placeholder='blur'
                blurDataURL={blurDataUrl}
                fill
              />
            </div>
          </div>
        </div>
        <div className='basis-[100%] md:basis-[50%] px-6 grow-0'>
          <Title
            titleTop={titleTop}
            titleMain={titleMain}
          />
          <p className='whitespace-pre-line	mt-6 mb-10 text-bluePrimary/60'>{description}</p>
          <div className='flex gap-4'>
            <Button asChild size='md' className='uppercase'>
              <Link href={btnTopUrl} aria-label={btnTopText}>{btnTopText}</Link>
            </Button>
            <Button asChild variant='ghost' size='md' className='uppercase'>
              <Link href={btnBottomUrl} aria-label={btnBottomText}>{btnBottomText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};
