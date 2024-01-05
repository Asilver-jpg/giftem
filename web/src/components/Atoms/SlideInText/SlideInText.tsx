import { useState } from 'react'

import styles from './slideInText.module.css'

interface SlideInTextProps {
  text: string[]
  rate?: number
}

export const SlideInText = ({ text, rate = 6000 }: SlideInTextProps) => {
  const [displayText, setDisplayText] = useState(0)

  const textInterval = setInterval(() => {
    let newText = displayText + 1
    if (newText > text.length - 1) {
      newText = 0
    }
    setDisplayText(newText)
    return clearInterval(textInterval)
  }, rate)

  return (
    <span className={`${styles.slideInText} ${styles.fadeInOut}`}>
      {text[displayText]}
    </span>
  )
}
