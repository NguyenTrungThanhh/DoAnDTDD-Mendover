import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';
import CategoryProduct from '@/components/CategoryProduct';

function SanPham() {
    return (
        <div>
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Tất cả sản phẩm</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Tất cả sản phẩm</p>
                </div>
            </div>
            <div className="py-16">
                <div className="w-3/4 m-auto flex">
                    <div className="w-[300px] px-[15px]">
                        <CategoryProduct />
                    </div>
                    <div className="px-[15px]">san pham</div>
                </div>
            </div>
        </div>
    );
}

export default SanPham;
