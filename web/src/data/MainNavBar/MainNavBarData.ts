import { routes } from '@redwoodjs/router'

import { NavBarProps } from 'src/components'
import { ButtonTypes } from 'src/enums/ButtonTypes'

export const MainNavBarData: NavBarProps = {
  navBarItemDetails: [
    {
      text: 'Home',
      type: ButtonTypes.NAV,
      link: '/home',
    },
  ],
}
