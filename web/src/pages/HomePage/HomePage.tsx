import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { VoiceRecognition } from 'src/components/Molecules/VoiceRecognition'
import { MainHero } from 'src/components/Organisms/MainHero/MainHero'
import { VoiceSynthesisTester } from 'src/components/Organisms/Testers/VoiceSynthesisTester'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <VoiceRecognition />
      <VoiceSynthesisTester />
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        <Link to={routes.login()}>LOGOUT</Link>`
      </p>
      <MainHero />
    </>
  )
}

export default HomePage
