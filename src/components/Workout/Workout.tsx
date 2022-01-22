import React from 'react';
import { Box, Text, Pressable, HStack, VStack } from 'native-base';

interface WorkoutProps {
  onPress: () => void;
  workout: Workout;
  name: string;
}

const Workout = ({ onPress, workout, name }: WorkoutProps) => {
  const date = new Date(workout.started);

  return (
    <Pressable onPress={onPress}>
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
              {date.getDate()}
            </Text>
          </Box>
          <Box backgroundColor="primary.400" borderBottomRadius={16}>
            <Text fontSize={16} color="white" textAlign="center">
              {date.toLocaleString('default', {
                month: 'short',
              })}
            </Text>
          </Box>
        </VStack>
        <VStack pl={4} justifyContent="center">
          <Text fontWeight={500} fontSize={20}>
            {name}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default Workout;
