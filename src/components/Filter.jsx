import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterRef = useRef();

  const handleFilterChange = e => {
    const newFilter = e.target.value.trim();
    dispatch(setFilter(newFilter));
  };

  return (
    <Box
      border="1px solid teal"
      borderRadius="md"
      transition="background-color 0.3s ease"
      _hover={{ backgroundColor: 'rgba(0,128,128,0.1)' }}
    >
      <FormControl>
        <FormLabel ml={2}>Find contacts by name:</FormLabel>
        <Input
          type="text"
          ref={filterRef}
          placeholder="Search by name..."
          onChange={handleFilterChange}
          _focus={{
            borderColor: 'orange.300',
            boxShadow: '0 0 0 2px #F59E0B',
          }}
        />
      </FormControl>
    </Box>
  );
};
