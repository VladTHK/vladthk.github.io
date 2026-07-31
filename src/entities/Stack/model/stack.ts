export interface StackItem {
  name: string
  description: string
}

export interface StackCategory {
  title: string
  items: StackItem[]
}

export const stacks: StackCategory[] = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        description: 'Library for building modern user interfaces',
      },
      {
        name: 'TypeScript',
        description: 'JavaScript with static type checking',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
      },
    ],
  },

  {
    title: 'Backend',
    items: [
      {
        name: 'Node.js',
        description: 'JavaScript runtime environment',
      },
      {
        name: 'Express',
        description: 'Minimal web framework for Node.js',
      },
      {
        name: 'tRPC',
        description: 'End-to-end type-safe API framework',
      },
      {
        name: 'PostgreSQL',
        description: 'Powerful relational database',
      },
      {
        name: 'Python',
        description: 'Automation and backend scripting',
      },
    ],
  },

  {
    title: 'Tools & Platforms',
    items: [
      {
        name: 'Git',
        description: 'Version control system',
      },
      {
        name: 'Bun',
        description: 'Fast JavaScript runtime and toolkit',
      },
      {
        name: 'Vite',
        description: 'Lightning-fast frontend build tool',
      },
      {
        name: 'Docker',
        description: 'Containerization platform',
      },
      {
        name: 'Figma',
        description: 'Interface and prototype design',
      },
      {
        name: 'Obsidian',
        description: 'Knowledge management and note-taking',
      },
    ],
  },

  {
    title: 'Currently Learning',
    items: [
      {
        name: 'Rust',
        description: 'Systems programming language',
      },
      {
        name: 'Three.js',
        description: '3D graphics library for the web',
      },
      {
        name: 'WebGL',
        description: 'Low-level browser graphics API',
      },
      {
        name: 'CachyOS',
        description: 'Performance-focused Linux distribution',
      },
    ],
  },
]