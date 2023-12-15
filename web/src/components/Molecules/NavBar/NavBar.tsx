import { Button, ButtonProps } from 'src/components/Atoms'

import styles from './navBar.module.css'
export interface NavBarProps {
  navBarItemDetails: [ButtonProps]
}

export const NavBar = ({ navBarItemDetails }: NavBarProps) => {
  return (
    <nav className={styles.nav}>
      {navBarItemDetails.map((detail, index) => {
        return (
          <Button
            key={index}
            text={detail.text}
            type={detail.type}
            link={detail.link}
          />
        )
      })}
    </nav>
  )
}
