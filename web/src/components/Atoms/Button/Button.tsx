/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from '@redwoodjs/router'

import styles from './Button.module.css'

const ButtonNames = {
  NAV: '.nav',
  FULL: '.fullButton',
  SMALL: '.small',
  ENDNAV: '.endNav',
} as const

export type ButtonTypes = (typeof ButtonNames)[keyof typeof ButtonNames]

interface ButtonPropsClick {
  link?: never
  text: string
  type: ButtonTypes
  onClick: (param?: unknown) => void
}

interface ButtonPropsLink {
  link: string
  text: string
  type: ButtonTypes | ButtonTypes[]
  onClick?: never
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
