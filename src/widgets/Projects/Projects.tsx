import { Button } from "@/shared/Button/Button"

import gitHubIcon from '@/assets/icons/github.svg'
import style from "./style.module.css"
import ProjectsBlock from "@/entities/Project/ProjectsBlock"

const Projects = () => {
  return (
    <div id="projects" className={style.block}>
      <div className={style.top}>
        <div className={style.title}>
          <h1>Projects</h1>
          <p>Things I've built and shipped</p>
        </div>

        <Button
          onClick={() => window.open('https://github.com/VladTHK', '_blank')}
          className={style.gitButton}
        >
          <img src={gitHubIcon} alt="GitHub" />
          View all on GitHub
        </Button>

      </div>
      <br />

      <ProjectsBlock/>

    </div>
  )
}

export default Projects