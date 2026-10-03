import { useEffect, useRef, useState } from 'react'

import { stacks } from './model/stack'

import style from './style.module.css'

const stackItems = stacks.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryTitle: category.title,
  })),
)

const StackBlock = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const [columnCount, setColumnCount] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const observer = new ResizeObserver(() => {
      const columns = window.getComputedStyle(list).gridTemplateColumns
        .trim()
        .split(/\s+/)
        .filter(Boolean).length

      setColumnCount(columns)
    })

    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  const placeholderCount = columnCount
    ? Math.max(0, columnCount * 3 - stackItems.length)
    : 0

  return (
    <section className={style.stackBlock}>
      <ul className={style.categories} aria-label="Technology categories">
        {stacks.map((category) => (
          <li
            key={category.id}
            className={style.category}
          >
            <span className={style.categoryMarker} aria-hidden="true" />
            <span>{category.title}</span>
            <span className={style.categoryCount}>
              {String(category.items.length).padStart(2, '0')}
            </span>
          </li>
        ))}
      </ul>

      <ul className={style.list} ref={listRef} aria-label="Technologies">
        {stackItems.map((item, index) => {
          const infoId = `stack-info-${index}`
          const isSelected = selectedItem === index
          const isInfoVisible = hoveredItem === index || isSelected

          return (
            <li key={item.name} className={style.item}>
              <button
                type="button"
                className={`${style.iconButton} ${isSelected ? style.selected : ''}`}
                aria-label={`${item.name}, ${item.categoryTitle}`}
                aria-expanded={isInfoVisible}
                aria-describedby={isInfoVisible ? infoId : undefined}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onFocus={() => setHoveredItem(index)}
                onBlur={() => setHoveredItem(null)}
                onClick={() => {
                  setSelectedItem(isSelected ? null : index)
                  if (isSelected) setHoveredItem(null)
                }}
              >
                <img
                  src={`https://skillicons.dev/icons?i=${item.icon}`}
                  alt=""
                />
                <span
                  id={infoId}
                  className={`${style.info} ${isInfoVisible ? style.infoVisible : ''}`}
                  aria-hidden={!isInfoVisible}
                >
                  <span className={style.infoTitle}>{item.name}</span>
                  <span className={style.infoCategory}>{item.categoryTitle}</span>
                  <span className={style.infoDescription}>
                    {item.description}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
        {Array.from({ length: placeholderCount }, (_, index) => (
          <li
            key={`placeholder-${index}`}
            className={`${style.item} ${style.placeholder}`}
            aria-hidden="true"
          />
        ))}
      </ul>
    </section>
  )
}

export default StackBlock