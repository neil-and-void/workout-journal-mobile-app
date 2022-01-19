import api from './api';

export const createSet = async (setData: ExerciseSet) => {
  const res = await api.post('/sets', setData);
  return res.data;
};

export const getSets = async (exerciseId: number) => {
  const res = await api.get(`/sets?exerciseId=${exerciseId}`);
  return res.data;
};
