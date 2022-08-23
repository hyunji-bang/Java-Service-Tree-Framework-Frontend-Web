import { StateKeys } from '@/constants/enums/StoreKeys';

export const state = {
  [StateKeys.USER_INFO]: { name: 'arms' },
  navMenuList: [
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
  isDevelopingToRoute: '/auth-anon',
  dataTable: null,
};

export type RootState = typeof state;
