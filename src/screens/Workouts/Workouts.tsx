import React, { useState, useContext, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import WorkoutTemplate from '../../components/WorkoutTemplate';
import theme from '../../theme';
import { Box, HStack, ScrollView, VStack, Text, Button } from 'native-base';
import {
  deleteWorkoutTemplate,
  getExercisesTemplates,
  getWorkoutTemplates,
} from '../../services/templates';
import { useFocusEffect } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import WorkoutTemplateActions from '../../components/WorkoutTemplateActions/WorkoutTemplateActions';
import ViewWorkoutContext from '../../contexts/viewWorkoutTemplateContext';

const Workouts = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [workoutTemplates, setWorkoutTemplates] = useState<WorkoutTemplate[]>({
    id: -1,
    name: '',
    exerciseTemplates: [],
  });
  const { setTemplateData } =
    useContext<WorkoutTemplateContext>(ViewWorkoutContext);
  const [error, setError] = useState<string | null>(null);

  const refreshWorkoutTemplates = async () => {
    try {
      setError(null);

      // get workout templates and populate with exercise templates
      const data = await getWorkoutTemplates();
      const workoutTemplateData = await Promise.all(
        data.map(async (workoutTemplate, idx) => {
          const exerciseTemplates = await getExercisesTemplates(
            workoutTemplate.id
          );
          return {
            id: workoutTemplate.id,
            name: workoutTemplate.name,
            exerciseTemplates: exerciseTemplates,
          };
        })
      );

      setWorkoutTemplates(workoutTemplateData);
    } catch (err) {
      setError('Could not fetch workout templates');
    }
  };

  /**
   * fetch workout templates when screen is focused
   */
  useFocusEffect(
    useCallback(() => {
      refreshWorkoutTemplates();
    }, [])
  );

  /**
   * navigate to screen to view workout template
   */
  const viewWorkoutTemplate = (workoutTemplate: WorkoutTemplate) => {
    navigation.navigate('ViewWorkoutTemplate');
    setTemplateData(workoutTemplate);
  };

  /**
   *
   * @param workoutTemplateId id of the workout template to delete
   */
  const handleDelete = async (workoutTemplateId: number) => {
    try {
      await deleteWorkoutTemplate(workoutTemplateId);
      await refreshWorkoutTemplates();
    } catch (err) {}
  };

  return (
    <Box h="100%" safeArea>
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
        {error ? <Text color="red.500">{error}</Text> : null}
        <ScrollView
          _contentContainerStyle={{
            h: '100%',
            paddingX: 4,
          }}
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
                  onPress={() => viewWorkoutTemplate(workoutTemplate)}
                />
              </Swipeable>
            </Box>
          ))}
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Workouts;
