/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from '@redwoodjs/router'

import { ButtonTypes } from 'src/enums/ButtonTypes'

import styles from './Button.module.css'

interface ButtonPropsLink {
  link: string
  text: string
  type: ButtonTypes | ButtonTypes[]
  onClick?: never
}

interface ButtonPropsClick {
  link?: never
  text: string
  type: ButtonTypes | ButtonTypes[]
  onClick: (param?: any) => void
}

export type ButtonProps = ButtonPropsClick | ButtonPropsLink

export const Button = ({ onClick, text, type, link }: ButtonProps) => {
  const isLink = typeof link != undefined ? true : false

  return (
    <div className={styles[`${type}`]} onClick={!isLink && onClick}>
      {isLink ? <Link to={link}>{text}</Link> : <p>{text}</p>}
    </div>
  )
}
