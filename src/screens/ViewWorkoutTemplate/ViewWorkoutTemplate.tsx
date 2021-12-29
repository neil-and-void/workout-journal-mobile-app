import React, { useContext } from 'react';
import { VStack, Box, Button, ScrollView, Text } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import viewWorkoutContext from '../../contexts/viewWorkoutTemplateContext';
import Exercise from '../../components/ExerciseTemplate';

const ViewWorkoutTemplate = ({
  navigation,
}: NativeStackScreenProps<any, any>) => {
  const { name, exerciseTemplates } =
    useContext<WorkoutTemplateContext>(viewWorkoutContext);

  return (
    <VStack px={4}>
      <Box pb={4}>
        <Text textAlign="center" fontWeight={700} fontSize={36} pb={8}>
          {name}
        </Text>
        <Button onPress={() => navigation.navigate('WorkoutSession')}>
          Start
        </Button>
      </Box>
      <ScrollView>
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
