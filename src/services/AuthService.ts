import axios from 'axios';

export default class AuthService {
  static signup = async (user: SignupCredentials) => {
    const res = await axios.post('http://192.168.1.73:4000/graphql', {
      query: `
      mutation signup ({ $email: String, $password: String, $confirmPassword: String, $firstname: String }) {
        signup( { email: $email, password: $password, confirmPassword: confirmPassword, firstname: $firstname } ) {
            accessToken
            refreshToken
        }
    }
    `,
    });
    return res.data;
  };

  static login = async (user: LoginCredentials) => {
    const res = await axios.post(
      'http://192.168.1.73:4000/graphql',
      {
        query: `
          mutation ($email: String, $password: String) {
            login(email: $email, password: $password) {
              accessToken
              refreshToken
            }
          }`,
        variables: { email: user.email, password: user.password },
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data.data;
  };
}
