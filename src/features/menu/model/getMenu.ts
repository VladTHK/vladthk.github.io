import gitIcon from '@/assets/icons/github.svg'
import resumeIcon from '@/assets/icons/journal-page.svg'
import projectsIcon from '@/assets/icons/laptop-dev-mode.svg'
import homeIcon from '@/assets/icons/home.svg'
import stackIcon from '@/assets/icons/stack.svg'
import contactsIcon from '@/assets/icons/bubble-income.svg'

import type { MenuCategory } from './menuCategory'

export interface MenuItem {
  id: string
  title: string
  description: string
  icon: string
  action: MenuAction
  category: MenuCategory
}

export type MenuAction =
  | {
      type: 'link'
      value: string
    }
  | {
      type: 'download'
      value: string
    }
  | {
      type: 'scroll'
      value: string
    }

export const menu: MenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'go to main page',
    icon: homeIcon,
    action: {
      type: 'scroll',
      value: 'home',
    },
    category: 'nav',
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'My projects',
    icon: projectsIcon,
    action: {
      type: 'scroll',
      value: 'projects',
    },
    category: 'nav',
  },
  {
    id: 'stack',
    title: 'Stack',
    description: 'Tech I use',
    icon: stackIcon,
    action: {
      type: 'scroll',
      value: 'stack',
    },
    category: 'nav',
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: "Let's build something together.",
    icon: contactsIcon,
    action: {
      type: 'scroll',
      value: 'contacts',
    },
    category: 'nav',
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'My github',
    icon: gitIcon,
    action: {
      type: 'link',
      value: 'https://github.com',
    },
    category: 'link',
  },

  {
    id: 'resume',
    title: 'Resume',
    description: 'Download resume',
    icon: resumeIcon,
    action: {
      type: 'download',
      value: '/resume.pdf',
    },
    category: 'link',
  },
]
