import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '@/assets/assets';
import { MendoverContext } from '@/context/MendoverContext';
import config from '@/configs';

function ProductPromotional() {
    const { combinedData } = useContext(MendoverContext);

    return (
        <div className="m-auto w-3/4 mt-16">
            <div className="flex justify-center items-center gap-10 mb-8">
                <img src={assets.iconName} alt="" />
                <h1 className="text-[25px] font-bold uppercase">Sản phẩm khuyến mãi</h1>
                <img src={assets.iconName} alt="" />
            </div>
            <div>
                <Swiper modules={[Navigation, Pagination]} slidesPerView={4} spaceBetween={10} className="">
                    {combinedData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col">
                                <Link to={`${config.routes[item.type]}/${item.slug}`}>
                                    <img src={item.imageMain} alt="" className="w-[270px] h-[204px]" />
                                </Link>
                                <div className="pt-4">
                                    <Link to={`${config.routes[item.type]}/${item.slug}`}>
                                        <h1 className="hover:text-primary">{item.name}</h1>
                                    </Link>
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
