import api from './api';

export default class WorkoutService {
  /**
   * POST request start a new workout
   * @param workoutTemplateId
   * @returns
   */
  static startNewWorkout = async (workoutTemplateId: number) => {
    const res = await api.post('/workouts', { workoutTemplateId });
    return res.data;
  };

  /**
   * GET request workout to retrieve
   * @param workoutId id of the workout to get
   * @returns workout
   */
  static getWorkout = async (workoutId: number) => {
    const res = await api.get(`/workouts/${workoutId}`);
    return res.data;
  };

  /**
   * GET workouts of the user
   * @param page
   * @param count
   * @returns list of workouts sorted by most recent
   */
  static getWorkouts = async (page: number, count: number) => {
    const res = await api.get('/workouts');
    return res.data;
  };

  /**
   * GET data of active workout
   * @returns workout data
   */
  static getActiveWorkout = async () => {
    const res = await api.get('/workouts/active');
    return res.data;
  };

  /**
   * PUT set current active workout to inactive
   * @returns response of the endActiveWorkout endpoint
   */
  static endWorkout = async () => {
    const res = await api.get('/workouts/endActiveWorkout');
    return res.data;
  };
}
