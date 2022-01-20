import api from './api';
export default class AuthService {
  static signup = async (user: SignupCredentials) => {
    const res = await api.post(`/auth/signup`, user);
    return res.data;
  };

  static login = async (user: LoginCredentials) => {
    const res = await api.post(`/auth/token`, user);
    return res.data;
  };

  static refreshToken = async (refreshToken: string) => {
    const res = await api.post(`/auth/refreshToken`, {
      refreshToken,
    });
    return res.data;
  };
}
