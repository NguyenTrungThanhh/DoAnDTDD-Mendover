import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';
import SidebarAccount from '@/components/SidebarAccount';

function DoiMatKhau() {
    const handleChangePassword = async () => {
        console.log(1);
    };

    return (
        <div className="mt-[129px]">
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Đổi mật khẩu</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p>Tài khoản</p>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Đổi mật khẩu</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto my-8 flex ">
                <div>
                    <SidebarAccount />
                </div>
                <div className="flex-1 pr-4 pl-8">
                    <h1 className="text-xl uppercase mb-4">Đổi mật khẩu</h1>
                    <p>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự</p>
                    <div className="mt-3">
                        <form action="" onSubmit={handleChangePassword}>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-2 text-sm font-bold">
                                        Mật khẩu cũ <span className="text-[#f00] font-bold">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-[464px] px-5 py-2 border border-[#e1e1e1] rounded outline-none focus:ring-0"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-2 text-sm font-bold">
                                        Mật khẩu mới <span className="text-[#f00] font-bold">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-[464px] px-5 py-2 border border-[#e1e1e1] rounded outline-none focus:ring-0"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-2 text-sm font-bold">
                                        Xác nhận lại mật khẩu <span className="text-[#f00] font-bold">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-[464px] px-5 py-2 border border-[#e1e1e1] rounded outline-none focus:ring-0"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-44 px-5 py-3 bg-primary text-white rounded-md hover:opacity-75"
                                >
                                    Đặt lại mật khẩu
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoiMatKhau;
