import config from '@/configs';
import { Link } from 'react-router-dom';

function SidebarAccount() {
    const username = localStorage.getItem('username');

    return (
        <div className="w-[264px] pr-4 border-r-2">
            <div>
                <h1 className="text-xl font-medium uppercase">Trang tài khoản</h1>
                <p className="font-semibold">
                    Xin chào, <span className="text-primary font-medium">{username}</span> !
                </p>
            </div>
            <ul className="mt-4 font-medium">
                <li
                    className={`hover:text-primary ${
                        location.pathname === config.routes.TaiKhoan ? 'text-primary' : ''
                    }`}
                >
                    <Link to={config.routes.TaiKhoan}>
                        <p className="mb-5">Thông tin tài khoản</p>
                    </Link>
                </li>
                <li
                    className={`hover:text-primary ${
                        location.pathname === `${config.routes.TaiKhoan}${config.routes.DoiMatKhau}`
                            ? 'text-primary'
                            : ''
                    }`}
                >
                    <Link to={`${config.routes.TaiKhoan}${config.routes.DoiMatKhau}`}>
                        <p className="mb-5">Đổi mật khẩu</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarAccount;
