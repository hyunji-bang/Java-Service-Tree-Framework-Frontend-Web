import { API_JSTF_TIV } from '@/constants/enums/index';
import { changeNodePayload } from '@/constants/interface';
import qs from 'qs';

export default {
  getMonitor: (instance: any) => ({
    async list() {
      const { data } = await instance.get(`${API_JSTF_TIV}monitor/list.action`);
      return data;
    },
  }),
  addNode: (instance: any) => ({
    async list(payload: changeNodePayload) {
      const { data } = await instance({
        method: 'post',
        url: `${API_JSTF_TIV}addNode.action`,
        data: qs.stringify({
          ref: payload.ref,
          c_position: payload.c_position,
          c_title: payload.c_title,
          c_type: payload.c_type,
        }),
      });
      return data;
    },
  }),
  removeNode: (instance: any) => ({
    async list(payload: changeNodePayload) {
      const { data } = await instance({
        method: 'post',
        url: `${API_JSTF_TIV}removeNode.action`,
        data: qs.stringify({
          c_id: payload.c_id,
        }),
      });
      return data;
    },
  }),
  alterNode: (instance: any) => ({
    async list(payload: changeNodePayload) {
      const { data } = await instance({
        method: 'post',
        url: `${API_JSTF_TIV}alterNode.action`,
        data: qs.stringify({
          c_id: payload.c_id,
          c_title: payload.c_title,
          c_type: payload.c_type,
        }),
      });
      return data;
    },
  }),
  alterNodeType: (instance: any) => ({
    async list(payload: changeNodePayload) {
      const { data } = await instance({
        method: 'post',
        url: `${API_JSTF_TIV}alterNodeType.action`,
        data: qs.stringify({
          c_id: payload.c_id,
          c_title: payload.c_title,
          c_type: payload.c_type,
        }),
      });
      return data;
    },
  }),
  moveNode: (instance: any) => ({
    async list(payload: changeNodePayload) {
      const { data } = await instance({
        method: 'post',
        url: `${API_JSTF_TIV}moveNode.action`,
        data: qs.stringify({
          c_id: payload.c_id,
          ref: payload.ref,
          c_position: payload.c_position,
          copy: 0,
          multiCounter: 0,
        }),
      });
      return data;
    },
  }),
};
