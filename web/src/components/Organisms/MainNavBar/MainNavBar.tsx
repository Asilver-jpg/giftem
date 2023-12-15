import { NavBar } from 'src/components/Molecules'
import { MainNavBarData } from 'src/data/MainNavBar/MainNavBarData'

export const MainNavBar = () => {
  return <NavBar navBarItemDetails={MainNavBarData.navBarItemDetails} />
}
