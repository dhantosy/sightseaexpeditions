import { Button } from '@/components/ui/Button';
import { StickyBookingBtnSubmitProp } from './types';

export default function StickyBookingBtnSubmit({
  whatsappLink,
  available
}: StickyBookingBtnSubmitProp) {

  return (
    <div>
      {available ? (
        <>
          <Button type='submit' size='md' className='min-w-40 w-full mb-4'>
            Book Now
          </Button>
          <a href={whatsappLink} target='_blank'>
            <Button type='button' variant='outline' size='md' className='min-w-40 w-full'>
              Book via WhatsApp
            </Button>
          </a>
        </>
      ) : (
          <Button variant='destructive' disabled size='md' className='min-w-40 w-full mb-4'>
            Fully Booked
          </Button>
      )}
    </div>
  )
};
