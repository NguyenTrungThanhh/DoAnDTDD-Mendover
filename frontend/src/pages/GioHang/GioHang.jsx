import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function GioHang() {
    return (
        <div className="mt-[129px]">
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Giỏ hàng</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Giỏ hàng</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto my-16">
                <div className="grid grid-cols-[1fr_1.5fr_1fr_0.5fr_1fr_0.5fr] bg-black text-white text-sm text-center uppercase py-5">
                    <p>Hình ảnh</p>
                    <p>Thông tin sản phẩm</p>
                    <p>Đơn giá</p>
                    <p>Số lượng</p>
                    <p>Thành tiền</p>
                    <p>Xóa</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_0.5fr_1fr_0.5fr] items-center text-sm text-center uppercase">
                    <div className="p-3">
                        <img src={assets.product1} alt="" className="w-[100px] h-[75px] mx-auto" />
                    </div>
                    <div className="p-3">
                        <p>Căn hộ 3PN ở Pearl Plaza</p>
                    </div>
                    <div className="p-3">
                        <p>3.000.000.000₫</p>
                    </div>
                    <div className="flex items-center border w-28 h-10 p-3">
                        <button className="w-12 text-lg">-</button>
                        <input
                            value={1}
                            type="text"
                            name=""
                            id=""
                            className="w-full text-center border-none focus:outline-none"
                        />
                        <button className="w-12 text-lg">+</button>
                    </div>
                    <div className="p-3">
                        <p>3.000.000.000₫</p>
                    </div>
                    <div className="p-3">
                        <button>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GioHang;
