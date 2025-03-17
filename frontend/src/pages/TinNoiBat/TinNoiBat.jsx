import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets } from '@/assets/assets';
import CategoryNews from '@/components/CategoryNews';
import NewsItem from '@/components/NewsItem';
import { MendoverContext } from '@/context/MendoverContext';

function TinNoiBat() {
    const { tinTucData } = useContext(MendoverContext);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 2;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = tinTucData.slice(4 + indexOfFirstItem, 4 + indexOfLastItem);

    const totalPages = tinTucData.slice(4).length ? Math.ceil((tinTucData.length - 4) / itemsPerPage) : 1;

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
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Tin nổi bật</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Tin nổi bật</p>
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
                                            <Link to={config.routes.TinTuc + `/${item.slug}`} className="block w-20">
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
                            <div className="flex flex-col gap-10">
                                {currentItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`pb-8 ${index !== currentItems.length - 1 ? 'border-b' : ''}`}
                                    >
                                        <NewsItem
                                            id={item.id}
                                            slug={item.slug}
                                            imageBig={item.imageBig}
                                            title={item.title}
                                            date={item.date}
                                            desc={item.desc}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center mt-16">
                                {currentPage === 1 ? null : (
                                    <button
                                        onClick={prevPage}
                                        className="bg-white text-[#ccc] py-2 px-4 rounded-full hover:bg-primary hover:text-white border border-[#e5e5e5] duration-200"
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                )}
                                <div className="flex gap-2 mx-2">
                                    {pageNumbers.map((number) => (
                                        <button
                                            key={number}
                                            onClick={() => setCurrentPage(number)}
                                            className={`py-2 px-4 rounded-full hover:bg-primary hover:text-white duration-200 ${
                                                currentPage === number
                                                    ? 'bg-primary text-white'
                                                    : 'bg-white text-[#ccc] border border-[#e5e5e5]'
                                            }`}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                                {currentPage === totalPages ? null : (
                                    <button
                                        onClick={nextPage}
                                        className="bg-white text-[#ccc] py-2 px-4 rounded-full hover:bg-primary hover:text-white border border-[#e5e5e5] duration-200"
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinNoiBat;
