import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { assets, product } from '@/assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChevronDown, faChevronUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '@/configs';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

function DisplayNhaO() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [info, setInfo] = useState(true);
    const [introduce, setIntroduce] = useState(false);
    const [rank, setRank] = useState(false);

    const images = [assets.CanHo2PN, assets.CanHo2PN];

    return (
        <div className="mb-32">
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Căn hộ 2PN tại Pearl Plaza</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <Link to={config.routes.home} className="hover:underline">
                        Căn hộ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Căn hộ 2PN tại Pearl Plaza</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto flex items-start my-8">
                {/* Swiper chính */}
                <div className="w-[468px] flex-shrink-0">
                    <Swiper
                        modules={[Navigation, Pagination, Thumbs]}
                        spaceBetween={10}
                        slidesPerView={1}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="relative"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="w-full h-[354px] flex items-center justify-center">
                                <img
                                    src={img}
                                    alt={`Ảnh ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Swiper ảnh nhỏ */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={15}
                        slidesPerView={2}
                        watchSlidesProgress
                        className="mt-4 cursor-pointer w-[150px] !ml-0 flex justify-start"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="w-[73px] flex items-start">
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-[73px] h-[55px] object-cover rounded-md"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Thông tin sản phẩm */}
                <div className="px-[30px] flex flex-col gap-2 flex-1">
                    <h1 className="text-[26px] font-bold">Căn hộ 2PN tại Pearl Plaza</h1>
                    <p className="text-2xl text-red-500">250.000.000₫</p>
                    <p>
                        Căn hộ 2PN Pearl Plaza mang đến một không gian sống hoàn hảo với sự đầu tư vượt trội về tiện
                        ích, sự đột phá trong thiết kế và tiện nghi phục vụ tối đa nhu cầu của cư dân, mang lại một
                        không gian sống thư giãn yên bình và ngập tràn hạnh phúc.
                    </p>
                    <div className="flex items-center mt-4">
                        <p className="text-xs font-bold uppercase">Số lượng: </p>
                        <input
                            value={quantity}
                            min={1}
                            type="text"
                            className="w-[100px] h-[45px] text-[#797979] text-center ml-3 border border-[#ebebeb] 
                            focus:ring-1 focus:ring-[#c0c0c0] focus:border-[#c0c0c0] 
                            outline-none transition-all duration-200"
                        />

                        <div className="flex flex-col gap-1 ml-1">
                            <button
                                className="group flex items-center justify-center w-5 h-5 border border-[#ebebeb] hover:bg-[#e1e1e1]"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className="text-[10px] text-[#797979] group-hover:text-white"
                                />
                            </button>
                            <button
                                className="group flex items-center justify-center w-5 h-5 border border-[#ebebeb] hover:bg-[#e1e1e1]"
                                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-[10px] text-[#797979] group-hover:text-white"
                                />
                            </button>
                        </div>

                        <div className="ml-5">
                            <button className="px-7 py-2 bg-primary text-white uppercase hover:bg-[#e1e1e1]">
                                Mua ngay
                            </button>
                        </div>
                    </div>
                    <div className="bg-black text-white mt-6 w-[252px] rounded-md px-5 py-3">
                        <a href="tel:19006750" className="flex items-center gap-3">
                            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p className="uppercase font-medium">Gọi ngay 19006750</p>
                                <p className="text-xs text-center">(Đặt hàng nhanh chóng)</p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                            <FontAwesomeIcon icon={faFacebookF} className="text-primary group-hover:text-white" />
                        </div>
                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                            <FontAwesomeIcon icon={faTwitter} className="text-primary group-hover:text-white" />
                        </div>
                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                            <FontAwesomeIcon icon={faGooglePlusG} className="text-primary group-hover:text-white" />
                        </div>
                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} className="text-primary group-hover:text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-auto mt-16">
                <div className="flex items-center border-b">
                    <div
                        className={`${info ? 'border-b-4 border-primary' : ''} px-7 py-6 cursor-pointer mr-6`}
                        onClick={() => {
                            setInfo(true);
                            setIntroduce(false);
                            setRank(false);
                        }}
                    >
                        <h1 className={`${info ? 'text-primary' : ''} text-black text-[17px] uppercase font-medium`}>
                            Thông tin sản phẩm
                        </h1>
                    </div>
                    <div
                        className={`${introduce ? 'border-b-4 border-primary' : ''} px-7 py-6 cursor-pointer mr-6`}
                        onClick={() => {
                            setInfo(false);
                            setIntroduce(true);
                            setRank(false);
                        }}
                    >
                        <h1
                            className={`${
                                introduce ? 'text-primary' : ''
                            } text-black text-[17px] uppercase font-medium`}
                        >
                            Giới thiệu
                        </h1>
                    </div>
                    <div
                        className={`${rank ? 'border-b-4 border-primary' : ''} px-7 py-6 cursor-pointer mr-6`}
                        onClick={() => {
                            setInfo(false);
                            setIntroduce(false);
                            setRank(true);
                        }}
                    >
                        <h1 className={`${rank ? 'text-primary' : ''} text-black text-[17px] uppercase font-medium`}>
                            Đánh giá
                        </h1>
                    </div>
                </div>
                <div>
                    {info &&
                        product.slice(0, 1).map((item, index) => (
                            <div key={index} className="border mt-8 p-6">
                                <img src={item.image} alt={item.name} className="mt-4 w-full h-auto" />
                                {item.info.map((infoItem, i) => (
                                    <p key={i}>{infoItem}</p>
                                ))}
                            </div>
                        ))}

                    {introduce && (
                        <>
                            <div className="border mt-8 p-6">Thông tin đang được cập nhật</div>
                        </>
                    )}
                    {rank && (
                        <>
                            <div className="border mt-8 p-6">Thông tin đang được cập nhật</div>
                        </>
                    )}
                </div>
                <div className="flex justify-center items-center gap-10 mb-8 mt-16">
                    <img src={assets.iconName} alt="" />
                    <h1 className="text-[25px] font-bold uppercase">Sản phẩm liên quan</h1>
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
        </div>
    );
}

export default DisplayNhaO;
