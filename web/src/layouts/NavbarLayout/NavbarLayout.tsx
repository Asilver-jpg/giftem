import { MainNavBar } from 'src/components'

type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <header>
        <MainNavBar />
      </header>
      <main>ß{children}</main>
    </>
  )
}

export default NavbarLayout
