import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6';
import { CounterProp } from './types';

const Counter = ({ count, onChange }: CounterProp) => {
  
  const handleMinusClick = () => {
    if (count < 2) return;
    onChange(count - 1);
  };

  const handlePlusClick = () => {
    if (count > 8) return;
    onChange(count + 1);
  };

  return (
    <div className='flex justify-between gap-4 items-center'>
      <div>
        <label className='text-slate-600 font-medium opacity-70 text-sm'>No. of Guests</label>
      </div>
      <div className='flex gap-4 items-center'>
        <span onClick={handleMinusClick} className={count < 2 ? 'cursor-pointer opacity-20' : 'cursor-pointer'}>
          <FaCircleMinus size={24} />
        </span>
        <span className='h-5 w-5 border rounded-md flex items-center justify-center text-lg font-medium p-4'>{count}</span>
        <span onClick={handlePlusClick} className={count > 8 ? 'cursor-pointer opacity-20' : 'cursor-pointer'}>
          <FaCirclePlus size={24} />
        </span>
      </div>
    </div>
  );
};

export default Counter;
