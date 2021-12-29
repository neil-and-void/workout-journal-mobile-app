interface WorkoutSessionContext {
  workout: Workout | null;
  setWorkoutSessionData: (workout: Workout) => void;
}

interface WorkoutTemplateContext {
  id?: number | null;
  name: string;
  exerciseTemplates: ExerciseTemplate[];
  setTemplateData: (workoutTemplate: WorkoutTemplate) => void;
}
interface UserContext {
  signedOut: boolean;
  setUserData: (user: User) => void;
}
