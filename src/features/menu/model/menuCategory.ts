export type MenuCategory = 'nav' | 'page' | 'theme' | 'fun' | 'link'

export const categoryTitles: Record<MenuCategory, string> = {
  nav: 'Navigate',
  page: 'Pages',
  link: 'Links',
  theme: 'Theme',
  fun: 'Fun',
}

export const categoryOrder: MenuCategory[] = ['nav', 'page', 'link', 'theme', 'fun']
