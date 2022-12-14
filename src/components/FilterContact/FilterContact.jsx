import s from './FilterContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export default function FilterContact() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch(contactsReducer);
  const onChange = event => dispatch(filterContacts(event.target.value));

  return (
    <>
      <div className={s.wrap}>
        <p className={s.filterheader}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={onChange}
          value={filter}
          className={s.input}
        />
      </div>
    </>
  );
}
