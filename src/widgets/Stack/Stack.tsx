import { Button } from "@/shared/Button/Button"

import WakaIcon from '@/assets/icons/medal1st.svg'
import style from "./style.module.css"
import StackBlock from "@/entities/Stack/StackBlock"

const Stack = () => {
  return (
    <div id="stack" className={style.block}>
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
          <img src={WakaIcon} alt="WakaTime" />
          Check my WakaTime
        </Button>

      </div>
      <br />

      <StackBlock/>

    </div>
  )
}

export default Stack