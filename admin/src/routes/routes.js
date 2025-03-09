import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const AddNhaO = lazy(() => import('@/pages/AddNhaO'));
const ListNhaO = lazy(() => import('@/pages/ListNhaO'));

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.addNhaO, component: AddNhaO },
    { path: config.routes.listNhaO, component: ListNhaO },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
