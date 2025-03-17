import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faCartShopping,
    faChevronDown,
    faRightFromBracket,
    faSearch,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

function Header() {
    return (
        <div className="flex justify-center items-center gap-32 h-32">
            <Link to={config.routes.home}>
                <div>
                    <img src={assets.logo} alt="" />
                </div>
            </Link>
            <div className="flex justify-center items-center gap-8 text-sm uppercase font-bold tracking-widest relative z-20">
                <div>
                    <Link to={config.routes.home}>
                        <h1
                            className={`hover:text-primary py-5 ${
                                location.pathname === config.routes.home ? 'text-primary' : ''
                            }`}
                        >
                            Trang chủ
                        </h1>
                    </Link>
                </div>

                <div>
                    <Link to={config.routes.GioiThieu}>
                        <h1
                            className={`hover:text-primary py-5 ${
                                location.pathname === config.routes.GioiThieu ? 'text-primary' : ''
                            }`}
                        >
                            Giới thiệu
                        </h1>
                    </Link>
                </div>

                <div className="relative group">
                    <Link to={config.routes.SanPham}>
                        <div
                            className={`flex items-center gap-1 hover:text-primary ${
                                [config.routes.SanPham, config.routes.NhaO, config.routes.CanHo].includes(
                                    location.pathname,
                                )
                                    ? 'text-primary'
                                    : ''
                            }`}
                        >
                            <h1 className="py-[54px] hover:text-primary">Sản phẩm</h1>
                            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                        </div>
                    </Link>
                    <div className="absolute left-0 top-full min-w-[200px] bg-white shadow-lg hidden group-hover:block transition-all duration-200 z-10">
                        <Link
                            to={config.routes.NhaO}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                            Nhà ở
                        </Link>
                        <Link
                            to={config.routes.CanHo}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                            Căn hộ
                        </Link>
                    </div>
                </div>

                <div className="relative group">
                    <Link to={config.routes.TinTuc}>
                        <div
                            className={`flex items-center gap-1 hover:text-primary ${
                                [config.routes.TinTuc, config.routes.BatDongSan, config.routes.TinNoiBat].includes(
                                    location.pathname,
                                )
                                    ? 'text-primary'
                                    : ''
                            }`}
                        >
                            <h1 className="py-[54px]">Tin tức</h1>
                            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                        </div>
                    </Link>
                    <div className="absolute left-0 top-full min-w-[200px] bg-white shadow-lg hidden group-hover:block transition-all duration-200 z-10">
                        <Link
                            to={config.routes.BatDongSan}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                            Bất động sản
                        </Link>
                        <Link
                            to={config.routes.TinNoiBat}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                            Tin nổi bật
                        </Link>
                    </div>
                </div>

                <div>
                    <Link to={config.routes.LienHe}>
                        <h1 className="hover:text-primary py-5">Liên hệ</h1>
                    </Link>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <div className="relative">
                    <input
                        name="search"
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary w-64"
                    />
                    <button
                        id="search"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div>
                    <TippyHeadless
                        interactive
                        // visible
                        placement="bottom-end"
                        render={(attrs) => (
                            <div
                                className="flex flex-col w-56 bg-white text-sm p-3 mt-2 -mr-3 shadow-lg shadow-black/50"
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Link to={config.routes.DangNhap}>
                                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-primary hover:text-white cursor-pointer duration-[350ms]">
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        <h1>Đăng nhập</h1>
                                    </div>
                                </Link>
                                <Link to={config.routes.DangKy}>
                                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-primary hover:text-white cursor-pointer duration-[350ms]">
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        <h1>Đăng ký</h1>
                                    </div>
                                </Link>
                            </div>
                        )}
                    >
                        <FontAwesomeIcon className="p-2 cursor-pointer" icon={faUser} />
                    </TippyHeadless>
                </div>

                <Tippy content="Giỏ hàng">
                    <div>
                        <FontAwesomeIcon className="p-2 cursor-pointer" icon={faCartShopping} />
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default Header;
