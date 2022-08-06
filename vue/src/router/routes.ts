import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from '@/constants/enums/RoutePath';

const routeComponent = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/${name}.vue`);

const routes: RouteRecordRaw[] = [
  //{
  //  path: '/',
  //  redirect: RoutePath.홈,
  //},
  {
    path: '/',
    name: 'Home',
    component: routeComponent('HomeView'),
  },
  {
    path: '/DevOps/:path',
    name: 'DevOps',
    component: routeComponent('DevOpsView'),
  },
];

export default routes;
