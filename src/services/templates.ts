import axios from 'axios';

/**
 * @param {Workout} workout object
 */
const createWorkoutTemplate = async (workoutTemplate: WorkoutTemplate) => {
  const res = await axios.post(
    'ttp://192.168.1.68:8000/api/templates/workouts',
    workoutTemplate
  );
  return res.data;
};
