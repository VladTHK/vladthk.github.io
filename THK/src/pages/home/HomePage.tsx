import Header from '@/widgets/header/header'
import Hero from '@/widgets/hero/hero'
import Projects from '@/widgets/Projects/Projects'
import Stack from '@/widgets/Stack/Stack'

import style from "./style.module.css"
import Contacts from '@/widgets/Contacts/Contacts'

const HomePage = () => {
  return (
    <div>
      <div className={style.header}>
        <Header/>
      </div>
      <div className={style.container}>
        <div className={style.wrapper}>
          <Hero/>
          <Projects/>
          <Stack/>
          <Contacts/>
        </div>
      </div>
    </div>
  )
}

export default HomePage