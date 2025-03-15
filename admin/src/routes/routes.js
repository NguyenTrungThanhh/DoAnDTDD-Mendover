import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const AddNhaO = lazy(() => import('@/pages/AddNhaO'));
const ListNhaO = lazy(() => import('@/pages/ListNhaO'));
const AddCanHo = lazy(() => import('@/pages/AddCanHo'));
const ListCanHo = lazy(() => import('@/pages/ListCanHo'));
const AddTinTuc = lazy(() => import('@/pages/AddTinTuc'));
const ListTinTuc = lazy(() => import('@/pages/ListTinTuc'));

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.addNhaO, component: AddNhaO },
    { path: config.routes.listNhaO, component: ListNhaO },
    { path: config.routes.addCanHo, component: AddCanHo },
    { path: config.routes.listCanHo, component: ListCanHo },
    { path: config.routes.addTinTuc, component: AddTinTuc },
    { path: config.routes.listTinTuc, component: ListTinTuc },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
