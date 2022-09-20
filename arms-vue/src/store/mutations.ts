import { RootState } from '@/store/state';
import { MutationTypes, StateKeys } from '@/constants/enums/StoreKeys';

export const mutations = {
  [MutationTypes.UPDATE_USER]: (state: RootState, payload: any): void => {
    state[StateKeys.USER_INFO] = payload;
  },
};
