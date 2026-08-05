import type { MenuItem } from "../model/getMenu"
import { executeAction } from "../lib/executeAction"
import style from "./Menu.module.css"
import searchIcon from "@/assets/icons/search.svg"


interface MenuProps {
  items: MenuItem[]
  onClose: () => void
}

const Menu = ({items, onClose}: MenuProps) => {



  return (
    <div className={style.wrapper}>
      <div className={style.menu}>
        <div className={style.header}>
          <div className={style.search}>
            <img src={searchIcon} alt="→" />
            <input 
              type="search"
              placeholder="Where to? "
              autoFocus
            />
          </div>
        </div>

        <div className={style.nav}>
          <span>NAVIGATE</span>
          <ul>
            {
              items.map((item) => (
                <li
                  key={item.id}
                  onClick={() => 
                    {
                      executeAction(item.action)
                      onClose()
                    }
                  }
                >
                  <img src={item.icon} alt="" />
                  <p>  
                    {item.title}
                  </p>
                  <span>
                    - {item.description}.
                  </span>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={style.footer}>
            <ul>
              <li>
                <span> <kbd>⇅</kbd> navigate</span>
              </li>
              <li>
                <span> <kbd>◉</kbd> select</span>
              </li>
              <li>
                <span> <kbd>esc</kbd> close</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu