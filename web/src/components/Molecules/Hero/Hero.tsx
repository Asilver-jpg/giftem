import { SlideInText } from 'src/components/Atoms/SlideInText'

interface HeroProps {
  text: string
  slidingText?: string[]
}

export const Hero = ({ text, slidingText }: HeroProps) => {
  return (
    <div>
      <h1>
        {text}
        {slidingText && <SlideInText text={slidingText} />}
      </h1>
    </div>
  )
}
