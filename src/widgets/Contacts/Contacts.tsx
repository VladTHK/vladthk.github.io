import style from "./style.module.css"

import ContactsBlock from "@/entities/Contacts/ContactsBlock"

const Contacts = () => {
  return (
    <section className={style.block}>
      <div className={style.title}>
        <h1>Contacts</h1>

        <p>Let's build something together.</p>
        <p>
          I'm open to freelance projects, collaborations
          and interesting ideas.
        </p>
      </div>

      <br />

      <ContactsBlock />
    </section>
  )
}

export default Contacts