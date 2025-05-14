import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { IoLogoWhatsapp } from "react-icons/io";
import LogoBlue from '@public/assets/images/sightsea-expeditions-logo-blue.jpg';
import { footerMenu } from '@/data/menus';

export default function Footer() {

  return (
    <footer className='relative z-10 text-white mt-8 lg:mt-12 overflow-hidden border-x-[18px] border-x-white lg:border-x-[32px]'>
      <div className='bg-bluePrimary px-2 2xs:px-4 md:px-10 pb-5 pt-2 md:pt-8 mt-10 rounded-t-2xl overflow-hidden'>
        <div className='container py-5 px-4 lg:px-8'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex flex-col'>
              <Link href='/' className='py-4' aria-label='go to home page'>
                <Image
                  src={LogoBlue}
                  alt='trip by the sea logo'
                  width={0}
                  height={0}
                  sizes='(max-width: 768px) 208px, 350px'
                  className='w-48 h-auto'
                />
              </Link>
            </div>
            <div className='flex gap-12 3sm:gap-28 flex-col-reverse 3sm:flex-row mt-6 lg:mt-0'>
              <div className='text-sm sm:text-base'>
                <p className='font-bold font-montserrat text-xl uppercase mb-4'>Explore</p>
                <div className='flex flex-col gap-3 opacity-80'>
                  {footerMenu.map(({ title, url }) => {
                    return (
                      <Link key={title} href={url}>{title}</Link>
                    )
                  })}
                </div>
              </div>
              <div>
                <p className='font-bold font-montserrat text-xl uppercase mb-4'>Contact</p>
                <div className='text-sm sm:text-base'>
                  <address className='opacity-80 not-italic mb-6 whitespace-pre-line'>
                    {`Jl. Plawa, Gg. Melati No.18, Seminyak,
                      Kec. Kuta, Kabupaten Badung, Bali 80361
                    `}
                  </address>
                  <div className='flex flex-col gap-2'>
                    <a href='https://www.instagram.com/sightsea/' target='_blank' aria-label='Go to Sightsea Expeditions instagram account' className='opacity-80 flex items-center gap-2'>
                      <FaInstagram className='flex-shrink-0 w-4' />
                      <span>sightsea</span>
                    </a>
                    <a href='mailto:admin@sightseaexpeditions.com' className='opacity-80 flex items-center gap-2'>
                      <FaEnvelope className='flex-shrink-0 w-4' />
                      <span>admin@sightseaexpeditions.com</span>
                    </a>
                    <a href='tel:+62811301031' className='opacity-80 flex items-center gap-2'>
                      <FaPhone className='flex-shrink-0 w-4' />
                      <span>+62 811 301 031</span>
                    </a>
                    <a
                      href='https://wa.me/62817654111?text=Hi%20Sightsea%20Expeditions!%20I%20would%20like%20to%20make%20an%20enquiry'
                      target='_blank'
                      className='opacity-80 flex items-center gap-2'
                    >
                      <IoLogoWhatsapp className='flex-shrink-0 w-4' />
                      <span>+62 817 654 111</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 3sm:mt-28 border-t border-creamPrimary'>
            <div className='mt-10 flex flex-col-reverse items-start lg:flex-row lg:items-center text-sm sm:text-base lg:gap-12'>
              <span>Sightsea Expeditions © 2025. All Rights Reserved.</span>
              <div className='flex flex-col 2xs:flex-row gap-4 2xs:gap-10 lg:gap-12 mb-4 lg:mb-0'>
                <Link href='/terms-conditions'>Terms & Conditions</Link>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};
