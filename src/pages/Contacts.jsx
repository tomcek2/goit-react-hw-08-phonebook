import React, { useEffect } from 'react';

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
    <div>
      <h1>Contact Book</h1>
      <ContactInput />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
