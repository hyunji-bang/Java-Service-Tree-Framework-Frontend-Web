import { StateKeys } from '@/constants/enums/StoreKeys';
import { storeKey } from 'vuex';

export const state = {
  [StateKeys.USER_INFO]: { name: 'arms' },
  [StateKeys.NAV_MENU_LIST]: [
    {
      title: 'Welcome',
      icon: 'bi bi-house-door-fill',
      children: [],
    },
    {
      title: 'Dev Support',
      icon: 'bi bi-motherboard-fill',
      children: ['ALM', 'Dev Tools'],
    },
    {
      title: 'About JSTF',
      icon: 'bi bi-mortarboard-fill',
      children: [
        'What is JSTF?',
        'JSTF Introduction',
        'JSTF Goals',
        'JSTF Usage',
        'JSTF Demo SHV',
        'JSTF Demo SIV',
        'JSTF Demo SDV',
        'JSTF Demo TIV',
        'JSTF FAQ',
        'JSTF License',
        'JSTF Download',
      ],
    },
    {
      title: 'Community',
      icon: 'bi bi-people-fill',
      children: ['Contributors'],
    },
  ],
  [StateKeys.DEVELOPING_TO_ROUTE]: '/auth-anon',
  [StateKeys.DATA_TABLE]: null,
  [StateKeys.NODE_UPDATE]: false,
};

export type RootState = typeof state;
