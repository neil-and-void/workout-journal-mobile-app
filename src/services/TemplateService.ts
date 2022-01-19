import api from './api';

export default class TemplateService {
  /**
   * create workout in backend
   *
   * @param {Workout} newly created workout template
   */
  static createWorkoutTemplate = async (workoutTemplate: WorkoutTemplate) => {
    const res = await api.post('/templates/workouts', workoutTemplate);
    return res.data;
  };

  /**
   * get workout templates
   *
   * @returns {Workout[]} list of workout templates
   */
  static getWorkoutTemplates = async () => {
    const res = await api.get('/templates/workouts');
    return res.data;
  };

  /**
   * get exercise templates
   *
   * @param workoutTemplateId id of the workout to get the exercise templates for
   * @returns {ExerciseTemplate[]}
   */
  static getExercisesTemplates = async (workoutTemplateId: number) => {
    const res = await api.get(
      `/templates/exercises?workoutTemplateId=${workoutTemplateId}`
    );
    return res.data;
  };

  /**
   * delete workout template
   *
   * @param workoutTemplateId id of the workout template to delete
   * @returns
   */
  static deleteWorkoutTemplate = async (workoutTemplateId: number) => {
    const res = await api.delete(`/templates/workouts/${workoutTemplateId}`);
    return res.data;
  };
}
