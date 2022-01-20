import React from 'react';
import { Box, HStack, Input, Button, Text } from 'native-base';

interface SetProps {
  set: ExerciseSet;
  onWeightChange: (weight: string) => void;
  onRepsChange: (reps: string) => void;
  onDelete: () => void;
}

const Set = ({ set, onWeightChange, onRepsChange, onDelete }: SetProps) => {
  return (
    <HStack>
      <HStack flex={1} pr={4} flexGrow={1} alignItems="center">
        <Input
          keyboardType="number-pad"
          placeholder="reps"
          onChangeText={onRepsChange}
          value={set.reps ? String(set.reps) : ''}
          fontSize={16}
          borderWidth={0}
          borderRadius={16}
          backgroundColor="gray.200"
          flexGrow={1}
        />
        <Text pl={2} fontSize="md">
          reps
        </Text>
      </HStack>
      <HStack flex={1} pr={4} flexGrow={1} alignItems="center">
        <Input
          keyboardType="numeric"
          placeholder="weight"
          onChangeText={onWeightChange}
          value={set.weight ? String(set.weight) : ''}
          fontSize={16}
          borderWidth={0}
          backgroundColor="gray.200"
          borderRadius={16}
          flexGrow={1}
        />
        <Text pl={2} fontSize="md">
          lbs
        </Text>
      </HStack>
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
