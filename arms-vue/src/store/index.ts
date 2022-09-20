import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { RootState, state } from '@/store/state';
import { actions } from '@/store/actions';
import { mutations } from '@/store/mutations';
import { getters } from '@/store/getters';

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state,
  actions,
  mutations,
  getters,
});

export function useStore() {
  return baseUseStore(key);
}
