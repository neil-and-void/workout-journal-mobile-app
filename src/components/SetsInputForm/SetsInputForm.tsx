import { useMutation } from '@apollo/client';
import { Button, FormControl, HStack, Input } from 'native-base';
import React, { useState } from 'react';
import { CREATE_SET } from '../../graphql/mutations/sets';

interface SetsInput {
  weight: null | number;
  reps: null | number;
}

interface SetsInputFormProps {
  id: number;
  onSubmit: (exerciseSet: ExerciseSet) => void;
}

const SetsInputForm = ({ id, onSubmit }: SetsInputFormProps) => {
  const [formData, setData] = useState<SetsInput>({
    weight: null,
    reps: null,
  });
  const [createSet] = useMutation(CREATE_SET);

  const submitForm = async () => {
    const { data } = await createSet({
      variables: {
        set: {
          exerciseId: id,
          weight: formData.weight,
          reps: formData.reps,
        },
      },
    });
    onSubmit(data.createSet);
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
