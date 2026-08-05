
import menuIcon from '@/assets/icons/menu.svg'
import style from './style.module.css'


interface HeaderProps {
    onMenuClick: () => void
}

const Header = ({onMenuClick}: HeaderProps) => {
 


  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        THK
      </div>
      <button
        className={style.menu}
        onClick={onMenuClick}
      >
        <img src={menuIcon} alt="menu" />
        <p>menu (ctrl + k) </p>
      </button>
    </nav>
  )
}

export default Header