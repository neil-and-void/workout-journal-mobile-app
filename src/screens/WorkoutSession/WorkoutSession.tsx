import React, { useContext, useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Icon,
  ScrollView,
  Spinner,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';

import viewWorkoutContext from '../../contexts/viewWorkoutTemplateContext';
import WorkoutSessionContext from '../../contexts/workoutSessionContext';
import Exercise from '../../components/Exercise';
import ExerciseContext from '../../contexts/exerciseContext';
import WorkoutService from '../../services/WorkoutService';
import { useFocusEffect } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

const WorkoutSession = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const { workoutData, setWorkoutSessionData } =
    useContext<WorkoutSessionContext>(WorkoutSessionContext);
  const { setExerciseData } = useContext<ExerciseContext>(ExerciseContext);
  const [minutes, setMinutes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   // append 'Z' to indicate this time is UTC
    //   setMinutes(dayjs().diff(dayjs(workout.started + 'Z'), 'm'));
    // }, 60000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (workoutData) return;
      getWorkoutData();
    }, [])
  );

  const getWorkoutData = async () => {
    setLoading(true);
    const workoutData = await WorkoutService.getActiveWorkout();
    console.log(workoutData);
    setWorkoutSessionData(workoutData);
    setLoading(false);
  };

  /**
   * save end time to database and navigate back to workouts screen
   */
  const finishWorkout = async () => {
    await WorkoutService.endWorkout();
    navigation.navigate('Home', {
      screen: 'Workouts',
    });
  };

  /**
   *
   * @param exerciseTemplate exercise template to view
   * @param exercise exercise to be done
   * @param set list of sets
   */
  const doExercise = (
    exerciseTemplate: ExerciseTemplate,
    exercise: Exercise,
    set: ExerciseSet[]
  ) => {
    navigation.navigate('SetsInput');
    setExerciseData(exercise, exerciseTemplate, set);
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
      <ScrollView
        flex={1}
        px={4}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getWorkoutData} />
        }
      >
        {workoutData.map((exercise, idx) => (
          <Box pb={4} key={idx}>
            <Exercise
              exercise={exercise.exerciseTemplate}
              onPress={() =>
                doExercise(
                  exercise.exerciseTemplate,
                  exercise.exercise,
                  exercise.sets
                )
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
