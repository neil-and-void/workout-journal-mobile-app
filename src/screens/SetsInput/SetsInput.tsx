import React, { useCallback, useContext, useState } from 'react';
import { Box, Button, HStack, Text, VStack } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Set from '../../components/Set';
import ExerciseContext from '../../contexts/exerciseContext';
import SetService from '../../services/SetService';
import WorkoutSessionContext from '../../contexts/workoutSessionContext';
import { useFocusEffect } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { CREATE_SET } from '../../graphql/mutations/sets';
import SetsInputForm from '../../components/SetsInputForm';

const SetsInput = () => {
  const { activeWorkout } = useContext<WorkoutSessionContext>(
    WorkoutSessionContext
  );
  const { id, sets, exerciseTemplate, setExerciseData } =
    useContext<ExerciseContext>(ExerciseContext);
  const [formData, setData] = useState({
    weight: null,
    reps: null,
  });
  // TODO: query for set data the last time this exercise was used

  const handleDelete = () => {};

  useFocusEffect(
    useCallback(() => {
      // activeWorkout.started
    }, [])
  );

  const handleWeightChange = (weight: number, idx: number) => {};

  const handleRepsChange = (reps: number, idx: number) => {};

  const appendSetData = (exerciseSet: ExerciseSet) => {
    setExerciseData({ id, sets: [...sets, exerciseSet], exerciseTemplate });
  };

  return (
    <VStack px={4} h="100%" safeAreaBottom>
      <Text fontSize={48} fontWeight="500">
        {exerciseTemplate?.name}
      </Text>
      <Box h="100%">
        <SetsInputForm id={Number(id)} onSubmit={appendSetData} />
        {sets.length === 0 ? (
          <HStack justifyContent="center">
            <Text fontSize="lg" color="muted.400">
              No sets entered yet
            </Text>
          </HStack>
        ) : (
          <ScrollView>
            {sets.map((set, idx) => (
              <Box pb={4} key={idx}>
                <Set
                  set={set}
                  onRepsChange={(reps) => handleRepsChange(Number(reps), idx)}
                  onWeightChange={(weight) =>
                    handleWeightChange(Number(weight), idx)
                  }
                  onDelete={handleDelete}
                />
              </Box>
            ))}
          </ScrollView>
        )}
      </Box>
      <Box pb={8}>
        <Button>Done</Button>
      </Box>
    </VStack>
  );
};

export default SetsInput;
