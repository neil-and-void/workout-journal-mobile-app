interface WorkoutTemplate {
  id: number;
  name: string;
  exerciseTemplates: ExerciseTemplate[];
}

interface ExerciseTemplate {
  name?: string;
  reps?: number | null;
  sets?: number | null;
}

interface ExerciseTemplateFormErrors {
  name?: string;
  reps?: string;
  sets?: string;
}
