import React from 'react';
import { Box, Text, Pressable, HStack, VStack } from 'native-base';

const Workout = () => {
  return (
    <Pressable onPress={() => console.log('1234')}>
      <HStack>
        <VStack
          borderTopWidth={1}
          borderLeftWidth={1}
          borderRightWidth={1}
          borderRadius={16}
          borderColor="gray.300"
        >
          <Box px={3}>
            <Text fontSize={32} fontWeight={600}>
              20
            </Text>
          </Box>
          <Box backgroundColor="primary.400" borderBottomRadius={16}>
            <Text fontSize={16} color="white" textAlign="center">
              Dec
            </Text>
          </Box>
        </VStack>
        <VStack pl={4} justifyContent="center">
          <Text fontWeight={500} fontSize={20}>
            Legs
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default Workout;
