import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '@/assets/assets';

function BannerEvaluate() {
    return (
        <div className="mt-10 relative">
            <img src={assets.bannerAll} alt="" className="w-full h-[516px] object-cover" />
            <div className="absolute inset-0 w-3/4 h-[301px] m-auto text-center">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    autoplay={{ delay: 9999999 }}
                    pagination={{ clickable: true }}
                    className="relative z-0 h-[396px]"
                >
                    <SwiperSlide>
                        <div className="h-full flex flex-col items-center gap-6">
                            <img src={assets.author1} alt="" className="w-[150px] h-[150px] rounded-full" />
                            <p className="text-lg text-white font-medium">
                                Tôi rất hài lòng với dịch vụ chuyên nghiệp và chất lượng sản phẩm cũng như thái độ phục
                                vụ của Mendover. <br /> Chắc chắn rằng tôi sẽ quay lại đây nhiều lần nữa để mua hàng.
                            </p>
                            <div>
                                <p className="text-primary uppercase">Phạm Nhật Thành</p>
                                <p className="text-sm text-white font-medium italic">Web Designer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex flex-col items-center gap-6">
                            <img src={assets.author2} alt="" className="w-[150px] h-[150px] rounded-full" />
                            <p className="text-lg text-white font-medium">
                                Tôi rất hài lòng với dịch vụ chuyên nghiệp và chất lượng sản phẩm cũng như thái độ phục
                                vụ của Mendover. <br /> Chắc chắn rằng tôi sẽ quay lại đây nhiều lần nữa để mua hàng.
                            </p>
                            <div>
                                <p className="text-primary uppercase">Nguyễn Thành Long</p>
                                <p className="text-sm text-white font-medium italic">Luật sư</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex flex-col items-center gap-6">
                            <img src={assets.author3} alt="" className="w-[150px] h-[150px] rounded-full" />
                            <p className="text-lg text-white font-medium">
                                Tôi rất hài lòng với dịch vụ chuyên nghiệp và chất lượng sản phẩm cũng như thái độ phục
                                vụ của Mendover. <br /> Chắc chắn rằng tôi sẽ quay lại đây nhiều lần nữa để mua hàng.
                            </p>
                            <div>
                                <p className="text-primary uppercase">Lê Đức Anh</p>
                                <p className="text-sm text-white font-medium italic">Bác sỹ</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default BannerEvaluate;
