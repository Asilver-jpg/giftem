export interface Message {
  words: string
  key: number
}

export class VoiceSynthesisQueue {
  messages: Message[]
  speaking: boolean
  constructor() {
    this.messages = []
    this.speaking = false
  }

  speak() {
    if (this.speaking === false && this.messages.length > 0) {
      this.speaking = true
      const synth = (window as any).speechSynthesis
      const message = this.messages.shift()
      console.log(this.messages)
      const utterance = new SpeechSynthesisUtterance(message.words)
      utterance.pitch = 1.4
      utterance.rate = 1
      synth.speak(utterance)
      utterance.onend = () => {
        this.speaking = true
      }
    }
  }

  addWords(message: Message) {
    this.messages.push(message)
  }
}
