import { NavBarProps } from 'src/components'
import { logOut } from 'src/functions'

export const MainNavBarLogedOutData: NavBarProps = {
  navBarItemDetails: [
    {
      text: 'Home',
      type: '.nav',
      link: '/home',
    },
    {
      text: 'Log In',
      type: '.endNav',
      link: '/log-in',
    },
    {
      text: 'Sign Up',
      type: '.endNav',
      link: '/sign-up',
    },
  ],
}

export const MainNavBarLoggedInData: NavBarProps = {
  navBarItemDetails: [
    {
      text: 'Home',
      type: '.nav',
      link: '/home',
    },
    {
      text: ' Lists',
      type: '.nav',
      link: '/lists',
    },
    {
      text: 'Friends',
      type: '.nav',
      link: '/friends',
    },
    {
      text: 'Log Out',
      type: '.endNav',
      onClick: logOut,
    },
  ],
}
