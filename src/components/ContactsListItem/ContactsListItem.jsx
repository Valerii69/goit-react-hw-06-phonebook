import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteIdContact } from '../../redux/contactsSlice';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsListItem.styled';

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteIdContact(id));
  };
  console.log(name);
  return (
    <ContactItem key={id}>
      <ContactName>
        {name[0].toUpperCase() + name.substring(1)} :
        <ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};

export default ContactsListItem;
