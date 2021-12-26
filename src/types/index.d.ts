interface Login {
  email: string;
  password: string;
}

interface Signup {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

interface User {
  signedIn: boolean;
  refreshToken: string | null | undefined;
  authToken: string | null | undefined;
}
