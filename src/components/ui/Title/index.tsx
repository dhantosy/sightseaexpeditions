import { TitleProp } from './types'

export default function Title({
  titleTop,
  titleMain,
}: TitleProp) {

  return (
    <>
      <h4 className='text-sm md:text-lg font-medium uppercase tracking-wider font-montserrat mb-1'>{titleTop}</h4>
      <h2 className='whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight'>{titleMain}</h2>
    </>
  )
};
