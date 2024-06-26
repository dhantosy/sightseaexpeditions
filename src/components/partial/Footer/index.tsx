import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa6";
import LogoBlue from '@public/assets/images/sightsea-expeditions-logo-blue.jpg';

export default function Footer() {

  return (
    <footer className='relative z-10 text-white mt-16 overflow-hidden border-x-[18px] border-x-white lg:border-x-[32px]'>
      <div className='bg-bluePrimary px-10 pb-5 pt-8 mt-10 rounded-t-2xl overflow-hidden'>
        <div className='container py-5 px-4 lg:px-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <Link href='/' className='py-4' aria-label='go to home page'>
                <Image
                  src={LogoBlue}
                  alt='trip by the sea logo'
                  width={200}
                  height={83}
                  sizes='(max-width: 768px) 208px, 350px'
                  priority
                />
              </Link>
            </div>
            <div className='flex gap-28'>
              <div>
                <h6 className='font-bold font-montserrat text-xl uppercase mb-4'>Explore</h6>
                <div className='flex flex-col gap-3'>
                  <Link href='/' className='opacity-80'>
                    Diving Trips
                  </Link>
                  <Link href='/' className='opacity-80'>
                    Liveaboard
                  </Link>
                  <Link href='/' className='opacity-80'>
                    Tours & Experience
                  </Link>
                  <Link href='/' className='opacity-80'>
                    Dive Centers
                  </Link>
                </div>
              </div>
              <div>
                <h6 className='font-bold font-montserrat text-xl uppercase mb-4'>Contact</h6>
                <div>
                  <address className='opacity-80 not-italic mb-6 whitespace-pre-line'>
                    {`Jl. Plawa, Gg. Melati No.18, Seminyak,
                      Kec. Kuta, Kabupaten Badung, Bali 80361
                    `}
                  </address>
                  <div className='flex flex-col gap-2'>
                    <a href='https://www.instagram.com/sightsea/' target='_blank' aria-label='Go to Sightsea Expeditions instagram account' className='opacity-80 flex items-center gap-2'>
                      <FaInstagram />
                      <span>sightsea</span>
                    </a>
                    <a href='mailto:admin@sightseaexpeditions.com' className='opacity-80 flex items-center gap-2'>
                      <FaEnvelope />
                      <span>admin@sightseaexpeditions.com</span>
                    </a>
                    <a href='tel:+62811301031' className='opacity-80 flex items-center gap-2'>
                      <FaPhone />
                      <span>+62 811 301 031</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-28 border-t border-creamPrimary'>
            <div className='mt-10 flex items-center justify-between'>
              <span>Sightsea Expeditions © 2024. All Rights Reserved.</span>
              <div className='flex gap-6'>
                <Link href='/'>
                  Terms & Conditions
                </Link>
                <Link href='/'>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};
