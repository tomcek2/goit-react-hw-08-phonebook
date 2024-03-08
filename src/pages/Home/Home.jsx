import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Text, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={4}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Heading color="teal.500" mb={4}>
        Welcome
      </Heading>
      <Text color="gray.600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </Text>
    </Box>
  );
};

export default Home;
