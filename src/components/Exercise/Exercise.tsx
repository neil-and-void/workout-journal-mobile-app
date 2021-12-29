import { Box, Text } from 'native-base';
import React from 'react';

interface ExerciseProps {
  exercise: Exercise;
}

const Exercise = ({ exercise }: ExerciseProps) => {
  return (
    <Box>
      <Text>{exercise.name}</Text>
    </Box>
  );
};

export default Exercise;
