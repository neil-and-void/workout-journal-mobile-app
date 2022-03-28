import React, { useState, useCallback, useContext } from 'react';
import { Dimensions, RefreshControl } from 'react-native';
import { ScrollView, Box, Text, HStack, Button } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';

import Workout from '../../components/Workout';
import theme from '../../theme';
import WorkoutService from '../../services/WorkoutService';
import TemplateService from '../../services/TemplateService';

const Journal = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [workoutTemplatesNames, setWorkoutTemplatesNames] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const tabBarHeight = useBottomTabBarHeight();

  // useFocusEffect(
  // useCallback(() => {
  //   if (workouts.length === 0) {
  //     getWorkoutData();
  //   }
  // }, [])
  // );

  const getWorkoutData = async () => {
    setLoading(true);

    // get previous workouts
    const workouts = await WorkoutService.getWorkouts(0, 10);
    setWorkouts(workouts);

    // get names of workout templates
    const workoutTemplates = await TemplateService.getWorkoutTemplates();

    const names = {};

    workoutTemplates.forEach((workoutTemplate) => {
      names[String(workoutTemplate.id)] = workoutTemplate.name;
    });

    setWorkoutTemplatesNames(names);

    setLoading(false);
  };

  const viewWorkout = () => {
    navigation.navigate('ViewWorkout');
  };

  return (
    <Box
      height={Dimensions.get('window').height - tabBarHeight}
      flex={1}
      safeArea
    >
      <HStack justifyContent="space-between" px={6}>
        <Text fontSize={48} fontWeight={700}>
          Journal
        </Text>
        <Button
          variant="unstyled"
          color={theme.primaryColor}
          onPress={() => console.log('view calendar')}
          _text={{ color: 'primary.500', fontSize: 16, fontWeight: 400 }}
        >
          View Calendar
        </Button>
      </HStack>
      <Box flexGrow={1}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getWorkoutData} />
          }
          _contentContainerStyle={{
            h: '100%',
            paddingX: 6,
          }}
        >
          {workouts.map((workout, idx) => (
            <Box pb={4} key={idx}>
              <Workout
                name={workoutTemplatesNames[workout.workout_template_id]}
                workout={workout}
                onPress={() => viewWorkout()}
              />
            </Box>
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Journal;
