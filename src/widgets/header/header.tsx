import menuIcon from '@/assets/icons/menu.svg'
import style from './style.module.css'

interface HeaderProps {
  onMenuClick: () => void
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <nav className={style.nav}>
      <a href="#home" className={style.logo}>
        THK
      </a>
      <button className={style.menu} onClick={onMenuClick}>
        <img src={menuIcon} alt="menu" />
        <p>menu (ctrl + k) </p>
      </button>
    </nav>
  )
}

export default Header
