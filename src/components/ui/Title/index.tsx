import { TitleProp } from './types'

export default function Title({
  titleTop,
  titleMain,
  tagMain,
}: TitleProp) {

  return (
    <>
      {titleTop ? (
        <h4 className='text-sm md:text-base font-medium uppercase tracking-wider font-montserrat mb-1'>{titleTop}</h4>
      ) : null}
      {tagMain ? (
        <h1 className='whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>{titleMain}</h1>
      ) : (
        <h2 className='whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>{titleMain}</h2>
      )}
    </>
  )
};
