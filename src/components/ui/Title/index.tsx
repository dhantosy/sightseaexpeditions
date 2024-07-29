import { TitleProp } from './types'

export default function Title({
  titleTop,
  titleMain,
  tagMain,
}: TitleProp) {

  return (
    <>
      {titleTop ? (
        <p className='block text-sm md:text-base font-medium uppercase tracking-wider font-montserrat mb-1'>{titleTop}</p>
      ) : null}
      {tagMain ? (
        <h1 className='whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>{titleMain}</h1>
      ) : (
        <h2 className='whitespace-pre-line leading-tight md:leading-snug text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>{titleMain}</h2>
      )}
    </>
  )
};
