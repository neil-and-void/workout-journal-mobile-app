import { Box, Text, Pressable } from 'native-base';
import React from 'react';

interface WorkoutTemplateProps {
  workout: WorkoutTemplate;
  isActive: boolean;
  onPress: () => void;
}

const WorkoutTemplate = ({
  workout,
  onPress,
  isActive,
}: WorkoutTemplateProps) => {
  const viewExercises = () => {
    console.log('view exercises');
  };

  const textColor = isActive ? 'white' : 'black';

  return (
    <Pressable onPress={onPress}>
      <Box
        rounded={16}
        p={4}
        backgroundColor={isActive ? 'primary.500' : 'gray.200'}
      >
        <Text fontWeight={700} fontSize={16} color={textColor}>
          {workout.name}
        </Text>
        <Text fontWeight={700} fontSize={32} color={textColor}>
          {workout.exerciseTemplates.length}{' '}
          <Text fontSize={24} fontWeight={400} color={textColor}>
            {workout.exerciseTemplates.length > 1 ? 'Exercises' : 'Exercise'}
          </Text>
        </Text>
      </Box>
    </Pressable>
  );
};

export default WorkoutTemplate;
