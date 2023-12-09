import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/selectors';

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
        {isLoading && <p>Loading...</p>}
        {error && <p>Sorry, something went wrong.</p>}
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {visibleContacts.length > 0 && <ContactList />}
      </div>
    );
  
}
