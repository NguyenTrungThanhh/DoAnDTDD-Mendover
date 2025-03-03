import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const GioiThieu = lazy(() => import('@/pages/GioiThieu'));
const SanPham = lazy(() => import('@/pages/SanPham'));
const TinTuc = lazy(() => import('@/pages/TinTuc'));
const LienHe = lazy(() => import('@/pages/LienHe'));
const NhaO = lazy(() => import('@/pages/NhaO'));
const CanHo = lazy(() => import('@/pages/CanHo'));
const BatDongSan = lazy(() => import('@/pages/BatDongSan'));
const TinNoiBat = lazy(() => import('@/pages/TinNoiBat'));

// Lazy load Admin pages

// Lazy load Display pages

// Admin Layout

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.GioiThieu, component: GioiThieu },
    { path: config.routes.SanPham, component: SanPham },
    { path: config.routes.TinTuc, component: TinTuc },
    { path: config.routes.LienHe, component: LienHe },
    { path: config.routes.NhaO, component: NhaO },
    { path: config.routes.CanHo, component: CanHo },
    { path: config.routes.BatDongSan, component: BatDongSan },
    { path: config.routes.TinNoiBat, component: TinNoiBat },

    // Admin Pages

    // Display Pages
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
