// import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Label, Input, Button, Container } from './Form.styled';

function Form() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  //обробник button
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { name, number } = form.elements;
    const contactName = name.value;
    const contactNumber = number.value;

    const newContact = {
      id: nanoid(),
      contactName,
      contactNumber,
    };

    if (
      !contacts.length ||
      !contacts.some(
        contact =>
          // contact.contactNumber === contactName ||
          contact.contactNumber === contactNumber
      )
    ) {
      form.reset();
      dispatch(addNewContacts(newContact));
      Notify.success(`${contactNumber} added to contacts`);
    } else {
      Notify.warning(`${contactNumber} is already in contacts`);
    }
    // console.log(contacts);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <Label>
          Name
          <Input
            // onChange={handleChange}
            type="text"
            name="name"
            value={contacts.name}
            autocomplete="on"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            // onChange={handleChange}
            type="tel"
            name="number"
            value={contacts.number}
            autocomplete="on"
            placeholder="Enter number 000-00-00"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </div>
      {/* <Button>Add new contact</Button> */}
      <Button>Add new contact</Button>
    </Container>
  );
}

export default Form;
