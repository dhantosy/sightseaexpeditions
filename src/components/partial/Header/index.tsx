'use client'

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import LogoTransparent from '@public/assets/images/sightsea-expeditions-logo-transparent.png';
import { mainMenu } from '@/data/menus'
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition < 6) setActive(false);
    if (scrollPosition >= 5) setActive(true);
  }, [scrollPosition]);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuActive(!mobileMenuActive);
  }, [mobileMenuActive]);

  useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname]);

  return (
    <header className={!active ? 'fixed z-50 w-full bg-white backdrop-blur-lg left-0 top-0 transition-all uppercase font-semibold' : 'shadow fixed w-full backdrop-blur-lg bg-white/80 left-0 top-0 z-50 transition-all uppercase font-semibold'}>
      <div className='container px-4 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div className='relative flex max-w-28 lg:max-w-full'>
            <Link href='/' className={!active ? 'py-4 transition-all' : 'py-4 transition-all'} aria-label='go to home page'>
              <Image
                src={LogoTransparent}
                alt='trip by the sea logo'
                width={0}
                height={0}
                sizes='(max-width: 768px) 208px, 350px'
                priority
                className='w-[132px] h-auto'
              />
            </Link>
          </div>
          <div className='gap-6 hidden lg:flex lg:gap-10'>
            {mainMenu.map(({ title, url }) => {
              return (
                <Link key={title} href={url} className='font-montserrat py-4 flex items-center transition-all hover:text-bluePrimary/50' aria-label={`Go to ${title} page`}>
                  {title}
                </Link>
              )
            })}
          </div>
          <Button asChild size='md' className='hidden lg:block'>
            <Link href='/' aria-label='Go to contact page'>Contact Us</Link>
          </Button>
          <div className='block lg:hidden p-3 pr-0 cursor-pointer' onClick={handleMobileMenuClick}>
            <span className='uppercase font-montserrat text-md font-bold'>Menu</span>
          </div>
        </div>
      </div>
      <div className={`${mobileMenuActive ? 'block' : 'hidden'} h-screen bg-white/[.97] fixed w-full p-5`}>
        {mainMenu.map(({ title, url }) => {
          return (
            <Link key={title} href={url} className='py-4 flex justify-end font-montserrat font-semibold text-xl' aria-label={`Go to ${title} page`}>
              {title}
            </Link>
          )
        })}
        <Link href='/about-us' className='py-4 flex justify-end font-montserrat font-semibold text-xl' aria-label={`Go to about us page`}>
          About Us
        </Link>
        <div className='flex justify-end'>
          <Button asChild size='md' className='mt-7'>
            <Link href='/' aria-label='Go to contact page'>Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
};
