import { useEffect } from 'react'

import { Message, VoiceSynthesisQueue } from 'src/classes/VoiceSynthesisQueue'
import { usePrevious } from 'src/functions/hooks/usePrevious'

type VoiceSynthesisProps = {
  message: Message
  userClicked: boolean
  children?: React.ReactNode
}

export const VoiceSynthesis = ({
  message,
  userClicked,
  children,
}: VoiceSynthesisProps) => {
  const queue = new VoiceSynthesisQueue()
  const prevMessageKey = usePrevious(message.key)
  useEffect(() => {
    if (message.key != prevMessageKey) {
      queue.addWords(message)
    }
  }, [message, prevMessageKey, queue])

  useEffect(() => {
    if (!queue.speaking && userClicked) {
      queue.speak()
    }
  }, [queue, userClicked, message])

  return <div>{children}</div>
}
