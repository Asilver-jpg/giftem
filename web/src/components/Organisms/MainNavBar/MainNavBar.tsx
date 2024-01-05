import { useSelector } from 'react-redux'

import { NavBar } from 'src/components/Molecules'
import {
  MainNavBarLogedOutData,
  MainNavBarLoggedInData,
} from 'src/data/MainNavBar/MainNavBarData'
import { RootState } from 'src/redux/store'

// Can either have sign up & sing in buttons if not logged in or log out button if logged in
export const MainNavBar = () => {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn)
  const buttons = loggedIn
    ? MainNavBarLoggedInData.navBarItemDetails
    : MainNavBarLogedOutData.navBarItemDetails

  return <NavBar navBarItemDetails={buttons} />
}
