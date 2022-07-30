import { ActionKeys, MutationTypes } from '@/constants/enums/StoreKeys';
import { ActionContext } from 'vuex';
import { RootState } from '@/store/state';

export const actions = {
  [ActionKeys.GET_USER](
    { commit }: ActionContext<RootState, RootState>,
    params: any,
  ): void {
    commit(MutationTypes.UPDATE_USER, params);
  },
};
