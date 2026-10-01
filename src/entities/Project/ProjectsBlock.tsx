
import { projects } from '@/entities/Project/model/projects'


import style from './style.module.css'
import gitHubIcon from '@/assets/icons/github.svg'
import demoIcon from '@/assets/icons/laptop-dev-mode.svg'
import { Button } from '@/shared/Button/Button'


const ProjectsBlock = () => {
  const projectSlots = 6
  const projectItems = [
    ...projects,
    ...Array.from({ length: Math.max(0, projectSlots - projects.length) }, () => ({ placeholder: true as const })),
  ]

  return (
    <div className={style.wrapper}>
      <div className="">
        <ul className={style.projects}>
          {projectItems.map((project, index) => (
            <li
              className={`${style.project} ${'placeholder' in project ? style.placeholder : ''}`}
              key={index}
            >
              {'placeholder' in project ? (
                <span>Проект ещё не начат</span>
              ) : (
                <>
                  <img src={project.image} alt="" />
                  <div className={style.projectInfo}>
                <div className={style.title}>
                  <div className={style.shortInfo}>
                    <h2>{project.title}</h2>
                    <p>{project.shortDescription}</p>
                  </div>
                  <span className={style.progress}>{project.progress}</span>
                </div>
                <div className={style.description}>
                  <p>{project.description}</p>
                </div>
                <ul className={style.tags}>
                  {project.tags.map((tag, index) => (
                    <li className={style.tag} key={index}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
                <div className={style.buttons}>
                  <Button className={style.secondaryButton}
                    onClick={() => window.open(project.github)}
                  >
                    <img src={gitHubIcon} alt="" />
                    GitHub
                  </Button>
                  <Button className={style.mainButton}
                    onClick={() => window.open(project.demo)}
                  >
                    <img src={demoIcon} alt="" />                    
                    Demo
                  </Button>
                </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default ProjectsBlock