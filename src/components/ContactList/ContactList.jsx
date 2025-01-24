import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
export default function ContactList({ contacts, handleDeleteContact }) {
    
    return (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <Contact
                key={id}
                id={id}
            name={name}
            number={number}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    );
    
}