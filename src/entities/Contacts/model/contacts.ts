import GithubIcon from '@/assets/icons/github.svg'
import TelegramIcon from '@/assets/icons/telegram.svg'
import MailIcon from '@/assets/icons/mail.svg'
import ResumeIcon from '@/assets/icons/journal-page.svg'

export const contacts = [
  {
    title: 'GitHub',
    description: 'Check my projects',
    info: '@VladTHK',
    icon: GithubIcon,
    link: 'https://github.com/VladTHK',
    style: 'github',
  },

  {
    title: 'Telegram',
    description: 'Quick chat',
    info: '@VladTHK',
    icon: TelegramIcon,
    link: 'https://t.me/VladTHK',
    style: 'telegram',
  },

  {
    title: 'Mail',
    description: 'Business',
    info: 'starinkov2020@mail.ru',
    icon: MailIcon,
    link: 'mailto:your@email.com',
    style: 'mail',
  },

  {
    title: 'Resume',
    description: 'Download CV',
    info: 'resume_2026',
    icon: ResumeIcon,
    link: '/resume.pdf',
    style: 'resume',
  },
]
