import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from '@/constants/enums/RoutePath';

const routeComponent = (name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@views/${name}.vue`);

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
];

export default routes;
