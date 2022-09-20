import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from '@/constants/enums/RoutePath';

const routeComponent = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/${name}.vue`);
const devopsChildrenComponent = (page: string, name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/contents/${page}/${name}.vue`);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: RoutePath.홈,
  },
  {
    path: '/',
    name: 'DevOps',
    component: routeComponent('DevOpsView'),
    children: [
      {
        path: '/Welcome',
        component: devopsChildrenComponent('Home', 'WelcomeDevops'),
      },
      {
        path: '/DevSupport/ALM',
        component: devopsChildrenComponent('DevSupport', 'AlmSupport'),
      },
      {
        path: '/DevSupport/DevTools',
        component: devopsChildrenComponent('DevSupport', 'DevToolsSupport'),
      },
      {
        path: '/AboutJSTF/WhatisJSTF',
        component: devopsChildrenComponent('AboutJSTF', 'WhatJSTF'),
      },
      {
        path: '/AboutJSTF/JSTFIntroduction',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFIntroduction'),
      },
      {
        path: '/AboutJSTF/JSTFGoals',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFGoal'),
      },
      {
        path: '/AboutJSTF/JSTFUsage',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFUsage'),
      },
      {
        path: '/AboutJSTF/JSTFDemoSHV',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFShv'),
      },
      {
        path: '/AboutJSTF/JSTFDemoSIV',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFSiv'),
      },
      {
        path: '/AboutJSTF/JSTFDemoSDV',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFSdv'),
      },
      {
        path: '/AboutJSTF/JSTFDemoTIV',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFTiv'),
      },
      {
        path: '/AboutJSTF/JSTFFAQ',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFFaq'),
      },
      {
        path: '/AboutJSTF/JSTFLicense',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFLicense'),
      },
      {
        path: '/AboutJSTF/JSTFDownload',
        component: devopsChildrenComponent('AboutJSTF', 'JSTFDownload'),
      },
      {
        path: '/Community/Contributors',
        component: devopsChildrenComponent('Community', 'ComuContributor'),
      },
    ],
  },
];

export default routes;
