import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const GioiThieu = lazy(() => import('@/pages/GioiThieu'));
const SanPham = lazy(() => import('@/pages/SanPham'));
const TinTuc = lazy(() => import('@/pages/TinTuc'));
const LienHe = lazy(() => import('@/pages/LienHe'));

// Lazy load Admin pages

// Lazy load Display pages

// Admin Layout

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.GioiThieu, component: GioiThieu },
    { path: config.routes.SanPham, component: SanPham },
    { path: config.routes.TinTuc, component: TinTuc },
    { path: config.routes.LienHe, component: LienHe },

    // Admin Pages

    // Display Pages
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
