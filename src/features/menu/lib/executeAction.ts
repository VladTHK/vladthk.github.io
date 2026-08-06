import type { MenuAction } from '../model/getMenu'

export const executeAction = (action: MenuAction) => {
  switch (action.type) {
    case 'link': {
      window.open(action.value, '_blank')
      break
    }
    case 'download': {
      const link = document.createElement('a')

      link.href = action.value
      link.download = ''

      document.body.appendChild(link)

      link.click()

      document.body.removeChild(link)

      break
    }

    case 'scroll': {
      document.getElementById(action.value)?.scrollIntoView({
        behavior: 'smooth',
      })

      break
    }
  }
}
