import clickSound from '@/assets/sounds/hmm.mp3'

export interface QuestionMark {
  id: number
  x: number
  y: number
  rotate: number
}

const sound = new Audio(clickSound)

export const createQuestionMark = (event: React.MouseEvent<HTMLHeadingElement>): QuestionMark => {
  sound.currentTime = 0
  sound.play()

  const rect = event.currentTarget.getBoundingClientRect()

  return {
    id: Date.now(),

    x: event.clientX - rect.left,

    y: event.clientY - rect.top,

    rotate: Math.random() * 60 - 30,
  }
}
