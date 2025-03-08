import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets, news } from '@/assets/assets';
import CategoryNews from '@/components/CategoryNews';
import NewsItem from '@/components/NewsItem';

function BatDongSan() {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = news?.length ? Math.ceil(news.length / itemsPerPage) : 1;

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Bất động sản</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Bất động sản</p>
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
                        <div className="flex justify-center">
                            <h1 className="text-[40px] text-primary font-medium">
                                Tin tức đang được cập nhật !
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BatDongSan;
