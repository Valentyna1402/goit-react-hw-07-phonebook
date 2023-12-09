import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
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
  const contacts = useSelector(selectVisibleContacts);

  if (!contacts.length) return null;

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Wrapper>
            <Text>
              <AccentText>Name: </AccentText>
              {contact.name}
            </Text>
            <Text>
              <AccentText>Number: </AccentText>
              {contact.number}
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
