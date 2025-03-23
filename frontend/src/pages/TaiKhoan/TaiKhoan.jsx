import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';
import SidebarAccount from '@/components/SidebarAccount';

function TaiKhoan() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return (
        <div className="mt-[129px]">
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Tài khoản</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Tài khoản</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto my-8 flex ">
                <div>
                    <SidebarAccount />
                </div>
                <div className="flex-1 pr-4 pl-8">
                    <h1 className="text-xl uppercase mb-4">Thông tin tài khoản</h1>
                    <div>
                        <p className="font-bold mb-4">
                            Họ tên: <span className="font-medium">{username}</span>
                        </p>
                        <p className="font-bold mb-4">
                            Email: <span className="font-medium">{email}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaiKhoan;
