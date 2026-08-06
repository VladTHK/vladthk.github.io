import Header from '@/widgets/header/header'
import Hero from '@/widgets/hero/hero'
import Projects from '@/widgets/Projects/Projects'
import Stack from '@/widgets/Stack/Stack'
import Contacts from '@/widgets/Contacts/Contacts'
import Footer from '@/widgets/Footer/Footer'
import MenuModal from '@/features/menu/ui/menuModal'

import { useState, useEffect } from 'react'
import { menu } from '@/features/menu/model/getMenu'

import style from './style.module.css'

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLocaleLowerCase() === 'k') {
        event.preventDefault()

        setIsMenuOpen((prev) => !prev)
      }
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleShortcut)

    return () => {
      window.removeEventListener('keydown', handleShortcut)
    }
  })

  return (
    <div>
      <div className={style.header}>
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        {isMenuOpen && <MenuModal items={menu} onClose={() => setIsMenuOpen(false)} />}
      </div>
      <div className={style.container}>
        <div className={style.wrapper}>
          <Hero />
          <Projects />
          <Stack />
          <Contacts />
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
