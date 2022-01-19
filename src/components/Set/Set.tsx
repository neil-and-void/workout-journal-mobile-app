import React from 'react';
import { Box, HStack, Input, Button, Text } from 'native-base';

interface SetProps {
  set: Set;
}

const Set = ({ set }: SetProps) => {
  return (
    <HStack>
      <Box flex={1} pr={4}>
        <Input
          keyboardType="numeric"
          placeholder="reps"
          value={String(set.reps)}
          fontSize={16}
          borderWidth={0}
          borderRadius={16}
          backgroundColor="gray.200"
        />
      </Box>
      <Box flex={1} pr={4}>
        <Input
          keyboardType="numeric"
          placeholder="weight"
          value={String(set.weight)}
          fontSize={16}
          borderWidth={0}
          backgroundColor="gray.200"
          borderRadius={16}
        />
      </Box>
      <Button variant="unstyled" _text={{ color: 'red.500' }} pr={4}>
        remove
      </Button>
    </HStack>
  );
};

export default Set;
