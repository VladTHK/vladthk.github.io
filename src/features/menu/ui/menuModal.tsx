import Menu from "./Menu"
import style from "./style.module.css"
import type { MenuItem } from "../model/getMenu"


interface MenuModalProps {
  onClose: () => void
  items: MenuItem[]
}


const MenuModal = ({
  onClose,
  items
}: MenuModalProps) => {

  return (

    <div 
      className={style.overlay}
      onClick={onClose}
    >

      <div 
        className={style.modal}
        onClick={(e)=> e.stopPropagation()}
      >

        <Menu
          items={items}
          onClose={onClose}  
        />

      </div>

    </div>

  )
}


export default MenuModal