import { useEffect, useState } from 'react'

import type { QuestionMark } from '../model/clickOnName'

import style from './style.module.css'

interface Props {
  marks: QuestionMark[]
}

const QuestionMarks = ({ marks }: Props) => {
  const [removedMarks, setRemovedMarks] = useState<number[]>([])

  useEffect(() => {
    const timers = marks.map((mark) => {
      return setTimeout(() => {
        setRemovedMarks((prev) => [...prev, mark.id])
      }, 3000)
    })

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [marks])

  return (
    <>
      {marks
        .filter((mark) => !removedMarks.includes(mark.id))
        .map((mark) => (
          <span
            key={mark.id}
            className={style.question}
            style={{
              left: mark.x,
              top: mark.y,
              rotate: `${mark.rotate}deg`,
            }}
          >
            ?
          </span>
        ))}
    </>
  )
}

export default QuestionMarks
