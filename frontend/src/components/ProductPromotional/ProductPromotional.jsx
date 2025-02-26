import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets, product } from '@/assets/assets';

function ProductPromotional() {
    return (
        <div className="m-auto w-3/4 mt-16">
            <div className="flex justify-center items-center gap-10 mb-8">
                <img src={assets.iconName} alt="" />
                <h1 className="text-[25px] font-bold uppercase">Sản phẩm khuyến mãi</h1>
                <img src={assets.iconName} alt="" />
            </div>
            <div>
                <Swiper modules={[Navigation, Pagination]} slidesPerView={4} spaceBetween={10} className="">
                    {product.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col">
                                <img src={item.image} alt="" className="w-[270px] h-[204px]" />
                                <div className="pt-4">
                                    <h1>{item.name}</h1>
                                    <p className="pt-3 text-[#f4304c]">{item.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductPromotional;
