import api from './api';

export default class SetService {
  /**
   * POST request create new set
   * @param setData content of new set
   * @returns
   */
  static createSet = async (setData: ExerciseSet) => {
    const res = await api.post('/sets', setData);
    return res.data;
  };

  /**
   * GET request sets of an exercise
   * @param exerciseId if of exercise to get sets of
   * @returns sets with exercise id equal to exerciseId
   */
  static getSets = async (exerciseId: number) => {
    const res = await api.get(`/sets?exerciseId=${exerciseId}`);
    return res.data;
  };

  /**
   * PUT request to update set data
   * @param setId id of the set to update
   * @param reps updated reps value
   * @param weight updated weight value
   * @returns response of update set endpoint
   */
  static updateSet = async (setId: number, reps: number, weight: number) => {
    const res = await api.put(`/sets/${setId}`, { reps, weight });
    return res.data;
  };
}
