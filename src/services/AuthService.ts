import axios from 'axios';

export default class AuthService {
  static signup = async (user: SignupCredentials) => {
    const res = await axios.post(
      `http://192.168.1.72:8000/api/auth/signup`,
      user
    );
    return res.data;
  };

  static login = async (user: LoginCredentials) => {
    const res = await axios.post(
      `http://192.168.1.72:8000/api/auth/token`,
      user
    );
    return res.data;
  };

  static refreshToken = async (refreshToken: string) => {
    const res = await axios.post(`127.0.0.1:8000/api/auth/refreshToken`, {
      refreshToken,
    });
    return res.data;
  };
}
