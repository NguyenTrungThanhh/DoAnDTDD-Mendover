import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
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
                        <h1 className="hover:text-primary py-5">Trang chủ</h1>
                    </Link>
                </div>
                <div>
                    <Link to={config.routes.GioiThieu}>
                        <h1 className="hover:text-primary py-5">Giới thiệu</h1>
                    </Link>
                </div>
                <div className="relative group">
                    <Link to={config.routes.SanPham}>
                        <div className="flex items-center gap-1 hover:text-primary">
                            <h1 className="py-5">Sản phẩm</h1>
                            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                        </div>
                    </Link>
                    <div className="absolute left-0 top-full min-w-[200px] bg-white shadow-lg rounded-lg hidden group-hover:block transition-all duration-200 z-10">
                        <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary hover:rounded-bl-lg hover:rounded-br-lg">
                            Căn hộ
                        </Link>
                        <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary hover:rounded-bl-lg hover:rounded-br-lg">
                            Nhà ở
                        </Link>
                    </div>
                </div>

                <div>
                    <Link to={config.routes.TinTuc}>
                        <h1 className="hover:text-primary py-5">Tin tức</h1>
                    </Link>
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
                    <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
                </div>
                <div>
                    <FontAwesomeIcon className="cursor-pointer" icon={faCartShopping} />
                </div>
            </div>
        </div>
    );
}

export default Header;
