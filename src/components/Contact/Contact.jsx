import css from './Contact.module.css';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ id, name, number, handleDeleteContact }) {
  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <FaUserAlt style={{ marginRight: '8px', color: '#4682B4' }} />
          {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt style={{ marginRight: '8px', color: '#4682B4' }} />
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={css.contactButton}
      >
        Delete
      </button>
    </li>
  );
}
