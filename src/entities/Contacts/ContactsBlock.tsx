import { contacts } from "./model/contacts"

import style from "./style.module.css"

const ContactsBlock = () => {
  return (
    <div className={style.contacts}>
      {contacts.map((contact) => (
        <a
          key={contact.title}
          href={contact.link}
          target="_blank"
          rel="noreferrer"
          className={`${style.card} ${style[contact.style]}`}
        >

          <img
            src={contact.icon}
            alt={contact.title}
          />
          <h2>{contact.title}</h2>
          <span>{contact.description}</span>
          <p>{contact.info}</p>
        </a>
      ))}
    </div>
  )
}

export default ContactsBlock