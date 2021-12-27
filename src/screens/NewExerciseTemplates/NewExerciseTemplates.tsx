import React, { useState, useRef, useContext } from 'react';
import { Box, Input, Text, Button, FormControl } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Exercise from '../../components/Exercise';
import NewWorkoutTemplateContext from '../../contexts/newWorkoutTemplateContext';

const exerciseInitialState = {
  name: '',
  sets: null,
  reps: null,
};

const NewExerciseTemplates = () => {
  const nameRef = useRef(null);
  const setsRef = useRef(null);
  const repsRef = useRef(null);
  const [exercise, setExercise] = useState<Exercise>(exerciseInitialState);
  const [errors, setErrors] = useState<ExerciseFormErrors>({});
  const { name, exerciseTemplates, setTemplateData } = useContext(
    NewWorkoutTemplateContext
  );

  /**
   * add exercise template to exercise template list
   */
  const addNewExerciseTemplate = () => {
    if (validateExercise(exercise)) {
      setTemplateData({
        name: name,
        exerciseTemplates: [...exerciseTemplates, exercise],
      });
      setExercise(exerciseInitialState);
      nameRef.current.clear();
      setsRef.current.clear();
      repsRef.current.clear();
    }
  };

  /**
   * check that exercise is valid
   *
   * @param exercise object with exercise fields
   * @returns boolean indicating if exercise is valid
   */
  const validateExercise = (exercise: Exercise) => {
    let nameErr;
    let setsErr;
    let repsErr;
    let valid = true;

    if (exercise.name === undefined || exercise.name === '') {
      nameErr = 'Invalid name';
      valid = false;
    }

    if (
      exercise.sets === undefined ||
      exercise.sets === null ||
      exercise.sets === 0
    ) {
      setsErr = 'Invalid sets';
      valid = false;
    }

    if (
      exercise.reps === undefined ||
      exercise.reps === null ||
      exercise.reps === 0
    ) {
      repsErr = 'Invalid reps';
      valid = false;
    }

    if (valid) {
      // clear errors
      setErrors({});
    } else {
      setErrors({ reps: repsErr, sets: setsErr, name: nameErr });
    }
    return valid;
  };

  return (
    <Box h="100%" flexDirection="column" px={6}>
      <Box flexDirection="column" pb={4}>
        <FormControl isInvalid={Object.keys(errors).length > 0}>
          <Box>
            <Text fontSize={24} fontWeight={600}>
              Add New Exercises
            </Text>
          </Box>

          <Box>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              ref={nameRef}
              onChangeText={(text) => setExercise({ ...exercise, name: text })}
              placeholder="name"
              p={3}
              size="lg"
              variant="rounded"
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage
                _text={{
                  fontSize: 'xs',
                }}
              >
                {errors.name}
              </FormControl.ErrorMessage>
            ) : null}
          </Box>

          <Box flexDirection="row" w="100%" pb={3}>
            <Box flexDirection="row">
              <Box pr={2} w="50%">
                <FormControl.Label>Sets</FormControl.Label>
                <Input
                  ref={setsRef}
                  onChangeText={(set) =>
                    setExercise({ ...exercise, sets: Number(set) })
                  }
                  placeholder="sets"
                  p={3}
                  size="lg"
                  variant="rounded"
                  keyboardType="decimal-pad"
                />
                {'sets' in errors ? (
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: 'xs',
                    }}
                  >
                    {errors.sets}
                  </FormControl.ErrorMessage>
                ) : null}
              </Box>

              <Box pr={2} w="50%">
                <FormControl.Label>Reps</FormControl.Label>
                <Input
                  ref={repsRef}
                  onChangeText={(reps) =>
                    setExercise({ ...exercise, reps: Number(reps) })
                  }
                  placeholder="reps"
                  p={3}
                  size="lg"
                  variant="rounded"
                  keyboardType="decimal-pad"
                />
                {'reps' in errors ? (
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: 'xs',
                    }}
                  >
                    {errors.reps}
                  </FormControl.ErrorMessage>
                ) : null}
              </Box>
            </Box>
          </Box>

          <Box>
            <Button
              _text={{ fontSize: 'md' }}
              w="100%"
              onPress={addNewExerciseTemplate}
            >
              Add
            </Button>
          </Box>
        </FormControl>
      </Box>
      <ScrollView
        _contentContainerStyle={{
          h: '100%',
        }}
      >
        {exerciseTemplates.map((exercise, idx) => {
          return <Exercise exercise={exercise} key={idx} />;
        })}
      </ScrollView>
    </Box>
  );
};

export default NewExerciseTemplates;
