interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  firstname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Workout {
  name: string;
  exercises: Exercise[];
}

interface Exercise {
  name: string;
  reps: number | null;
  sets: number | null;
}

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

interface User {
  signedOut: boolean;
}

interface UserContext {
  signedOut: boolean;
  setUserData: (user: User) => void;
}

interface WorkoutTemplateContext {
  name: string;
  exerciseTemplates: ExerciseTemplate[];
  setTemplateData: (workoutTemplate: WorkoutTemplate) => void;
}
interface ExerciseFormErrors {
  name?: string;
  reps?: string;
  sets?: string;
}

interface WorkoutTemplateFormErrorsContext {
  error: string | null;
}
