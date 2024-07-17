import { Button } from '@/components/ui/Button';
import { StickyBookingBtnSubmitProp } from './types';

export default function StickyBookingBtnSubmit({
  whatsappLink
}: StickyBookingBtnSubmitProp) {

  return (
    <div>
      <Button type='submit' size='md' className='min-w-40 w-full mb-4'>
        Book Now
      </Button>
      <a href={whatsappLink} target='_blank'>
        <Button type='button' variant='outline' size='md' className='min-w-40 w-full'>
          Book via WhatsApp
        </Button>
      </a>
    </div>
  )
};
