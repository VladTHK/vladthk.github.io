import { stacks } from './model/stack'

import style from './style.module.css'

const StackBlock = () => {
  return (
    <div className={style.stackBlock}>
      {stacks.map((stack) => (
        <section
          key={stack.title}
          className={style.stack}
        >
          <h2>{stack.title}</h2>

          <ul className={style.list}>
            {stack.items.map((item) => (
              <li
                key={item.name}
                className={style.item}
              >
                <h4>{item.name}</h4>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default StackBlock