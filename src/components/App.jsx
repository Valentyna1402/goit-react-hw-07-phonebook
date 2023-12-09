import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <Loader />}
      {error && <p className='info-text'>Sorry, something went wrong. Please try to reload this page.</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {visibleContacts.length > 0 && !error ? <ContactList /> : <p className='info-text'>Your phonebook is empty.</p>}
    </div>
  );
};
