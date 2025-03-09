import { Link } from 'react-router-dom';
import config from '@/configs';
import { assets, news } from '@/assets/assets';
import CategoryNews from '@/components/CategoryNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

function DisplayTinTuc() {
    return (
        <div>
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">
                        Nội thất căn hộ với những màu sắc tương phản
                    </p>
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
                    <p className="text-primary">Nội thất căn hộ với những màu sắc tương phản</p>
                </div>
            </div>
            <div className="py-16">
                <div className="w-3/4 m-auto flex">
                    <div className="w-[300px] px-[15px] flex-shrink-0">
                        <CategoryNews />
                        <div className="mt-8">
                            <h1 className="font-bold uppercase">Tin mới cập nhật</h1>
                            <div>
                                {news.slice(0, 5).map((item, index, arr) => (
                                    <div
                                        key={index}
                                        className={`flex gap-3 my-8 pb-8 ${
                                            index !== arr.length - 1 ? 'border-b-[1px]' : ''
                                        }`}
                                    >
                                        <div>
                                            <Link className="block w-20">
                                                <img src={item.imageSmall} alt="" className="w-full h-[41px]" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link>
                                                <h1 className="mb-[10px] hover:text-primary">{item.title}</h1>
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
                            <h1 className="text-2xl font-bold">Nội thất căn hộ với những màu sắc tương phản</h1>
                            <p className="py-3 flex items-center gap-2 text-primary text-sm">
                                <FontAwesomeIcon icon={faClock} />
                                24/03/2016
                            </p>
                            <img src={assets.CanHo2PN} alt="" className="w-full" />
                            <div className="mt-8">
                                <p>
                                    Căn hộ chung cư này có diện tích khá nhỏ, nên các kiến trúc sư đã lựa chọn kết hợp
                                    màu đen với màu vàng của gỗ để tạo nên một sự tương phản nổi bật làm cho căn hộ ấn
                                    tượng cũng như ấm áp hơn. Các không gian trong nhà được bao trùm trong tông màu đen
                                    kết hợp với sàn gỗ vừa mang lại một nét cá tính hiện đại cũng như không kém phần ấm
                                    áp cho căn hộ.
                                </p>
                                <p className="mt-5">
                                    Căn hộ chung cư này có diện tích khá nhỏ, nên các kiến trúc sư đã lựa chọn kết hợp
                                    màu đen với màu vàng của gỗ để tạo nên một sự tương phản nổi bật làm cho căn hộ ấn
                                    tượng cũng như ấm áp hơn. Các không gian trong nhà được bao trùm trong tông màu đen
                                    kết hợp với sàn gỗ vừa mang lại một nét cá tính hiện đại cũng như không kém phần ấm
                                    áp cho căn hộ.
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-3">
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
                </div>
            </div>
        </div>
    );
}

export default DisplayTinTuc;
