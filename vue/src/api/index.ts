import axios from 'axios';
import { setInterceptors } from '@/api/interceptor';

const createInstance = function () {
  const instance = axios.create({
    baseURL: '/auth-anon',
  });
  return setInterceptors(instance);
};

export const instance = createInstance();
