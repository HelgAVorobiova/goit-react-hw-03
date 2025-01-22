// import css from "./Contact.module.css";

export default function Contact({name, number}) {
    return (
        <li>
            <p>{name}</p>
            <p>{ number}</p>
        </li>
    )
}