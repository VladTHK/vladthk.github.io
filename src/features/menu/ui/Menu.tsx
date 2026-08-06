import { useMemo, useState } from 'react'

import type { MenuItem } from '../model/getMenu'
import { categoryOrder, categoryTitles } from '../model/menuCategory'

import { executeAction } from '../lib/executeAction'

import style from './Menu.module.css'

import searchIcon from '@/assets/icons/search.svg'

interface MenuProps {
  items: MenuItem[]
  onClose: () => void
}

const Menu = ({ items, onClose }: MenuProps) => {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase()

    if (!search) {
      return items
    }

    return items.filter(
      (item) => item.title.toLowerCase().includes(search) || item.description.toLowerCase().includes(search)
    )
  }, [items, query])

  const groupedItems = useMemo(() => {
    return Object.groupBy(filteredItems, (item) => item.category)
  }, [filteredItems])

  return (
    <div className={style.wrapper}>
      <div className={style.menu}>
        <div className={style.header}>
          <div className={style.search}>
            <img src={searchIcon} alt="" />

            <input
              type="search"
              placeholder="Where to?"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={style.nav}>
          {categoryOrder.map((category) => {
            const categoryItems = groupedItems[category]

            if (!categoryItems?.length) {
              return null
            }

            return (
              <div key={category} className={style.group}>
                <span className={style.category}>{categoryTitles[category]}</span>

                <ul>
                  {categoryItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => {
                        executeAction(item.action)
                        onClose()
                      }}
                    >
                      <img src={item.icon} alt="" />

                      <p>{item.title}</p>

                      <span>– {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className={style.footer}>
          <ul>
            <li>
              <span>
                <kbd>⇅</kbd>
                navigate
              </span>
            </li>

            <li>
              <span>
                <kbd>⏎</kbd>
                select
              </span>
            </li>

            <li>
              <span>
                <kbd>Esc</kbd>
                close
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
