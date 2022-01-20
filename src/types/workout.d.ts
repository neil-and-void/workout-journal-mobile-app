interface Workout {
  id: number;
  name: string;
  started: string;
  active: boolean;
  workout_template_id: number;
  exercises: object[];
}

interface WorkoutData {
  sets: ExerciseSet[];
  exerciseTemplate: ExerciseTemplate;
}

interface WorkoutSession {
  workout: Workout | null;
  workoutData: WorkoutData[];
}
