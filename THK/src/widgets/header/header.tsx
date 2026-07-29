
import menuIcon from '@/assets/icons/menu.svg'
import style from './style.module.css'

const header = () => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        THK
      </div>
      <div className={style.menu}>
        <img src={menuIcon} alt="menu" />
        <p>menu (ctrl + k) </p>
      </div>
    </nav>
  )
}

export default header