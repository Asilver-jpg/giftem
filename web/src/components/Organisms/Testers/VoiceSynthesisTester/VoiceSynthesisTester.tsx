import { useState } from 'react'

import { Message } from 'src/classes/VoiceSynthesisQueue'
import { VoiceSynthesis } from 'src/components/Molecules/VoiceSynthesis'

export const VoiceSynthesisTester = () => {
  const [incomingMessage, setIncomingMessage] = useState('')
  const [key, setKey] = useState(0)
  const [userClicked, setUserClicked] = useState(false)

  function startTest() {
    setUserClicked(true)
    const word = setInterval(() => {
      setIncomingMessage(key % 2 === 0 ? 'Hey' : 'bye')
      setKey(key + 1)
      return word
    }, 1000)
  }

  const message: Message = {
    words: incomingMessage,
    key,
  }

  return (
    <div>
      <VoiceSynthesis userClicked={userClicked} message={message} />
      <button onClick={startTest}>START</button>
    </div>
  )
}
