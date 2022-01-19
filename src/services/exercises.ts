import api from './api';

export const createNewExercise = async (
  workoutId: number,
  exerciseTemplateId: number
) => {
  const res = await api.post(
    `/exercises?workoutId=${workoutId}&exerciseTemplateId=${exerciseTemplateId}`
  );
  return res.data;
};

export const getExercise = async (exerciseId: number) => {
  const res = await api.get(`/exercises/${exerciseId}`);
  return res.data;
};
