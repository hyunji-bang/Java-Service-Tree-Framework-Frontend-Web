import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from '@/constants/enums/RoutePath';
import component from '*.vue';

const routeComponent = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/${name}.vue`);
const devopsChildrenComponent = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/components/DevOps/contents/${name}.vue`);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: RoutePath.홈,
  },
  {
    path: '/home',
    name: 'Home',
    component: routeComponent('HomeView'),
  },
  {
    path: '/DevOps',
    name: 'DevOps',
    component: routeComponent('DevOpsView'),
    children: [
      {
        path: '/DevOps/Home/Welcome',
        component: devopsChildrenComponent('WelcomeDevops'),
      },
      {
        path: '/DevOps/DevSupport/ALM',
        component: devopsChildrenComponent('AlmSupport'),
      },
      {
        path: '/DevOps/DevSupport/DevTools',
        component: devopsChildrenComponent('DevToolsSupport'),
      },
      {
        path: '/DevOps/AboutJSTF/WhatisJSTF',
        component: devopsChildrenComponent('WhatJSTF'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFIntroduction',
        component: devopsChildrenComponent('JSTFIntroduction'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFGoals',
        component: devopsChildrenComponent('JSTFGoal'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFUsage',
        component: devopsChildrenComponent('JSTFUsage'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFDemoSHV',
        component: devopsChildrenComponent('JSTFShv'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFDemoSIV',
        component: devopsChildrenComponent('JSTFSiv'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFDemoSDV',
        component: devopsChildrenComponent('JSTFSdv'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFDemoTIV',
        component: devopsChildrenComponent('JSTFTiv'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFFAQ',
        component: devopsChildrenComponent('JSTFFaq'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFLicense',
        component: devopsChildrenComponent('JSTFLicense'),
      },
      {
        path: '/DevOps/AboutJSTF/JSTFDownload',
        component: devopsChildrenComponent('JSTFDownload'),
      },
      {
        path: '/DevOps/Community/Contributors',
        component: devopsChildrenComponent('ComuContributor'),
      },
    ],
  },
];

export default routes;
