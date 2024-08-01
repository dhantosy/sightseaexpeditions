import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FaCircleCheck } from 'react-icons/fa6';

export default function BookingSuccessPage() {

  return (
    <main className='mt-20 lg:mt-32 relative'>
      <div className='absolute inset-x-0 top-80 min-h-0 pl-20 py-24 flex overflow-hidden z-0 justify-end'>
        <span className='block -ml-20 bg-orange-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
      </div>
      <div className='hidden md:flex absolute inset-x-0 top-0 min-h-0 pl-20 py-24 overflow-hidden z-0'>
        <span className='block ml-0 bg-sky-200 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:w-96 lg:h-96' />
      </div>
      <section className='container my-4 lg:my-20 px-4 lg:px-8 relative z-10'>
        <div className='relative flex flex-wrap flex-col lg:flex-row -mx-4 items-center'>
          <div className='basis-full lg:basis-7/12 px-4 grow-0 mt-4 mb-2 lg:mt-0 mx-auto'>
            <div className='text-center rounded-3xl bg-white border overflow-hidden px-4 lg:px-8 py-10 lg:py-16 mt-4 lg:mt-6'>
              <FaCircleCheck size={50} className='m-auto' />
              <h1 className='text-xl lg:text-2xl mb-4 mt-6 font-semibold'>Your Booking was Submitted Successfully!</h1>
              <div className='flex'>
                <div className='flex flex-col gap-2 basis-full lg:basis-10/12 m-auto'>
                  <p>Thank you for choosing us as your trusted adventure partner. We`re truly grateful and hope you`ll have a fantastic experience with us.</p>
                  <p>Our team will get back to you as soon as possible.</p>
                </div>
              </div>
              <Link href='/' className='w-40 mt-8 mx-auto block'>
                <Button type='button' variant='secondary' size='sm' className='w-full'>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};
