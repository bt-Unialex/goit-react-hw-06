import { BiLogIn } from 'react-icons/bi';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
