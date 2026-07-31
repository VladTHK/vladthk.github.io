import { useState } from 'react'
import {Button} from '@/shared/Button/Button'
import { projects } from '@/entities/Project/model/projects'


import gitIcon from '@/assets/icons/github.svg'
import devIcon from '@/assets/icons/laptop-dev-mode.svg'
import style from './style.module.css'

const ProjectsBlock = () => {
  const [activeProject, setActiveProject] = useState(0)

  const project = projects[activeProject]


  return (
    <div className={style.wrapper}>

      <div className={style.preview}>

        <div className={style.bigScreen}>
          <img 
            src={project.image}
            alt={project.title}
          />
        </div>


        <div className={style.slider}>

          <ul>
            {
              projects.map((item, index) => (
                <li
                  key={item.title}
                  onClick={() => setActiveProject(index)}
                >
                  <img src={item.image} alt={item.title}/>
                </li>
              ))
            }
          </ul>

        </div>

      </div>



      <div className={style.description}>

        <h1>
          {project.title}
          <span>{project.year}</span>
        </h1>


        <p className={style.shortDescription}>
          {project.shortDescription}
        </p>


        <p className={style.mainDescription}>
          {project.description}
        </p>
        <br/>
        


        <div className={style.tags}>
          {
            project.tags.map(tag => (
              <span key={tag}>
                {tag}
              </span>
            ))
          }
        </div>


        <div className={style.buttons}>

          <Button
            onClick={() => window.open(project.github)}
          >
            <img src={gitIcon} alt="icon" />
            GitHub
          </Button>

          <Button
            onClick={() => window.open(project.demo)}
            className={style.accentButton}
          >
            <img src={devIcon} alt="icon" />
            Demo
          </Button>

        </div>

      </div>

    </div>
  )
}


export default ProjectsBlock