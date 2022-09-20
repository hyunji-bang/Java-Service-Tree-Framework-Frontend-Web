import { ActionTree } from 'vuex';
import { RootState } from '@/store/state';
import { StateKeys } from '@/constants/enums/StoreKeys';

export const getters = {
  [StateKeys.USER_INFO]: (state: RootState) => state[StateKeys.USER_INFO],
};
