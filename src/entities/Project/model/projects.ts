export interface Project {
  title: string
  year: string
  shortDescription: string
  description: string
  image: string
  screenshots: string[]
  tags: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'CutLink',
    year: '2026',
    shortDescription:
      'Сервис для сокращения ссылок.',
    description:
      'Бесплатный сервис для сокращения ссылок с аналитикой переходов, безопастностью и удобным интерфейсом. Поддерживются кастомные алиасы.',
    image: './img/cutlinkView.png',
    screenshots: [
      './img/cutlinkView.png',
    ],
    tags: [
      'React',
      'JavaScript',
      'React Query',
      'Zustand'
    ],
    github: 'https://github.com/',
    demo: 'https://thk.c6t.ru/CutLink/'
  }
]