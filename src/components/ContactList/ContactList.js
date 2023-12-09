import { useDispatch, useSelector } from 'react-redux';

import {  deleteContact } from 'redux/operations';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import {
  List,
  Item,
  Wrapper,
  AccentText,
  Text,
  Button,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  if (!visibleContacts.length) return null;
console.log(contacts)
  return (
    <List>
      {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <Wrapper>
              <Text>
                <AccentText>Name: </AccentText>
                {contact.contact.name}
              </Text>
              <Text>
                <AccentText>Number: </AccentText>
                {contact.contact.number}
              </Text>
              <Button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete contact
              </Button>
            </Wrapper>
          </Item>
        ))}
    </List>
  );
};
