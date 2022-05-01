import { useMutation } from '@apollo/client';
import { Button, FormControl, HStack, Input } from 'native-base';
import React, { useState } from 'react';
import { CREATE_SET } from '../../graphql/mutations/sets';

interface SetsInput {
  weight: null | number;
  reps: null | number;
}

interface SetsInputFormProps {
  exerciseId: number;
}

const SetsInputForm = ({ exerciseId }: SetsInputFormProps) => {
  const [formData, setData] = useState<SetsInput>({
    weight: null,
    reps: null,
  });
  const [createSet] = useMutation(CREATE_SET);

  const submitForm = async () => {
    const res = await createSet({
      variables: {
        exerciseId: exerciseId,
        weight: formData.weight,
        reps: formData.reps,
      },
    });
  };

  return (
    <FormControl>
      <HStack justifyContent="center" alignItems="center">
        <FormControl.Label>Weight</FormControl.Label>
        <Input
          onChangeText={(value) =>
            setData({ ...formData, weight: Number(value) })
          }
          keyboardType="number-pad"
          fontSize={16}
          borderWidth={0}
          borderRadius={16}
          backgroundColor="gray.200"
          flexGrow={1}
          placeholder="weight"
        />

        <FormControl.Label>Reps</FormControl.Label>
        <Input
          onChangeText={(value) =>
            setData({ ...formData, reps: Number(value) })
          }
          keyboardType="number-pad"
          fontSize={16}
          borderWidth={0}
          borderRadius={16}
          backgroundColor="gray.200"
          flexGrow={1}
          placeholder="reps"
        />

        <Button onPress={() => submitForm()}>Add Set +</Button>
      </HStack>
    </FormControl>
  );
};

export default SetsInputForm;
