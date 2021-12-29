import { Box, Text } from 'native-base';
import React from 'react';

interface ExerciseProps {
  exercise: Exercise | ExerciseTemplate;
}

const Exercise = ({ exercise }: ExerciseProps) => {
  return (
    <Box rounded={16} p={4} bg="warmGray.200">
      <Text fontSize={20} fontWeight={600}>
        {exercise.name}
      </Text>
      <Box flexDirection="row">
        <Box pr={4}>
          <Text>Sets {exercise.sets}</Text>
        </Box>
        <Box>
          <Text>Reps {exercise.reps}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Exercise;
