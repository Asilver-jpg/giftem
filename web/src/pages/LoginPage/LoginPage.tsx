import { MetaTags } from '@redwoodjs/web'

import { Button } from 'src/components'
import { authenticate } from 'src/functions'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.tsx</code>
      </p>
      <p>
        <Button text="Log In" type={'.fullButton'} onClick={authenticate} />
      </p>
    </>
  )
}

export default LoginPage
