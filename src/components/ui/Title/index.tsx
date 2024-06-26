import { TitleProp } from './types'

export default function Title({
  titleTop,
  titleMain,
}: TitleProp) {

  return (
    <>
      <h4 className='text-lg font-medium uppercase tracking-wider font-montserrat mb-1'>{titleTop}</h4>
      <h2 className='whitespace-pre-line leading-snug text-4xl font-bold tracking-tight'>{titleMain}</h2>
    </>
  )
};
