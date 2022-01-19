import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Box, HStack, Input, Button } from 'native-base';

interface SetProps {
  set: ExerciseSet;
  onWeightChange: (weight: string) => void;
  onRepsChange: (reps: string) => void;
  onDelete: () => void;
}

const Set = ({ set, onWeightChange, onRepsChange, onDelete }: SetProps) => {
  return (
    <HStack>
      <Box flex={1} pr={4}>
        <Input
          keyboardType="numeric"
          placeholder="reps"
          onChangeText={onRepsChange}
          value={String(set.reps)}
          fontSize={16}
          borderWidth={0}
          borderRadius={16}
          backgroundColor="gray.200"
        />
      </Box>
      <Box flex={1} pr={4}>
        <Input
          keyboardType="numeric"
          placeholder="weight"
          onChangeText={onWeightChange}
          value={String(set.weight)}
          fontSize={16}
          borderWidth={0}
          backgroundColor="gray.200"
          borderRadius={16}
        />
      </Box>
      <Button
        variant="unstyled"
        _text={{ color: 'red.500' }}
        pr={4}
        onPress={onDelete}
      >
        remove
      </Button>
    </HStack>
  );
};

export default Set;
