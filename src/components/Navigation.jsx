import React, { Suspense } from 'react';
import { UserMenu } from './UserMenu';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Button, Flex, Spacer, Box, Spinner } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Flex
        as="nav"
        gap="10px"
        bgColor="teal.500"
        p={4}
        borderBottom="1px solid orange"
        boxShadow="md"
        align="center"
      >
        <NavLink to="/">
          <Button
            colorScheme="gray"
            variant="solid"
            borderColor="white"
            color="teal"
            _hover={{ bg: 'gray.300', color: 'orange' }}
          >
            Home
          </Button>
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/login">
              <Button
                colorScheme="gray"
                variant="solid"
                borderColor="white"
                color="teal"
                _hover={{ bg: 'gray.300', color: 'orange' }}
              >
                Login
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button
                colorScheme="gray"
                variant="solid"
                borderColor="white"
                color="teal"
                _hover={{ bg: 'gray.300', color: 'orange' }}
              >
                Register
              </Button>
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Button
              colorScheme="gray"
              variant="solid"
              borderColor="white"
              color="teal"
              _hover={{ bg: 'gray.300', color: 'orange' }}
            >
              Contacts
            </Button>
          </NavLink>
        )}
        <Spacer />
        {isLoggedIn && (
          <Box>
            <UserMenu />
          </Box>
        )}
      </Flex>
      <Suspense
        fallback={
          <Flex
            height="100vh" // Ustawia wysokość na 100% widoku
            justifyContent="center" // Centruje w poziomie
            alignItems="center" // Centruje w pionie
          >
            <Spinner color="teal" size="xl" />
          </Flex>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
