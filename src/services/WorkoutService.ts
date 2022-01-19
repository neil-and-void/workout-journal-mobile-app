import api from './api';

export default class WorkoutService {
  /**
   *
   * @param workoutTemplateId
   * @returns
   */
  static startNewWorkout = async (workoutTemplateId: number) => {
    const res = await api.post('/workouts', { workoutTemplateId });
    return res.data;
  };

  /**
   *
   * @returns workout data
   */
  static getActiveWorkout = async () => {
    const res = await api.get('/workouts/active');
    return res.data;
  };

  // TODO
  static endWorkout = () => {};
}
