import React, { useContext, useCallback } from 'react';
import { VStack, Box, Button, ScrollView, Text } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ViewWorkoutTemplateContext from '../../contexts/viewWorkoutTemplateContext';

import Exercise from '../../components/ExerciseTemplate';
import { startNewWorkout } from '../../services/workouts';
import { useFocusEffect } from '@react-navigation/native';

const ViewWorkoutTemplate = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const { name, exerciseTemplates, id } =
    useContext<ViewWorkoutTemplateContext>(ViewWorkoutTemplateContext);

  /**
   * begin workout with the workout template by the given id
   */
  const startWorkoutSession = async () => {
    await startNewWorkout(id);
    navigation.navigate('WorkoutSession');
  };

  return (
    <VStack px={4} height="100%">
      <Box pb={4}>
        <Text textAlign="center" fontWeight={700} fontSize={36} pb={8}>
          {name}
        </Text>
        <Button onPress={startWorkoutSession}>Start</Button>
      </Box>
      <ScrollView flex={1}>
        {exerciseTemplates.map((exerciseTemplate, idx) => (
          <Box pb={4} key={idx}>
            <Exercise exerciseTemplate={exerciseTemplate} />
          </Box>
        ))}
      </ScrollView>
    </VStack>
  );
};

export default ViewWorkoutTemplate;
