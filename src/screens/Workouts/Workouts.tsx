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
import WorkoutSessionContext from '../../contexts/workoutSessionContext';
import { useQuery } from '@apollo/client';
import { GET_WORKOUTS } from '../../graphql/queries/templates';
import UserContext from '../../contexts/userContext';
import WorkoutTemplateList from '../../components/WorkoutTemplateList';

const Workouts = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { signedOut } = useContext<UserContext>(UserContext);
  const {
    loading,
    error,
    data: workoutTemplates,
    refetch,
  } = useQuery(GET_WORKOUTS, {
    variables: { filter: {} },
  });
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
    // TODO: increment pagination here
    refetch();
  };

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
    } catch (err) {

    }
  };

  const handleWorkoutTemplateClick = (
    isActiveWorkout: boolean,
    workoutTemplate: WorkoutTemplate
  ) => {
    if (isActiveWorkout) {
      navigation.navigate('Session');
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
            {error.message}
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
                onRefresh={() => refetch()}
              />
            }
          >
            {loading ? null : (
              <WorkoutTemplateList
                handleDelete={handleDelete}
                data={workoutTemplates}
                activeWorkout={activeWorkout}
                handleWorkoutTemplateClick={handleWorkoutTemplateClick}
              />
            )}
          </ScrollView>
        </Box>
      </VStack>
    </Box>
  );
};

export default Workouts;
