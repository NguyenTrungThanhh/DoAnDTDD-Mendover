import { useState } from 'react';
import { assets } from '@/assets/assets';

function BannerService() {
    const [phoneHover, setPhoneHover] = useState(false);
    const [giftHover, setGiftHover] = useState(false);
    const [protectHover, setProtectHover] = useState(false);

    return (
        <div className="mt-10 relative">
            <img src={assets.bannerService} alt="" className="w-full h-[385px] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center gap-x-10">
                <div
                    className="flex flex-col items-center text-center"
                    onMouseEnter={() => setPhoneHover(true)}
                    onMouseLeave={() => setPhoneHover(false)}
                >
                    <div className="p-4">
                        <img
                            src={phoneHover ? assets.iconPhoneHover : assets.iconPhone}
                            alt=""
                            className="w-[150px] h-[150px]"
                        />
                    </div>
                    <div>
                        <h1 className="text-[#ecd3a1] uppercase font-bold mb-[15px]">Khuyến mại cuối tuần</h1>
                        <p className="text-[15px] text-white font-semibold text-center">
                            Chúng tôi vận chuyển miễn phí với đơn hàng trên <br /> 1000.000 đ
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-center text-center"
                    onMouseEnter={() => setGiftHover(true)}
                    onMouseLeave={() => setGiftHover(false)}
                >
                    <div className="p-4">
                        <img
                            src={giftHover ? assets.iconGiftHover : assets.iconGift}
                            alt=""
                            className="w-[150px] h-[150px]"
                        />
                    </div>
                    <div>
                        <h1 className="text-[#ecd3a1] uppercase font-bold mb-[15px]">Khuyến mại cuối tuần</h1>
                        <p className="text-[15px] text-white font-semibold text-center">
                            Giảm giá tới 30% vào các ngày thứ 7 và chủ nhật <br /> hàng tuần
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-center text-center"
                    onMouseEnter={() => setProtectHover(true)}
                    onMouseLeave={() => setProtectHover(false)}
                >
                    <div className="p-4">
                        <img
                            src={protectHover ? assets.iconProtectHover : assets.iconProtect}
                            alt=""
                            className="w-[150px] h-[150px]"
                        />
                    </div>
                    <div>
                        <h1 className="text-[#ecd3a1] uppercase font-bold mb-[15px]">Hỗ trợ đổi trả</h1>
                        <p className="text-[15px] text-white font-semibold text-center">
                            Hỗ trợ miễn phí đổi trả sản phẩm trong 30 ngày <br /> đầu tiên từ khi mua hàng
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerService;
