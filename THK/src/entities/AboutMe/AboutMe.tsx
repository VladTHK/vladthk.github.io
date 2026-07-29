import { Button } from '@/shared/Buttons/button'
import style from './style.module.css'

import resumeIcon from '@/assets/icons/journal-page.svg'

const AboutMe = () => {
  return (
    <div>
      <div className={style.leftBlock}>
        <img src="" alt="" />
        <div>
          <Button>
            <img src={resumeIcon} alt="resume" />
            <span>Resume</span>
          </Button>
        </div>
        
      </div>
      <div className={style.description}>
        <h2>About me</h2>
        <p>
          I'm Vlad — a full-stack developer focused on React, TypeScript and modern web technologies.
          Currently studying web application development while continuously building personal projects and improving my engineering skills.
          I like creating clean interfaces, solving complex problems and learning through practice.
          Open to interesting collaborations.
        </p>
      </div>
    </div>
  )
}

export default AboutMe