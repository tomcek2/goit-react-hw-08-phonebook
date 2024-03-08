import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/contactOperations';
import { selectContact } from '../redux/contacts/contactSelectors';
import {
  Input,
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaSquarePhone } from 'react-icons/fa6';
import { FaUserAlt } from 'react-icons/fa';

export const ContactInput = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const nameRef = useRef();
  const numberRef = useRef();

  const handleAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(
        addContact({ name: newContact.name, number: newContact.number })
      );
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const name = nameRef.current.value.trim();
    const inputNumber = numberRef.current.value.trim();
    const number = `${inputNumber.slice(0, 3)}-${inputNumber.slice(
      3,
      5
    )}-${inputNumber.slice(5)}`;

    const namePattern =
      /^[a-zA-Z\u0400-\u04FF]+(([' -][a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$/;
    const numberPattern =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

    if (!namePattern.test(name)) {
      alert(
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      );
      return;
    } else if (!numberPattern.test(number)) {
      alert(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      );
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    handleAddContact(newContact);
    form.reset();
  };

  return (
    <FormControl onSubmit={handleSubmit} mb={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaUserAlt color="teal" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Name"
          ref={nameRef}
          mb={2}
          isRequired
          _focus={{
            borderColor: 'orange.300',
            boxShadow: '0 0 0 2px #F59E0B',
          }}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSquarePhone color="teal" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Phone number"
          ref={numberRef}
          mb={2}
          isRequired
          _focus={{
            borderColor: 'orange.300',
            boxShadow: '0 0 0 2px #F59E0B',
          }}
        />
      </InputGroup>
      <Button type="submit" colorScheme="teal" mt={3}>
        Add Contact
      </Button>
    </FormControl>
  );
};
