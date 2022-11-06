import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import ContactList from 'components/ContactList/ContactList.jsx';
import FilterContact from 'components/FilterContact/FilterContact.jsx';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsloading, selectError } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />

      <FilterContact />
      <div>{isLoading && !error && <b>Request in progress...</b>}</div>
      <ContactList />
    </>
  );
}
