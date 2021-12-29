import { Box, Text, Pressable } from 'native-base';
import React from 'react';

interface WorkoutTemplateProps {
  workout: WorkoutTemplate;
  onPress: () => void;
}

const WorkoutTemplate = ({ workout, onPress }: WorkoutTemplateProps) => {
  const viewExercises = () => {
    console.log('view exercises');
  };

  return (
    <Pressable onPress={onPress}>
      <Box rounded={16} p={4} bg="warmGray.200">
        <Text fontWeight={700} fontSize={16}>
          {workout.name}
        </Text>
        <Text fontWeight={700} fontSize={32}>
          {workout.exerciseTemplates.length}{' '}
          <Text fontSize={16} fontWeight={400}>
            {workout.exerciseTemplates.length > 1 ? 'exercises' : 'exercise'}
          </Text>
        </Text>
      </Box>
    </Pressable>
  );
};

export default WorkoutTemplate;
