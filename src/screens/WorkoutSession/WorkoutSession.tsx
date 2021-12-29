import React from 'react';
import { Box, Button, HStack, VStack, Text } from 'native-base';

const WorkoutSession = () => {
  return (
    <Box px={4}>
      <VStack>
        <HStack justifyContent="space-between">
          <Text fontSize={40}>0:30</Text>
          <Button backgroundColor="green.500">Finish</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default WorkoutSession;
