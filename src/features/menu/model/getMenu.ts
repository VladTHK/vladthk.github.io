
import gitIcon from '@/assets/icons/github.svg'
import resumeIcon from '@/assets/icons/journal-page.svg'
import projectsIcon from '@/assets/icons/laptop-dev-mode.svg'
import homeIcon from '@/assets/icons/home.svg'


export interface MenuItem {
  id: string
  title: string
  description: string
  icon: string
  action: MenuAction
}

export type MenuAction =
  | {
      type: "link"
      value: string
    }
  | {
      type: "download"
      value: string
    }
  | {
      type: "scroll"
      value: string
    }


export const menu: MenuItem[] = [
  {
    id: "home",
    title: "Home",
    description: "go to main page",
    icon: homeIcon,
    action: {
      type: "scroll",
      value: "home"
    }
  },
  {
    id: "github",
    title: "GitHub",
    description: "My github",
    icon: gitIcon,
    action: {
      type: "link",
      value: "https://github.com"
    }
  },

  {
    id: "resume",
    title: "Resume",
    description: "Download resume",
    icon: resumeIcon,
    action: {
      type: "download",
      value: "/resume.pdf"
    }
  },

  {
    id: "projects",
    title: "Projects",
    description: "My projects",
    icon: projectsIcon,
    action: {
      type: "scroll",
      value: "projects"
    }
  }
]