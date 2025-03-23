import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCartPlus, faChevronDown, faChevronUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import config from '@/configs';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { MendoverContext } from '@/context/MendoverContext';

function DisplayNhaO() {
    const { slug } = useParams();
    const { nhaOData } = useContext(MendoverContext);

    const [data, setData] = useState('');
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [info, setInfo] = useState(true);
    const [introduce, setIntroduce] = useState(false);
    const [rank, setRank] = useState(false);

    useEffect(() => {
        fetchData();
    }, [slug]);

    useEffect(() => {
        if (data) {
            document.title = `${data.name}`;
        }
    }, [data]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/client/nhaO/${slug}`);
            if (response.data.success) {
                setData(response.data.nhaO);
            }
        } catch (error) {
            toast.error('Lỗi khi lấy dữ liệu sản phẩm');
        }
    };

    useEffect(() => {
        console.log(data);
    });

    return (
        <>
            {data ? (
                <div className="mb-32 mt-[129px]">
                    <div className="relative">
                        <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-[#ffecb1] text-[54px] italic font-asap">{data.name}</p>
                        </div>
                    </div>
                    <div className="bg-[#f5f5f5] py-5">
                        <div className="w-3/4 mx-auto flex items-center gap-3">
                            <Link to={config.routes.home} className="hover:underline">
                                Trang chủ
                            </Link>
                            <img src={assets.iconBreadcrumb} alt="" />
                            <Link to={config.routes.NhaO} className="hover:underline">
                                Nhà ở
                            </Link>
                            <img src={assets.iconBreadcrumb} alt="" />
                            <p className="text-primary">{data.name}</p>
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
                                className="relative rounded-lg"
                            >
                                <SwiperSlide className="w-full h-[354px] flex items-center justify-center">
                                    <img
                                        src={data.imageMain}
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="w-full h-[354px] flex items-center justify-center">
                                    <img src={data.imageSub} alt="" className="w-full h-full object-cover rounded-lg" />
                                </SwiperSlide>
                            </Swiper>

                            <Swiper
                                modules={[Thumbs]}
                                onSwiper={setThumbsSwiper}
                                spaceBetween={15}
                                slidesPerView={2}
                                watchSlidesProgress
                                className="mt-4 cursor-pointer w-[150px] !ml-0 flex justify-start"
                            >
                                {[data.imageMain, data.imageSub].map((img, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="w-[73px] flex items-start"
                                        onClick={() => thumbsSwiper && thumbsSwiper.slideTo(index)}
                                    >
                                        <img src={img} alt="" className="w-[73px] h-[55px] object-cover rounded-md" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Thông tin sản phẩm */}
                        <div className="px-[30px] flex flex-col gap-2 flex-1">
                            <h1 className="text-[26px] font-bold">{data.name}</h1>
                            <p className="text-2xl text-red-500">{data.price}</p>
                            <p>{data.desc.slice(0, 1)}</p>
                            <div className="flex items-center mt-4">
                                <p className="text-xs font-bold uppercase">Số lượng: </p>
                                <input
                                    value={quantity}
                                    min={1}
                                    type="text"
                                    className="w-[100px] h-[52px] text-[#797979] text-center ml-3 border border-[#ebebeb] 
                                focus:ring-1 focus:ring-[#c0c0c0] focus:border-[#c0c0c0] 
                                outline-none transition-all duration-200"
                                />

                                <div className="flex flex-col gap-1 ml-1">
                                    <button
                                        className="group flex items-center justify-center w-6 h-6 border border-[#ebebeb] hover:bg-[#e1e1e1]"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronUp}
                                            className="text-[10px] text-[#797979] group-hover:text-white"
                                        />
                                    </button>
                                    <button
                                        className="group flex items-center justify-center w-6 h-6 border border-[#ebebeb] hover:bg-[#e1e1e1]"
                                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className="text-[10px] text-[#797979] group-hover:text-white"
                                        />
                                    </button>
                                </div>

                                <div className="ml-5">
                                    <button className="px-7 py-3 h-14 bg-black text-white uppercase hover:bg-[#BF1E2E] rounded-lg duration-300">
                                        Mua ngay
                                    </button>
                                </div>
                                <div className="ml-5">
                                    <button className="px-7 py-1 h-14 uppercase bg-white text-[#BF1E2E] border border-[#BF1E2E] hover:bg-[#BF1E2E] hover:text-white rounded-lg duration-300">
                                        <div>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                            <p>Thêm vào giỏ hàng</p>
                                        </div>
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
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className="text-primary group-hover:text-white"
                                    />
                                </div>
                                <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                                    <FontAwesomeIcon icon={faTwitter} className="text-primary group-hover:text-white" />
                                </div>
                                <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faGooglePlusG}
                                        className="text-primary group-hover:text-white"
                                    />
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
                                <h1
                                    className={`${
                                        info ? 'text-primary' : ''
                                    } text-black text-[17px] uppercase font-medium`}
                                >
                                    Thông tin sản phẩm
                                </h1>
                            </div>
                            <div
                                className={`${
                                    introduce ? 'border-b-4 border-primary' : ''
                                } px-7 py-6 cursor-pointer mr-6`}
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
                                <h1
                                    className={`${
                                        rank ? 'text-primary' : ''
                                    } text-black text-[17px] uppercase font-medium`}
                                >
                                    Đánh giá
                                </h1>
                            </div>
                        </div>
                        <div className="mt-8">
                            {info && (
                                <>
                                    <div className="border p-6 pt-0">
                                        <img src={data.imageMain} alt={data.name} className="mt-4 w-full h-auto" />
                                        {data.desc.map((item, index) => (
                                            <div key={index} className="">
                                                <p className="mt-3">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
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
                                {nhaOData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex flex-col">
                                            <Link to={config.routes.NhaO + `/${item.slug}`}>
                                                <img src={item.imageMain} alt="" className="w-[270px] h-[204px]" />
                                            </Link>
                                            <div className="pt-4">
                                                <Link to={config.routes.NhaO + `/${item.slug}`}>
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
                </div>
            ) : null}
        </>
    );
}

export default DisplayNhaO;
