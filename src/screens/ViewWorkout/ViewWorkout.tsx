import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { VStack, ScrollView, Box } from 'native-base';

import Exercise from '../../components/Exercise';
import WorkoutService from '../../services/WorkoutService';

const ViewWorkout = () => {
  const [workout, setWorkout] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getWorkout();
    }, [])
  );

  const getWorkout = async () => {
    const workoutData = await WorkoutService.getWorkout(170);
    setWorkout(workoutData.workoutData);
  };

  return (
    <VStack safeAreaBottom>
      <ScrollView h="100%" px={6} pt={4}>
        {workout.map((exercise, idx) => (
          <Box pb={4} key={idx}>
            <Exercise
              exercise={exercise.exerciseTemplate}
              sets={exercise.sets}
            />
          </Box>
        ))}
      </ScrollView>
    </VStack>
  );
};

export default ViewWorkout;
