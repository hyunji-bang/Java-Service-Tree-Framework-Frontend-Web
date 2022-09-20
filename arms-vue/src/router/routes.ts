import { RouteRecordRaw } from 'vue-router';
import { RoutePath } from '@/constants/enums/RoutePath';

const routeComponent = (view: string, name: string) => () =>
  import(/* webpackChunkName: "[request]" */ `@/views/${view}/${name}.vue`);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: RoutePath.홈,
  },
  {
    path: '/home',
    name: 'Home',
    component: routeComponent('Home', 'HomeView'),
  },
];

export default routes;
