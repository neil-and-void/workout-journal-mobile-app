import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Box, HStack, Text, Icon } from 'native-base';
import { Pressable } from 'react-native';

interface ExerciseProps {
  exercise: ExerciseTemplate;
  sets: Set[];
  onPress: () => void;
}

const Exercise = ({ exercise, onPress, sets }: ExerciseProps) => {
  return (
    <Box borderRadius={16} shadow="3" backgroundColor="white">
      <HStack
        backgroundColor="trueGray.900"
        borderTopRadius={16}
        padding={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={24} fontWeight={600} color="lightText">
          {exercise.name}
        </Text>
        <Pressable onPress={onPress}>
          <Text color="lightText" fontSize={16}>
            Edit sets{' '}
            <Icon as={Ionicons} name="pencil" color="white" size={4}></Icon>
          </Text>
        </Pressable>
      </HStack>
      <Box px={4} py={2}>
        {sets.length > 0 ? (
          sets.map((set, idx) => (
            <HStack key={idx} alignItems="baseline">
              <Text fontSize={24} fontWeight="600">
                8
                <Text fontSize={16} fontWeight="400">
                  {' '}
                  reps
                </Text>
              </Text>
              <Text fontSize={24}>{' x '}</Text>
              <Text fontSize={24} fontWeight="600">
                225
                <Text fontSize={16} fontWeight="400">
                  {' '}
                  lbs
                </Text>
              </Text>
            </HStack>
          ))
        ) : (
          <Box>
            <Text>No sets entered</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Exercise;
