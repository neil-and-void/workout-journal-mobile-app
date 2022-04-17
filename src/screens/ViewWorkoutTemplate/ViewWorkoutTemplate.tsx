import React, { useContext } from 'react';
import { VStack, Box, Button, ScrollView, Text, Spinner } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ViewWorkoutTemplateContext from '../../contexts/viewWorkoutTemplateContext';
import Exercise from '../../components/ExerciseTemplate';
import { useMutation } from '@apollo/client';
import { START_WORKOUT } from '../../graphql/mutations/workouts';

const ViewWorkoutTemplate = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const { name, exerciseTemplates, id } =
    useContext<ViewWorkoutTemplateContext>(ViewWorkoutTemplateContext);
  const [startWorkout, { loading }] = useMutation(START_WORKOUT);

  /**
   * start a workout with workout template equal to the one above
   */
  const startWorkoutSession = async () => {
    await startWorkout({ variables: { workoutTemplateId: id } });
    navigation.navigate('Session');
  };

  return (
    <VStack px={4} height="100%">
      <Box pb={4}>
        <Text textAlign="center" fontWeight={700} fontSize={36} pb={8}>
          {name}
        </Text>
        <Button onPress={startWorkoutSession}>
          {loading ? <Spinner color={'white'} /> : 'Start'}
        </Button>
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
