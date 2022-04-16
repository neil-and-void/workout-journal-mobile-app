import React, { useCallback, useContext } from 'react';
import { Box, Button, HStack, Text, VStack } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Set from '../../components/Set';
import ExerciseContext from '../../contexts/exerciseContext';
import SetService from '../../services/SetService';
import WorkoutSessionContext from '../../contexts/workoutSessionContext';
import { useFocusEffect } from '@react-navigation/native';

const SetsInput = () => {
  const { activeWorkout } = useContext<WorkoutSessionContext>(
    WorkoutSessionContext
  );
  const { exerciseTemplate, exercise, sets, setExerciseData } =
    useContext<ExerciseContext>(ExerciseContext);
  const handleDelete = () => {
    console.log('jfkds');
  };

  useFocusEffect(
    useCallback(() => {
      // activeWorkout.started
    }, [])
  );

  const handleWeightChange = (weight: number, idx: number) => {
    const newSetArray = [...sets];
    const newSet = { ...newSetArray[idx], weight: Number(weight) };
    newSetArray.splice(idx, 1, newSet);
    setExerciseData(exercise, exerciseTemplate, newSetArray);
    const { reps, id } = newSet;
    SetService.updateSet(id, reps, weight);
  };

  const handleRepsChange = (reps: number, idx: number) => {
    const newSetArray = [...sets];
    const newSet = { ...sets[idx], reps: Number(reps) };
    newSetArray.splice(idx, 1, newSet);
    setExerciseData(exercise, exerciseTemplate, newSetArray);
    const { weight, id } = newSet;
    SetService.updateSet(id, reps, weight);
  };

  return (
    <VStack px={4} h="100%" safeAreaBottom>
      <Text fontSize={48} fontWeight="500">
        {exerciseTemplate.name}
      </Text>
      <Box h="100%">
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
