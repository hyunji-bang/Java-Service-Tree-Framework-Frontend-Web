import { instance } from '@/api';
import list from '@/api/modules/getData';

export const api = {
  getData: list(instance),
};

export default {
  install: (app: any) => {
    app.config.globalProperties.$api = api;
  },
};
