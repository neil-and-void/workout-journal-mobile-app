import React, { useState, useContext, useCallback, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import { RefreshControl, Dimensions } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Box, HStack, ScrollView, VStack, Text, Button } from 'native-base';

import WorkoutTemplate from '../../components/WorkoutTemplate';
import theme from '../../theme';
import TemplateService from '../../services/TemplateService';
import ViewWorkoutTemplateContext from '../../contexts/viewWorkoutTemplateContext';
import WorkoutService from '../../services/WorkoutService';
import WorkoutSessionContext from '../../contexts/workoutSessionContext';
import { AxiosError } from 'axios';

const Workouts = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [workoutTemplates, setWorkoutTemplates] = useState<WorkoutTemplate[]>(
    []
  );
  const { activeWorkout, setWorkoutSessionData } =
    useContext<WorkoutSessionContext>(WorkoutSessionContext);
  const { setViewWorkoutTemplateData } = useContext<ViewWorkoutTemplateContext>(
    ViewWorkoutTemplateContext
  );
  const tabBarHeight = useBottomTabBarHeight();

  /**
   *
   */
  const getWorkoutTemplates = async () => {
    try {
      setError(null);
      setLoading(true);

      // get workout templates and populate with exercise templates
      const data = await TemplateService.getWorkoutTemplates();

      const activeWorkoutData = await WorkoutService.getActiveWorkout();
      setWorkoutSessionData(activeWorkoutData);

      const workoutTemplateData = await Promise.all(
        data.map(async (workoutTemplate: WorkoutTemplate) => {
          const exerciseTemplates = await TemplateService.getExercisesTemplates(
            workoutTemplate.id
          );

          return {
            id: workoutTemplate.id,
            name: workoutTemplate.name,
            exerciseTemplates: exerciseTemplates,
          };
        })
      );

      setLoading(false);

      setWorkoutTemplates(workoutTemplateData);
    } catch (err) {
      const error = err as AxiosError;
      setError('Could not fetch workout templates');
    }
  };

  /**
   * fetch workout templates when screen is focused
   */
  useFocusEffect(
    useCallback(() => {
      if (workoutTemplates.length === 0) {
        getWorkoutTemplates();
      }
    }, [])
  );

  /**
   * navigate to screen to view workout template
   */
  const viewWorkoutTemplate = (workoutTemplate: WorkoutTemplate) => {
    navigation.navigate('ViewWorkoutTemplate');
    setViewWorkoutTemplateData({
      ...workoutTemplate,
    });
  };

  /**
   *
   * @param workoutTemplateId id of the workout template to delete
   */
  const handleDelete = async (workoutTemplateId: number) => {
    try {
      await TemplateService.deleteWorkoutTemplate(workoutTemplateId);
      await getWorkoutTemplates();
    } catch (err) {}
  };

  const handleWorkoutTemplateClick = (
    isActiveWorkout: boolean,
    workoutTemplate: WorkoutTemplate
  ) => {
    if (isActiveWorkout) {
      navigation.navigate('WorkoutSession');
    } else {
      viewWorkoutTemplate(workoutTemplate);
    }
  };

  return (
    <Box h={Dimensions.get('window').height - tabBarHeight} safeArea>
      <VStack h="100%">
        <HStack justifyContent="space-between" alignItems="center" px={6}>
          <Text fontWeight={700} fontSize={48}>
            Workouts
          </Text>
          <Button
            variant="unstyled"
            color={theme.primaryColor}
            onPress={() => navigation.navigate('NewWorkoutTemplateFlow')}
            _text={{ color: 'primary.500', fontSize: 20, fontWeight: 400 }}
          >
            New +
          </Button>
        </HStack>

        {error ? (
          <Text textAlign="center" color="red.500">
            {error}
          </Text>
        ) : null}

        <Box flexGrow={1}>
          <ScrollView
            _contentContainerStyle={{
              h: '100%',
              paddingX: 6,
            }}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={getWorkoutTemplates}
              />
            }
          >
            {workoutTemplates.map((workoutTemplate, idx) => (
              <Box pb={2} key={idx}>
                <Swipeable
                  renderRightActions={() => (
                    <Button
                      onPress={() => handleDelete(workoutTemplate.id)}
                      borderRadius={16}
                      backgroundColor="red.500"
                    >
                      Delete
                    </Button>
                  )}
                >
                  <WorkoutTemplate
                    workout={workoutTemplate}
                    isActive={
                      activeWorkout?.workout_template_id === workoutTemplate.id
                    }
                    onPress={() =>
                      handleWorkoutTemplateClick(
                        activeWorkout?.workout_template_id ===
                          workoutTemplate.id,
                        workoutTemplate
                      )
                    }
                  />
                </Swipeable>
              </Box>
            ))}
          </ScrollView>
        </Box>
      </VStack>
    </Box>
  );
};

export default Workouts;
