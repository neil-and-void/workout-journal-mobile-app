interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  name: string;
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
  refreshToken: string | null | undefined;
  accessToken: string | null | undefined;
}

interface UserContext {
  signedOut: boolean;
  refreshToken: string | null | undefined;
  accessToken: string | null | undefined;
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
