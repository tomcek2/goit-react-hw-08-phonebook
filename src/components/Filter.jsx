import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from '../redux/contacts/filterSlice';
import { Input, FilterLabel } from './Styles.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterRef = useRef();

  const handleFilterChange = e => {
    const newFilter = e.target.value.trim();
    dispatch(setFilter(newFilter));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <Input
        type="text"
        ref={filterRef}
        placeholder="Search by name..."
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};
