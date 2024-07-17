import { Button } from '@/components/ui/Button';
import { StickyPriceInfoProp } from './types';

export default function StickyPriceInfo({
  totalPrice,
  priceUnit,
  title,
  onButtonclick,
  btnText,
}: StickyPriceInfoProp) {

  return (
    <div className='fixed w-full px-4 py-3 top-20 bg-white z-20 rounded-b-3xl shadow-lg block lg:hidden'>
      <div className='flex flex-col 2xs:flex-row justify-between 2xs:items-end gap-2'>
        <div className='text-sm'>
          <div className='opacity-70 mb-1 line-clamp-1'>{title}</div>
          <div className='flex gap-2'>
            <div className='font-semibold'>{`IDR ${totalPrice}`}</div>
            <div className='opacity-70'>{priceUnit}</div>
          </div>
        </div>
        <Button
          type='button'
          size='sm'
          className='mt-2 2xs:mt-0 2xs:min-w-28 2sm:min-w-32'
          onClick={onButtonclick}
        >
          {btnText}
        </Button>
      </div>
    </div>
  )
};
