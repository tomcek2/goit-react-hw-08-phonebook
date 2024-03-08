import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  Heading,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { deleteContact } from '../redux/contacts/contactOperations';
import { filteredContacts } from '../redux/contacts/contactSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const contacts = useSelector(filteredContacts);

  return (
    <Flex
      width="50%"
      bg="teal.300"
      p={4}
      maxW="xl"
      borderRadius="md"
      borderWidth="1px"
      borderColor="orange.200"
      flexDirection="column"
      mx={5}
    >
      <Heading as="h2" fontSize="xl" textAlign="center" mb={5}>
        Contacts
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {contacts.map(contact => (
          <Box
            maxW="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            padding="10px"
            bg="white"
            boxShadow="md"
            borderRadius="md"
            m={3}
            transition="box-shadow 0.3s ease"
            _hover={{
              boxShadow: '2px 2px orange',
            }}
            key={contact.id}
          >
            <Text
              mb={2}
              fontWeight="bold"
              isTruncated
              maxW="100%"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {contact.name.length > 40
                ? `${contact.name.substring(0, 40)}...`
                : contact.name}
            </Text>
            <Text mb={2}>{contact.number}</Text>
            <Button
              colorScheme="orange"
              variant="outline"
              size="sm"
              transition="background-color 0.3s ease, color 0.3s ease"
              _hover={{
                variant: 'solid',
                backgroundColor: 'orange',
                color: 'white',
              }}
              rightIcon={<RiDeleteBin6Line />}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
