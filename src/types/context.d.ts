interface WorkoutSessionContext {
  workout: Workout | null;
  setWorkoutSessionData: (workout: Workout) => void;
}

interface ViewWorkoutTemplateContext {
  id: number;
  name: string;
  exerciseTemplates: ExerciseTemplate[];
  setTemplateData: (workoutTemplate: WorkoutTemplate) => void;
}
interface UserContext {
  signedOut: boolean;
  setUserData: (user: User) => void;
}

interface ExerciseContext {
  exerciseTemplate: ExerciseTemplate | null;
  exercise: Exercise | null;
  sets: Set[];
  setExerciseData: (
    exercise: Exercise,
    exerciseTemplate: ExerciseTemplate,
    sets: Sets[]
  ) => void;
}
