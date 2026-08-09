import { Button } from '@/shared/Button/Button'
import { executeAction } from '@/features/menu/lib/executeAction'

import style from './style.module.css'

import resumeIcon from '@/assets/icons/journal-page.svg'
import gitHubIcon from '@/assets/icons/github.svg'
import laptopIcon from '@/assets/icons/laptop-dev-mode.svg'
import bubbleIcon from '@/assets/icons/bubble-income.svg'
import headImg from '@/assets/images/bhead_thk.gif'

const buttons = [
  {
    id: 'resume',
    title: 'Resume',
    icon: resumeIcon,
    action: {
      type: 'download',
      value: '/resume.pdf',
    },
  },
  {
    id: 'contacts',
    title: 'Contacts',
    icon: bubbleIcon,
    action: {
      type: 'scroll',
      value: 'contacts',
    },
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: laptopIcon,
    action: {
      type: 'scroll',
      value: 'projects',
    },
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: gitHubIcon,
    action: {
      type: 'link',
      value: 'https://github.com/VladTHK',
    },
  },
] as const

const AboutMe = () => {
  return (
    <div className={style.aboutMe}>
      <div className={style.leftBlock}>
        <img src={headImg} alt="Head" />
        <div className={style.buttons}>
          {buttons.map((button) => (
            <Button
              key={button.id}
              onClick={() => executeAction(button.action)}
            >
              <img
                src={button.icon}
                alt={button.title}
              />

              <span>
                {button.title}
              </span>
            </Button>
          ))}
        </div>
      </div>
      <div className={style.description}>
        <h2>About me</h2>
        <br />
        <p>I'm Vlad — a full-stack developer focused on React, TypeScript and modern web technologies.</p>
        <br />
        <p>
          Currently studying web application development while continuously building personal projects and improving my
          engineering skills.
        </p>
        <br />
        <p>I like creating clean interfaces, solving complex problems and learning through practice.</p>
        <br />
        <p>Open to interesting collaborations.</p>
      </div>
    </div>
  )
}

export default AboutMe
