// import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
export default function ContactList({ contacts }) {
    
    return (
        <ul>
            {
                contacts.map(({ id, name, number }) => (
                    <Contact key={ id} name ={name} number={number} />
                ))
            }
        </ul>
    )
    
}