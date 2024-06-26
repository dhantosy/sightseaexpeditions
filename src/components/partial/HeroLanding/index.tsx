import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { HeroLandingProp } from './types';

export default function HeroLanding({
  videoSrc,
  videoPoster,
  title,
  subtitle,
  btnMainText,
  btnMainUrl,
  btnSecondaryText,
  btnSecondaryUrl
}: HeroLandingProp) {

  return (
    <section className='relative overflow-hidden border-[18px] border-white pb-[45%] mt-16 lg:border-[32px] 2lg:h-[calc(100vh-60px)] 2lg:pb-0 after:content-[""] after:w-full after:bg-black after:opacity-20 after:h-full after:absolute after:rounded-3xl'>
      <div className='absolute h-full top-0 left-0 w-full rounded-3xl overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          poster={videoPoster}
          className='absolute w-full'
        >
          <source
            src={videoSrc}
            type='video/mp4'
          />
        </video>
      </div>
      <div className='max-w-5xl px-4 absolute text-center text-white top-0 right-0 bottom-0 left-0 m-auto flex items-center z-10'>
        <div className='flex flex-col gap-5'>
          <h1 className='uppercase font-montserrat font-semibold mx-auto lg:leading-tight lg:text-5xl'>{title}</h1>
          <p className='max-w-2xl text-white/90 text-xl mx-auto'>{subtitle}</p>
          <div className='flex justify-center gap-6 mt-4'>
            <Button asChild size='md' className='uppercase'>
              <Link href={btnMainUrl} aria-label={`Go to ${btnMainText} page`}>{btnMainText}</Link>
            </Button>
            <Button asChild variant='outline' size='md' className='uppercase'>
              <Link href={btnSecondaryUrl} aria-label={`Go to ${btnSecondaryText} page`}>{btnSecondaryText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};
