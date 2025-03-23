import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import config from '@/configs';
import { assets } from '@/assets/assets';
import CategoryNews from '@/components/CategoryNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { MendoverContext } from '@/context/MendoverContext';

function DisplayTinTuc() {
    const { slug } = useParams();

    const { tinTucData } = useContext(MendoverContext);

    const [data, setData] = useState([]);

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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/client/TinTuc/${slug}`);
            if (response.data.success) {
                setData(response.data.news);
            }
        } catch (error) {
            toast.error('Lỗi khi lấy dữ liệu sản phẩm');
        }
    };

    return (
        <>
            {data ? (
                <div className="mt-[129px]">
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
                            <Link to={config.routes.TinTuc} className="hover:underline">
                                Tin tức
                            </Link>
                            <img src={assets.iconBreadcrumb} alt="" />
                            <p className="text-primary">{data.name}</p>
                        </div>
                    </div>
                    <div className="py-16">
                        <div className="w-3/4 m-auto flex">
                            <div className="w-[300px] px-[15px] flex-shrink-0">
                                <CategoryNews />
                                <div className="mt-8">
                                    <h1 className="font-bold uppercase">Tin mới cập nhật</h1>
                                    <div>
                                        {tinTucData.slice(0, 4).map((item, index, arr) => (
                                            <div
                                                key={index}
                                                className={`flex gap-3 my-8 pb-8 ${
                                                    index !== arr.length - 1 ? 'border-b-[1px]' : ''
                                                }`}
                                            >
                                                <div>
                                                    <Link
                                                        to={config.routes.TinTuc + `/${item.slug}`}
                                                        className="block w-20"
                                                    >
                                                        <img src={item.imageSmall} alt="" className="w-full h-[41px]" />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to={config.routes.TinTuc + `/${item.slug}`}>
                                                        <h1 className="mb-[10px] hover:text-primary">{item.name}</h1>
                                                    </Link>
                                                    <p className="text-primary text-sm font-medium">{item.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="px-[15px] flex-1">
                                <div>
                                    <h1 className="text-2xl font-bold">{data.name}</h1>
                                    <p className="py-3 flex items-center gap-2 text-primary text-sm">
                                        <FontAwesomeIcon icon={faClock} />
                                        {data.date}
                                    </p>
                                    <img src={data.imageBig} alt="" className="w-full mt-5" />
                                    <div className="mt-8">
                                        {data?.desc?.map((item, index) => (
                                            <div key={index}>
                                                <p className="mt-3">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex items-center gap-3">
                                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                                className="text-primary group-hover:text-white"
                                            />
                                        </div>
                                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                className="text-primary group-hover:text-white"
                                            />
                                        </div>
                                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                                            <FontAwesomeIcon
                                                icon={faGooglePlusG}
                                                className="text-primary group-hover:text-white"
                                            />
                                        </div>
                                        <div className="group flex items-center justify-center w-10 h-10 border border-[#e1e1e1] rounded-full hover:bg-primary cursor-pointer">
                                            <FontAwesomeIcon
                                                icon={faCamera}
                                                className="text-primary group-hover:text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default DisplayTinTuc;
