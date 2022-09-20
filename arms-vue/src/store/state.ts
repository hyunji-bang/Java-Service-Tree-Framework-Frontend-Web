import { StateKeys } from '@/constants/enums/StoreKeys';

export const state = {
  [StateKeys.USER_INFO]: { name: 'arms' },
};

export type RootState = typeof state;
