import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from '@/constants/enums/RoutePath';

const routeComponent = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/${name}.vue`);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: RoutePath.홈,
  },
  {
    path: RoutePath.홈,
    name: 'Home',
    component: routeComponent('HomeView'),
  },
  {
    path: '/DevOps/:path',
    name: 'DevOps',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'ALM',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'DevTools',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'WhatIsJSTF',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFIntroduction',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFGoals',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFUsage',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFDemoSHV',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFDemoSIV',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFDemoSDV',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFDemoTIV',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFFAQ',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFLicense',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'JSTFDownload',
    component: routeComponent('DevOps'),
  },
  {
    path: '/DevOps/:path',
    name: 'Contributors',
    component: routeComponent('DevOps'),
  },
];

export default routes;
