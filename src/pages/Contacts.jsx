import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Flex, Box, Heading } from '@chakra-ui/react';

import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactInput } from 'components/ContactInput';

import { fetchContacts } from '../redux/contacts/contactOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
} from '../redux/contacts/contactSelectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Heading textAlign="center" mb={5}>
        Contact Book
      </Heading>
      <Flex>
        <Box width="50%" mx={5}>
          <ContactInput />
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
        </Box>
        <ContactList />
      </Flex>
    </Box>
  );
};

export default Contacts;
