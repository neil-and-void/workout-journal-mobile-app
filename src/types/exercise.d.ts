interface Exercise {
  id: number;
  workout_id: number;
  exercise_template_id: number;
}

interface ExerciseSession {
  exerciseTemplate: ExerciseTemplate | null;
  exercise: Exercise | null;
  sets: ExerciseSet[];
}
