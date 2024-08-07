'use client'

import Image from 'next/image';
import Link from 'next/link'
import { Button } from '@/components/ui/Button';
import LogoTransparent from '@public/assets/images/sightsea-expeditions-logo-transparent.png';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { message?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className='h-screen flex flex-col items-center justify-center text-center'>
          <div className='relative'>
            <Image
              src={LogoTransparent}
              alt='trip by the sea logo'
              width={0}
              height={0}
              sizes='(max-width: 768px) 208px, 350px'
              priority
              className='w-48 h-auto'
            />
          </div>
          <h2 className='text-2xl mt-12 mb-6 font-montserrat font-medium'>Oops.. Something went wrong!</h2>
          <Button asChild size='md' className='uppercase cursor-pointer'>
            <Link href='/'>Click here to refresh</Link>
          </Button>
          <div className='mt-10'>
            <p className='text-sm'>{error.message || error.name}</p>
          </div>
        </div>
      </body>
    </html>
  )
}
