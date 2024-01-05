export function voiceSynthesis(
  words: string,
  fnc: React.Dispatch<React.SetStateAction<boolean>>
) {
  fnc(true)
  const synth = (window as any).speechSynthesis
  const utterance = new SpeechSynthesisUtterance(words)
  utterance.pitch = 1.4
  utterance.rate = 1
  synth.speak(utterance)

  utterance.onend = () => {
    fnc(false)
  }
}
