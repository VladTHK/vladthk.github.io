import { useState } from 'react'

import AboutMe from '@/entities/AboutMe/AboutMe'

import { createQuestionMark, QuestionMarks, type QuestionMark } from '@/features/clickOnName'

import style from './style.module.css'

const Hero = () => {
  const [marks, setMarks] = useState<QuestionMark[]>([])

  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const mark = createQuestionMark(event)

    setMarks((prev) => [...prev.slice(-15), mark])
  }

  return (
    <div id="home" className={style.hero}>
      <div className={style.title}>
        <h1 onClick={handleClick}>Vlad.THK</h1>

        <QuestionMarks marks={marks} />

        <h2>Frontend Developer</h2>
      </div>

      <div className={style.aboutMe}>
        <AboutMe />
      </div>
    </div>
  )
}

export default Hero
