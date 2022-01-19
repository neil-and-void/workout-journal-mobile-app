import React, { useCallback, useContext, useState } from 'react';
import { Box, Button, Text, VStack } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Set from '../../components/Set';
import ExerciseContext from '../../contexts/exerciseContext';
import { useFocusEffect } from '@react-navigation/native';
import { getExercise } from '../../services/exercises';

const SetsInput = () => {
  const { exerciseTemplate, exercise } =
    useContext<ExerciseContext>(ExerciseContext);
  const [sets, setSets] = useState([]);

  console.log(sets);

  const getExerciseData = async () => {
    const exerciseData = await getExercise(exercise?.id);
    setSets(exerciseData.sets);
  };

  useFocusEffect(
    useCallback(() => {
      getExerciseData();
    }, [])
  );

  return (
    <VStack px={4} h="100%" safeAreaBottom>
      <Text fontSize={48} fontWeight="500">
        Squat
      </Text>
      <ScrollView flex={1}>
        {sets.map((set, idx) => (
          <Box pb={4} key={idx}>
            <Set set={set} />
          </Box>
        ))}
      </ScrollView>
      <Box pb={8}>
        <Button>Done</Button>
      </Box>
    </VStack>
  );
};

export default SetsInput;
