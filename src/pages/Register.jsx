import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import Helmet from 'react-helmet';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const generateUniqueId = () => `input-${uuidv4()}`;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(registerData));
    form.reset();
  };

  return (
    <Box p={4}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Box maxW="md" mx="auto">
        <Heading color="teal.500" mb={4}>
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor={generateUniqueId()}>Name:</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUserAlt color="teal" />
              </InputLeftElement>
              <Input
                type="text"
                name="name"
                id={generateUniqueId()} // Dodaj unikalne id
                required
                _focus={{
                  borderColor: 'orange.300',
                  boxShadow: '0 0 0 2px #F59E0B',
                }}
              />
            </InputGroup>
            <FormLabel htmlFor={generateUniqueId()}>Email:</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdEmail color="teal" />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                id={generateUniqueId()} // Dodaj unikalne id
                required
                _focus={{
                  borderColor: 'orange.300',
                  boxShadow: '0 0 0 2px #F59E0B',
                }}
              />
            </InputGroup>
            <FormLabel htmlFor={generateUniqueId()}>Password:</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <RiLockPasswordFill color="teal" />
              </InputLeftElement>
              <Input
                type={show ? 'text' : 'password'}
                name="password"
                id={generateUniqueId()} // Dodaj unikalne id
                required
                _focus={{
                  borderColor: 'orange.300',
                  boxShadow: '0 0 0 2px #F59E0B',
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
