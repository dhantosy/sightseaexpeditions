import Link from 'next/link';
import { Button } from '@/components/ui/Button';


export default function NotFoundPage() {
  return (
    <main className='mt-28 lg:mt-40'>
      <section className='relative container my-10 lg:my-12 px-4 lg:px-8'>
        <div className='max-w-4xl mx-auto my-20 text-center'>
          <div className='text-6xl font-montserrat uppercase font-semibold'>404</div>
          <div className='text-4xl font-semibold mt-3 mb-6'>Page Not Found</div>
          <Link href='/' className='w-40 m-auto block'>
            <Button type='button' variant='secondary' size='sm' className='w-full'>
              Back to Home
            </Button>
          </Link>
        </div>
        </section>
    </main>
  )
};
