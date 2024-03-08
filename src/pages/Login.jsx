import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authOperations';
import Helmet from 'react-helmet';
import { useState } from 'react';
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
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const generateUniqueId = () => `input-${uuidv4()}`;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(loginData));
    form.reset();
  };

  return (
    <Box p={4}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box maxW="md" mx="auto">
        <Heading color="teal.500" mb={4}>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor={generateUniqueId()}>Email:</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdEmail color="teal" />
              </InputLeftElement>
              <Input
                type="text"
                name="email"
                id={generateUniqueId()} // Dodaj unikalne id
                required
                _focus={{
                  borderColor: 'orange.300',
                  boxShadow: '0 0 0 2px #F59E0B',
                }}
              />
            </InputGroup>
            <FormLabel mt={3} htmlFor={generateUniqueId()}>
              Password:
            </FormLabel>
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
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
