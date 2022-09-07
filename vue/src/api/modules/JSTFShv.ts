import { API_JSTF_SHV } from '@/constants/enums/index';
import { changeNodePayload } from '@/constants/interface';
import qs from 'qs';

export default {
  getMonitor: (instance: any) => ({
    async list() {
      const { data } = await instance.get(`${API_JSTF_SHV}getMonitor.do`);
      return data;
    },
  }),
  addNode: (instance: any) => ({
    async list(payload: changeNodePayload) {
      const { data } = await instance({
        method: 'post',
        url: `${API_JSTF_SHV}addNode.do`,
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
        url: `${API_JSTF_SHV}removeNode.do`,
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
        url: `${API_JSTF_SHV}alterNode.do`,
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
        url: `${API_JSTF_SHV}alterNodeType.do`,
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
        url: `${API_JSTF_SHV}moveNode.do`,
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
