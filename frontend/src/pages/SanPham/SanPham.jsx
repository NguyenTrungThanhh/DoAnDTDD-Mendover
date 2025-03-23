import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight, faTableCells } from '@fortawesome/free-solid-svg-icons';
import CategoryProduct from '@/components/CategoryProduct';
import config from '@/configs';
import { assets } from '@/assets/assets';
import { MendoverContext } from '@/context/MendoverContext';

function SanPham() {
    const { combinedData } = useContext(MendoverContext);
    const [cell, setCell] = useState(true);
    const [bars, setBars] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const options = [
        { value: 'default', label: 'Mặc định' },
        { value: 'price_asc', label: 'Giá thấp đến cao' },
        { value: 'price_desc', label: 'Giá cao đến thấp' },
        { value: 'name_asc', label: 'Tên A-Z' },
        { value: 'name_desc', label: 'Tên Z-A' },
        { value: 'date_new', label: 'Mới nhất' },
        { value: 'date_old', label: 'Cũ nhất' },
    ];

    const itemsPerPage = 12;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = combinedData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = combinedData?.length ? Math.ceil(combinedData.length / itemsPerPage) : 1;

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

    const handleSortChange = (selectedOption) => {
        console.log('Sắp xếp theo:', selectedOption.value);
    };

    return (
        <>
            <div className="mt-[129px]">
                <div className="relative">
                    <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-[#ffecb1] text-[54px] italic font-asap">Tất cả sản phẩm</p>
                    </div>
                </div>
                <div className="bg-[#f5f5f5] py-5">
                    <div className="w-3/4 mx-auto flex items-center gap-3">
                        <Link to={config.routes.home} className="hover:underline">
                            Trang chủ
                        </Link>
                        <img src={assets.iconBreadcrumb} alt="" />
                        <p className="text-primary">Tất cả sản phẩm</p>
                    </div>
                </div>
                <div className="py-16">
                    <div className="w-3/4 m-auto flex">
                        <div className="w-[300px] px-[15px] flex-shrink-0">
                            <CategoryProduct />
                            <div className="mt-8">
                                <h1 className="font-bold uppercase">Sản phẩm bán chạy</h1>
                                <div>
                                    {combinedData.slice(0, 5).map((item, index, arr) => (
                                        <div
                                            key={index}
                                            className={`flex gap-3 my-8 pb-8 ${
                                                index !== arr.length - 1 ? 'border-b-[1px]' : ''
                                            }`}
                                        >
                                            <div>
                                                <Link
                                                    to={`${config.routes[item.type]}/${item.slug}`}
                                                    className="block w-20"
                                                >
                                                    <img
                                                        src={item.imageMain}
                                                        alt=""
                                                        className="w-full h-[60px] object-cover"
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to={`${config.routes[item.type]}/${item.slug}`}>
                                                    <h1 className="mb-[10px] hover:text-primary">{item.name}</h1>
                                                </Link>
                                                <p className="text-[#f4304c]">{item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img src={assets.bannerCategory} alt="" />
                            </div>
                        </div>
                        <div className="px-[15px] flex-1">
                            <div className="flex items-center justify-between py-[15px] border-b-[1px]">
                                <div className="flex items-center gap-2">
                                    <p className="whitespace-nowrap">Sắp xếp:</p>
                                    <Select
                                        options={options}
                                        defaultValue={options[0]}
                                        onChange={handleSortChange}
                                        placeholder="Chọn kiểu sắp xếp"
                                        className="w-64"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`${
                                            cell ? 'border-primary text-primary' : ''
                                        } w-9 h-9 border-[1px] flex items-center justify-center cursor-pointer`}
                                        onClick={() => {
                                            setCell(true);
                                            setBars(false);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTableCells} size="lg" />
                                    </div>
                                    <div
                                        className={`${
                                            bars ? 'border-primary text-primary' : ''
                                        } w-9 h-9 border-[1px] flex items-center justify-center cursor-pointer`}
                                        onClick={() => {
                                            setBars(true);
                                            setCell(false);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faBars} size="lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="grid grid-cols-3 gap-6 gap-y-12">
                                    {currentItems.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <Link to={`${config.routes[item.type]}/${item.slug}`}>
                                                <img src={item.imageMain} alt="" className="w-[270px] h-[204px]" />
                                            </Link>
                                            <div className="pt-8">
                                                <Link to={`${config.routes[item.type]}/${item.slug}`}>
                                                    <h1 className="hover:text-primary">{item.name}</h1>
                                                </Link>
                                                <p className="pt-3 text-[#f4304c]">{item.price}</p>
                                            </div>
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
        </>
    );
}

export default SanPham;
