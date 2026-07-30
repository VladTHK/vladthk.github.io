import { Button } from '@/shared/Buttons/Button'
import style from './style.module.css'

import resumeIcon from '@/assets/icons/journal-page.svg'
import gitHubIcon from '@/assets/icons/github.svg'
import bubbleIcon from '@/assets/icons/bubble-income.svg'
import laptopIcon from '@/assets/icons/laptop-dev-mode.svg'
import headImg from '@/assets/images/bhead_thk.gif'

const AboutMe = () => {
  return (
    <div className={style.aboutMe}>
      <div className={style.leftBlock}>
        <img src={headImg} alt="Head" />
        <div className={style.buttons}>
          <Button>
            <img src={resumeIcon} alt="resume" />
            <span>Resume</span>
          </Button>
          <Button>
            <img src={bubbleIcon} alt="contacts" />
            <span>Contacts</span>
          </Button>
          <Button>
            <img src={laptopIcon} alt="projects" />
            <span>Projects</span>
          </Button>
          <Button
            onClick={() => window.open('https://github.com/VladTHK', '_blank')}
          >
            <img src={gitHubIcon} alt="GitHub" />
            <span>GitHub</span>
          </Button>
        </div>
        
      </div>
      <div className={style.description}>
        <h2>About me</h2>
        <br />
        <p>
          I'm Vlad — a full-stack developer focused on React, TypeScript and modern web technologies.
        </p>
        <br />
        <p>
          Currently studying web application development while continuously building personal projects and improving my engineering skills.
        </p>
        <br />
        <p>
          I like creating clean interfaces, solving complex problems and learning through practice.
        </p>
        <br />
        <p>
          Open to interesting collaborations.
        </p>
      </div>
    </div>
  )
}

export default AboutMe