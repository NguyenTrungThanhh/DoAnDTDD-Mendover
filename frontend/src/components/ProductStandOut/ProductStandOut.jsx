import { assets, product } from '@/assets/assets';

function ProductStandOut() {
    return (
        <div className="m-auto w-3/4 mt-16">
            <div className="flex justify-center items-center gap-10 mb-8">
                <img src={assets.iconName} alt="" />
                <h1 className="text-[25px] font-bold uppercase">Sản phẩm nổi bật</h1>
                <img src={assets.iconName} alt="" />
            </div>
            <div className="flex">
                <div className="w-[340px] mx-[15px]">
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                    <div className="flex items-center gap-3 py-10 pl-[30px] border-[1px]">
                        <img src={assets.iconCanHoCaoCap} alt="" />
                        <h1 className="text-[#707070] text-sm uppercase font-medium">Căn hộ cao cấp</h1>
                    </div>
                </div>
                <div className="w-[800px] mx-[15px]">
                    <div className="grid grid-cols-2 gap-6">
                        {product.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <img src={item.image} alt="" className="w-[370px] h-[280px]" />
                                <div className="pt-8">
                                    <h1>{item.name}</h1>
                                    <p className="pt-3">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductStandOut;
