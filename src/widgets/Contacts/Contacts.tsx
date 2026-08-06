import style from './style.module.css'

import ContactsBlock from '@/entities/Contacts/ContactsBlock'

const Contacts = () => {
  return (
    <div id="contacts" className={style.block}>
      <div className={style.title}>
        <h1>Contacts</h1>

        <p>Let's build something together.</p>
        <p>I'm open to freelance projects, collaborations and interesting ideas.</p>
      </div>

      <br />

      <ContactsBlock />
    </div>
  )
}

export default Contacts
