import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTableCells } from '@fortawesome/free-solid-svg-icons';
import CategoryProduct from '@/components/CategoryProduct';
import config from '@/configs';
import { assets, product } from '@/assets/assets';
import ProductItem from '@/components/ProductItem';

function SanPham() {
    const [cell, setCell] = useState(true);
    const [bars, setBars] = useState(false);

    const options = [
        { value: 'default', label: 'Mặc định' },
        { value: 'price_asc', label: 'Giá thấp đến cao' },
        { value: 'price_desc', label: 'Giá cao đến thấp' },
        { value: 'name_asc', label: 'Tên A-Z' },
        { value: 'name_desc', label: 'Tên Z-A' },
        { value: 'date_new', label: 'Mới nhất' },
        { value: 'date_old', label: 'Cũ nhất' },
    ];

    const handleSortChange = (selectedOption) => {
        console.log('Sắp xếp theo:', selectedOption.value);
    };

    return (
        <div>
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
                            <div className="grid grid-cols-3 gap-6">
                                {product.map((item, index) => (
                                    <ProductItem
                                        key={index}
                                        id={item.id}
                                        slug={item.slug}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SanPham;
