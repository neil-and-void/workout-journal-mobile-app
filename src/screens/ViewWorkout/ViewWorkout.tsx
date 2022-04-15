import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { VStack, ScrollView, Box, Spinner } from 'native-base';

import Exercise from '../../components/Exercise';
import WorkoutService from '../../services/WorkoutService';

const ViewWorkout = () => {
  const [workout, setWorkout] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  // TODO: set the workout id to get workouts for

  useFocusEffect(
    useCallback(() => {
      getWorkout();
    }, [])
  );

  const getWorkout = async () => {
    setLoading(true);
    const workoutData = await WorkoutService.getWorkout(170);
    setWorkout(workoutData.workoutData);
    setLoading(false);
  };

  return (
    <VStack safeAreaBottom>
      {loading ? (
        <VStack h="100%" justifyContent="center">
          <Spinner />
        </VStack>
      ) : (
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
      )}
    </VStack>
  );
};

export default ViewWorkout;
