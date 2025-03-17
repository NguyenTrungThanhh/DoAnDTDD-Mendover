import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import { useContext } from 'react';
import { MendoverContext } from '@/context/MendoverContext';
import config from '@/configs';

function ProductsSelling() {
    const { combinedData } = useContext(MendoverContext);

    return (
        <div className="m-auto w-3/4 mt-16">
            <div className="flex justify-center items-center gap-10 mb-8">
                <img src={assets.iconName} alt="" />
                <h1 className="text-[25px] font-bold uppercase">Sản phẩm bán chạy</h1>
                <img src={assets.iconName} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-6">
                {combinedData.slice(0, 6).map((item, index) => (
                    <div className="flex flex-col" key={index}>
                        <Link to={`${config.routes[item.type]}/${item.slug}`}>
                            <img src={item.imageMain} alt="" className="w-[370px] h-[280px]" />
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
            <div className="mt-12 flex justify-center">
                <Link to={config.routes.SanPham}>
                    <button className="text-primary uppercase px-7 pt-[10px] pb-[10px] border-2 border-primary hover:bg-primary hover:text-white">
                        Xem thêm
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProductsSelling;
