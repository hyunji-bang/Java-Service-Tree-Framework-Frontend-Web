import { instance } from '@/api';
import shvAPiList from '@/api/modules/JSTFShv';
import sivAPiList from '@/api/modules/JSTFSiv';
import tivAPiList from '@/api/modules/JSTFTiv';

export const api = {
  shv: {
    getMonitor: shvAPiList.getMonitor(instance),
    addNode: shvAPiList.addNode(instance),
    removeNode: shvAPiList.removeNode(instance),
    alterNode: shvAPiList.alterNode(instance),
    alterNodeType: shvAPiList.alterNodeType(instance),
    moveNode: shvAPiList.moveNode(instance),
  },
  //siv, sdv 같은 api 사용
  siv: {
    getMonitor: sivAPiList.getMonitor(instance),
    addNode: sivAPiList.addNode(instance),
    removeNode: sivAPiList.removeNode(instance),
    alterNode: sivAPiList.alterNode(instance),
    alterNodeType: sivAPiList.alterNodeType(instance),
    moveNode: sivAPiList.moveNode(instance),
  },
  tiv: {
    getMonitor: tivAPiList.getMonitor(instance),
    addNode: tivAPiList.addNode(instance),
    removeNode: tivAPiList.removeNode(instance),
    alterNode: tivAPiList.alterNode(instance),
    alterNodeType: tivAPiList.alterNodeType(instance),
    moveNode: tivAPiList.moveNode(instance),
  },
};

export default {
  install: (app: any) => {
    app.config.globalProperties.$api = api;
  },
};
