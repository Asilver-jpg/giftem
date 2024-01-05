import { useEffect, useState } from 'react'

interface Result {
  results: Results[][]
  resultIndex: number
}

interface Results {
  transcript: string
  isFinal: boolean
}

export const VoiceRecognition = () => {
  const [finalTranscript, setFinalTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  useEffect(() => {
    getSpeech()
  }, [])

  const getSpeech = () => {
    const SpeechRec =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).SpeechRecognition ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitSpeechRecognition

    const recognition = new SpeechRec()

    recognition.onstart = () => {
      console.log('ya')
    }

    recognition.onspeechend = () => {
      console.log('no')
      recognition.stop()
    }

    recognition.onresult = (result: Result) => {
      const vocalInput = result.results[0][0].transcript
      console.log(vocalInput)
      for (let i = result.resultIndex; i < result.results.length; i++) {
        const transcript = result.results[i][0].transcript
        // might just be results[i]
        if (result.results[i][0].isFinal) {
          setFinalTranscript(finalTranscript + transcript)
        } else {
          setInterimTranscript(interimTranscript + transcript)
        }
      }
    }

    recognition.start()
  }

  return (
    <div>
      <div>{finalTranscript}</div>
      <div>{interimTranscript}</div>
    </div>
  )
}
