interface WorkoutSessionContext {
  activeWorkout: Workout | null;
  workoutData: WorkoutData[];
  setWorkoutSessionData: (workout: Workout) => void;
}

interface ViewWorkoutTemplateContext {
  id: number;
  name: string;
  exerciseTemplates: ExerciseTemplate[];
  setViewWorkoutTemplateData: (workoutTemplate: WorkoutTemplate) => void;
}
interface UserContext {
  signedOut: boolean;
  setUserData: (user: User) => void;
}

interface ExerciseData {
  exerciseTemplate: ExerciseTemplate;
  sets: ExerciseSet[];
}

interface WorkoutData {
  id: number;
  exercises: ExerciseData[];
}

interface ExerciseContext {
  workout: WorkoutData[];
  exerciseTemplate: ExerciseTemplate;
  id: number;
  sets: ExerciseSet[];
  setExerciseData: (
    id: number,
    exerciseTemplate: ExerciseTemplate,
    sets: Sets[]
  ) => void;
}

interface ViewWorkoutContext {
  workout: Workout | null;
  workoutData: WorkoutData[];
  setViewWorkoutData: (workout: WorkoutData) => void;
}
