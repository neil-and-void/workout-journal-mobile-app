import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Icon,
  ScrollView,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';

import viewWorkoutContext from '../../contexts/viewWorkoutTemplateContext';
import WorkoutSessionContext from '../../contexts/workoutSessionContext';
import Exercise from '../../components/Exercise';
import ExerciseContext from '../../contexts/exerciseContext';
import { getActiveWorkout } from '../../services/workouts';

const WorkoutSession = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const { workout, setWorkoutSessionData } = useContext<WorkoutSessionContext>(
    WorkoutSessionContext
  );
  const { setExerciseData } = useContext<ExerciseContext>(ExerciseContext);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   // append 'Z' to indicate this time is UTC
    //   setMinutes(dayjs().diff(dayjs(workout.started + 'Z'), 'm'));
    // }, 60000);
    getWorkoutData();
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  const getWorkoutData = async () => {
    const workoutData = await getActiveWorkout();
    setWorkoutSessionData(workoutData);
  };

  /**
   * save end time to database and navigate back to workouts screen
   */
  const finishWorkout = () => {
    navigation.navigate('Home', {
      screen: 'Workouts',
    });
  };

  const doExercise = (exerciseTemplate, exercise) => {
    navigation.navigate('SetsInput');
    setExerciseData(exercise, exerciseTemplate, []);
  };

  /**
   * format time by padding with 0's
   *
   * @param time number to format for time
   * @returns 0 padded string
   */
  const formatTime = (time: number) => {
    return String(time).padStart(2, '0');
  };

  if (!workout)
    return (
      <Box>
        <Text>hi</Text>
      </Box>
    );

  return (
    <VStack h="100%">
      <HStack px={4} pb={4} alignItems="center" justifyContent="space-between">
        <VStack>
          <Text>Time Elapsed</Text>
          <Text fontSize={48} lineHeight={56}>
            {/* convert to hours and minutes elapsed */}
            {formatTime(Math.floor(minutes / 60))} <Text fontSize={24}>hr</Text>{' '}
            {formatTime(Math.floor(minutes % 60))}{' '}
            <Text fontSize={24}>min</Text>
          </Text>
        </VStack>
        <Box flex={0}>
          <Button backgroundColor="primary.500" onPress={finishWorkout}>
            <HStack alignItems="center">
              <Text fontSize={16} color="#fff">
                Finish{' '}
              </Text>
              <Icon
                style={{ color: '#fff' }}
                as={<Ionicons name="checkmark-outline" />}
              />
            </HStack>
          </Button>
        </Box>
      </HStack>
      <ScrollView flex={1} px={4}>
        {workout?.exercises.map((exercise, idx) => (
          <Box pb={4} key={idx}>
            <Exercise
              exercise={exercise.exerciseTemplate}
              onPress={() =>
                doExercise(exercise.exerciseTemplate, exercise.exercise)
              }
              sets={exercise.sets}
            />
          </Box>
        ))}
      </ScrollView>
    </VStack>
  );
};

export default WorkoutSession;
