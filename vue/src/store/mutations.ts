import { RootState } from '@/store/state';
import { MutationTypes, StateKeys } from '@/constants/enums/StoreKeys';
import { requiredDataTable } from '@/constants/interface/index';
import $ from 'jquery';
import 'datatables.net-responsive/js/dataTables.responsive.min.js';
import 'datatables.net-select';

export const mutations = {
  [MutationTypes.UPDATE_USER]: (state: RootState, payload: any): void => {
    state[StateKeys.USER_INFO] = payload;
  },
  [MutationTypes.DATA_TABLE_LOAD]: (
    state: any,
    { dataUrl, dataSrc, dataColumns }: requiredDataTable,
  ) => {
    state.dataTable = $('#jstreeTable').dataTable({
      ajax: {
        url: state.isDevelopingToRoute + dataUrl,
        dataSrc: dataSrc,
      },
      destroy: true,
      processing: true,
      responsive: true,
      columns: dataColumns,
    });
  },
  [MutationTypes.NODE_UPDATE]: (state: any) => {
    state.nodeUpdate = !state.nodeUpdate;
  },
};
