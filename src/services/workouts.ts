import api from './api';

/**
 *
 * @param workoutTemplateId
 * @returns
 */
export const startNewWorkout = async (workoutTemplateId: number) => {
  const res = await api.post('/workouts', { workoutTemplateId });
  return res.data;
};

/**
 *
 * @returns workout data
 */
export const getActiveWorkout = async () => {
  const res = await api.get('/workouts/active');
  return res.data;
};

// TODO
export const endWorkout = () => {};
