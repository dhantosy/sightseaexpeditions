import { Button } from '@/components/ui/Button';
import { StickyPriceInfoProp } from './types';

export default function StickyPriceInfo({
  priceStartFrom,
  totalPrice,
  currency,
  priceUnit,
  title,
  onButtonclick,
  btnText,
  available,
}: StickyPriceInfoProp) {

  return (
    <div className='fixed w-full px-4 py-3 top-20 bg-white z-20 rounded-b-3xl shadow-lg block lg:hidden'>
      <div className='flex flex-col 2xs:flex-row justify-between 2xs:items-end gap-2'>
        <div className='text-sm'>
          <div className='opacity-70 mb-1 line-clamp-1'>{title}</div>
          {available && (
            <div className='flex gap-1'>
              {priceStartFrom && <div className='opacity-70 shrink-0 grow-0'>from</div>}
              <div className='font-semibold shrink-0 grow-0'>{`${currency ? currency : ''} ${totalPrice}`}</div>
              <div className='opacity-70 shrink-0 grow-0'>{priceUnit}</div>
            </div>
          )}
        </div>
        {available ? (
          <Button
            type='button'
            size='sm'
            className='mt-2 2xs:mt-0 2xs:min-w-28 2sm:min-w-32'
            onClick={onButtonclick}
          >
            {btnText}
          </Button>
        ) : (
            <Button
              variant='destructive'
              disabled
              size='sm'
              className='mt-2 2xs:mt-0 2xs:min-w-28 2sm:min-w-32'
            >
              Fully Booked
            </Button>
        )}
      </div>
    </div>
  )
};
