import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { renderContactList } from 'redux/contacts/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(renderContactList);

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} id={contact.id} className={s.item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
