interface Exercise {
  id: number;
  workout_id: number;
  exercise_template_id: number;
}

interface ExerciseSession {
  id?: number | null;
  exerciseTemplate: ExerciseTemplate | null;
  sets: ExerciseSet[];
}
