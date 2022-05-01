import React, { useContext, useState, useEffect } from 'react';
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

import Exercise from '../../components/Exercise';
import ExerciseContext from '../../contexts/exerciseContext';
import WorkoutService from '../../services/WorkoutService';
import { useFocusEffect } from '@react-navigation/native';
import { RefreshControl } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_WORKOUT } from '../../graphql/queries/workouts';

const Session = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const { setExerciseData } = useContext<ExerciseContext>(ExerciseContext);
  const [minutes, setMinutes] = useState(0);
  const {
    data: workoutData,
    loading,
    error,
  } = useQuery(GET_WORKOUT, {
    variables: { filter: { active: true } },
  });

  useEffect(() => {
    // const timer = setInterval(() => {
    //   // append 'Z' to indicate this time is UTC
    //   setMinutes(dayjs().diff(dayjs(workout.started + 'Z'), 'm'));
    // }, 60000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

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
    id: number,
    exerciseTemplate: ExerciseTemplate,
    set: ExerciseSet[]
  ) => {
    navigation.navigate('SetsInput');
    setExerciseData(id, exerciseTemplate, set);
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

  if (loading) {
    return (
      <VStack h="100%" justifyContent="center">
        <Spinner size="lg" />
      </VStack>
    );
  }

  console.log(workoutData);

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
              <Icon color="white" as={<Ionicons name="checkmark-outline" />} />
            </HStack>
          </Button>
        </Box>
      </HStack>
      <ScrollView
        flex={1}
        px={4}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => {}} />
        }
      >
        {workoutData.workout[0].exercises.map((exercise, idx) => (
          <Box pb={4} key={idx}>
            <Exercise
              exercise={exercise.exerciseTemplate}
              onPress={() =>
                doExercise(
                  exercise.id,
                  exercise.exerciseTemplate,
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

export default Session;
