import { Box, Button, Text } from 'native-base';
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import WorkoutTemplate from '../WorkoutTemplate';

interface WorkoutTemplateListProps {
  handleDelete: (workoutTemplateId: number) => Promise<void>;
  data: WorkoutTemplates;
  activeWorkout: Workout | null;
  handleWorkoutTemplateClick: (
    isActiveWorkout: boolean,
    workoutTemplate: WorkoutTemplate
  ) => void;
}

const WorkoutTemplateList = ({
  handleDelete,
  data,
  activeWorkout,
  handleWorkoutTemplateClick,
}: WorkoutTemplateListProps) => {
  if (data) {
    console.log('shdfksdj', data);
    return (
      <>
        {data.workoutTemplates.map((workoutTemplate, idx) => (
          <Box pb={2} key={idx}>
            <Swipeable
              renderRightActions={() => (
                <Button
                  onPress={() => handleDelete(workoutTemplate.id)}
                  borderRadius={16}
                  backgroundColor="red.500"
                >
                  Delete
                </Button>
              )}
            >
              <WorkoutTemplate
                workout={workoutTemplate}
                isActive={false} // TODO: change the way activeness is defined
                onPress={() =>
                  handleWorkoutTemplateClick(true, workoutTemplate)
                }
              />
            </Swipeable>
          </Box>
        ))}
      </>
    );
  }
  return <Text>Could not retrieve workout templates</Text>;
};

export default WorkoutTemplateList;
