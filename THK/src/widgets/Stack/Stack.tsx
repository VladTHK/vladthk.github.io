import { Button } from "@/shared/Button/Button"

import gitHubIcon from '@/assets/icons/github.svg'
import style from "./style.module.css"
import StackBlock from "@/entities/Stack/StackBlock"

const Stack = () => {
  return (
    <div className={style.block}>
      <div className={style.top}>
        <div className={style.title}>
          <h1>Tech I use</h1>
          <p>A collection of technologies, tools and platforms</p>
          <p>I use to build modern web applications.</p>
        </div>

        <Button
          onClick={() => window.open('https://wakatime.com/@VladTHK', '_blank')}
          className={style.gitButton}
        >
          <img src={gitHubIcon} alt="GitHub" />
          Check my WakaTime
        </Button>

      </div>
      <br />

      <StackBlock/>

    </div>
  )
}

export default Stack