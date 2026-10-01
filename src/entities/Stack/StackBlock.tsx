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
        {stackItems.map((item) => (
          <li
            key={item.name}
            className={style.item}
            title={`${item.name} · ${item.categoryTitle}`}
            aria-label={`${item.name}, ${item.categoryTitle}`}
          >
            {item.icon && (
              <img
                src={`https://skillicons.dev/icons?i=${item.icon}`}
                alt={item.name}
              />
            )}
          </li>
        ))}
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