

export interface StackItem {
  icon: string
  name: string
  description: string
}

export type StackCategoryId = 'frontend' | 'backend' | 'tools' | 'learning'

export interface StackCategory {
  id: StackCategoryId
  title: string
  items: StackItem[]
}

export const stacks: StackCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      {
        icon: "react",
        name: 'React',
        description: 'Library for building modern user interfaces',
      },
      {
        icon: "ts",
        name: 'TypeScript',
        description: 'JavaScript with static type checking',
      },
      {
        icon: "tailwind",
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
      },
    ],
  },

  {
    id: 'backend',
    title: 'Backend',
    items: [
      {
        icon: "nodejs",
        name: 'Node.js',
        description: 'JavaScript runtime environment',
      },
      {
        icon: "express",
        name: 'Express',
        description: 'Minimal web framework for Node.js',
      },
      {
        icon: "postgres",
        name: 'PostgreSQL',
        description: 'Powerful relational database',
      },
      {
        icon: "python",
        name: 'Python',
        description: 'Automation and backend scripting',
      },
    ],
  },

  {
    id: 'tools',
    title: 'Tools & Platforms',
    items: [
      {
        icon: "git",
        name: 'Git',
        description: 'Version control system',
      },
      {
        icon: "bun",
        name: 'Bun',
        description: 'Fast JavaScript runtime and toolkit',
      },
      {
        icon: "vite",
        name: 'Vite',
        description: 'Lightning-fast frontend build tool',
      },
      {
        icon: "docker",
        name: 'Docker',
        description: 'Containerization platform',
      },
      {
        icon: "figma",
        name: 'Figma',
        description: 'Interface and prototype design',
      },
      {
        icon: "obsidian",
        name: 'Obsidian',
        description: 'Knowledge management and note-taking',
      },
    ],
  },

  {
    id: 'learning',
    title: 'Currently Learning',
    items: [
      {
        icon: "rust",
        name: 'Rust',
        description: 'Systems programming language',
      },
      {
        icon: "threejs",
        name: 'Three.js',
        description: '3D graphics library for the web',
      },
    ],
  },
]