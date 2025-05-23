import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.wrapper}>
      <div>
        <p className={css.text}>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.deleteButton} id={id} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}
