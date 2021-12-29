import { Box, Text } from 'native-base';
import React from 'react';

interface ExerciseProps {
  exerciseTemplate: ExerciseTemplate;
}

const ExerciseTemplate = ({ exerciseTemplate }: ExerciseProps) => {
  return (
    <Box rounded={16} p={4} bg="warmGray.200">
      <Text fontSize={20} fontWeight={600}>
        {exerciseTemplate.name}
      </Text>
      <Box flexDirection="row">
        <Box pr={4}>
          <Text>Sets {exerciseTemplate.sets}</Text>
        </Box>
        <Box>
          <Text>Reps {exerciseTemplate.reps}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ExerciseTemplate;
