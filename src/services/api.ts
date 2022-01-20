import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { BASE_URL_LOCAL } from '../../config/config';

const instance = axios.create({
  baseURL: BASE_URL_LOCAL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('accessToken');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (
      originalConfig.url !== '/auth/token' &&
      originalConfig.url !== '/auth/signup' &&
      err.response
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post('/auth/refreshtoken', {
            refreshToken: await SecureStore.getItemAsync('refreshToken'),
          });

          const { accessToken } = rs.data;
          await SecureStore.setItemAsync('accessToken', accessToken);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
