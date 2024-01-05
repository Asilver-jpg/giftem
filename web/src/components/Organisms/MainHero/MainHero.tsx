import { Hero } from 'src/components/Molecules/Hero'

export const MainHero = () => {
  const text = 'Lorem ipsum dolor sit amet,'
  const slide = ['risus', 'diam', 'vulputate']
  return <Hero text={text} slidingText={slide} />
}
