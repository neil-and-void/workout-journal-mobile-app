import React, { useContext } from 'react';
import { VStack, Box, Button, ScrollView, Text } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ViewWorkoutTemplateContext from '../../contexts/viewWorkoutTemplateContext';
import Exercise from '../../components/ExerciseTemplate';
import WorkoutService from '../../services/WorkoutService';

const ViewWorkoutTemplate = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const { name, exerciseTemplates, id } =
    useContext<ViewWorkoutTemplateContext>(ViewWorkoutTemplateContext);

  /**
   * start a workout with workout template equal to the one above
   */
  const startWorkoutSession = async () => {
    await WorkoutService.startNewWorkout(id);
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
