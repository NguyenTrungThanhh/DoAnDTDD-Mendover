import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets } from '@/assets/assets';

function CategoryProduct() {
    const items = [
        { path: config.routes.home, label: 'Nhà ở' },
        { path: config.routes.GioiThieu, label: 'Căn hộ' },
    ];

    return (
        <div className="border rounded-md overflow-hidden shadow-md">
            <div className="flex items-center gap-4 bg-[#363533] p-4 text-white">
                <FontAwesomeIcon icon={faCarSide} className="text-xl" />
                <h3 className="font-bold uppercase">Danh mục sản phẩm</h3>
            </div>

            <div>
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            `group flex items-center gap-3 py-5 px-4 min-h-[40px] duration-200 ${
                                isActive ? 'text-primary font-bold' : 'text-black hover:text-primary'
                            } ${index !== items.length - 1 ? 'border-b' : ''}`
                        }
                    >
                        <div className="relative w-4 h-4 flex items-center justify-center">
                            <img
                                src={assets.iconCategory}
                                alt=""
                                className="absolute w-full h-auto group-hover:hidden"
                            />
                            <img
                                src={assets.iconCategoryHover}
                                alt=""
                                className="absolute w-full h-auto hidden group-hover:block"
                            />
                        </div>
                        <span className="flex-1">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default CategoryProduct;
