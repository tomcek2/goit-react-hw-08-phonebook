import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex gap="10px" align="center">
      <Text color="white" fontWeight="bold">
        Username: {user.name}
      </Text>
      <Button
        size="sm"
        colorScheme="gray"
        variant="solid"
        borderColor="white"
        color="teal"
        _hover={{ bg: 'gray.300', color: 'orange' }}
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Flex>
  );
};
