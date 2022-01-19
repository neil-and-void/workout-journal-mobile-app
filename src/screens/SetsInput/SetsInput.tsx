import React, { useCallback, useContext, useState } from 'react';
import { Box, Button, Text, VStack } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Set from '../../components/Set';
import ExerciseContext from '../../contexts/exerciseContext';
import { useFocusEffect } from '@react-navigation/native';
import { getExercise } from '../../services/exercises';

const SetsInput = () => {
  const { exerciseTemplate, exercise, sets, setExerciseData } =
    useContext<ExerciseContext>(ExerciseContext);

  // const getExerciseData = async () => {
  //   const exerciseData = await getExercise(exercise.id);
  //   console.log(exerciseData);
  //   // setExerciseData()
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     getExerciseData();
  //   }, [])
  // );

  // console.log('hi', sets, exerciseTemplate, exercise, '###');

  const handleDelete = () => {
    console.log('jfkds');
  };

  const handleWeightChange = (weight: string, idx: number) => {
    const newSetArray = [...sets];
    const newSet = { ...newSetArray[idx], weight };
    newSetArray.splice(idx, 1, newSet);
    setExerciseData(exercise, exerciseTemplate, newSetArray);
    // TODO update set in backend
  };

  const handleRepsChange = (reps: string, idx: number) => {
    const newSetArray = [...sets];
    const newSet = { ...sets[idx], reps };
    newSetArray.splice(idx, 1, newSet);
    setExerciseData(exercise, exerciseTemplate, newSetArray);
    // TODO update set in backend
  };

  return (
    <VStack px={4} h="100%" safeAreaBottom>
      <Text fontSize={48} fontWeight="500">
        Squat
      </Text>
      <Box h="100%">
        {sets.length === 0 ? (
          <Box>
            <Text>No sets yet</Text>
          </Box>
        ) : (
          <ScrollView>
            {sets.map((set, idx) => (
              <Box pb={4} key={idx}>
                <Set
                  set={set}
                  onRepsChange={(reps) => handleRepsChange(reps, idx)}
                  onWeightChange={(weight) => handleWeightChange(weight, idx)}
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
