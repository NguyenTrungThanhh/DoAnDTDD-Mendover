import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { assets } from '@/assets/assets';
import { MendoverContext } from '@/context/MendoverContext';
import config from '@/configs';

function ProductStandOut() {
    const { combinedData } = useContext(MendoverContext);

    const [canHoCaoCap, setCanHoCaoCap] = useState(true);
    const [canHoCaoCapHover, setCanHoCaoCapHover] = useState(false);
    const [canHoChungCu, setCanHoChungCu] = useState(false);
    const [canHoChungCuHover, setCanHoChungCuHover] = useState(false);
    const [canHoDuAnNen, setCanHoDuAnNen] = useState(false);
    const [canHoDuAnNenHover, setCanHoDuAnNenHover] = useState(false);
    const [vanPhongCaoOc, setVanPhongCaoOc] = useState(false);
    const [vanPhongCaoOcHover, setVanPhongCaoOcHover] = useState(false);
    const [nhaOKhuCaoTang, setNhaOKhuCaoTang] = useState(false);
    const [nhaOKhuCaoTangHover, setNhaOKhuCaoTangHover] = useState(false);
    const [nhaOKhuDoThi, setNhaOKhuDoThi] = useState(false);
    const [nhaOKhuDoThiHover, setNhaOKhuDoThiHover] = useState(false);
    const [canHoKhuNghiDuong, setCanHoKhuNghiDuong] = useState(false);
    const [canHoKhuNghiDuongHover, setCanHoKhuNghiDuongHover] = useState(false);

    return (
        <div className="m-auto w-3/4 mt-16">
            <div className="flex justify-center items-center gap-10 mb-8">
                <img src={assets.iconName} alt="" />
                <h1 className="text-[25px] font-bold uppercase">Sản phẩm nổi bật</h1>
                <img src={assets.iconName} alt="" />
            </div>
            <div className="flex">
                <div className="w-[340px] mx-[15px]">
                    <div
                        className={`${
                            canHoCaoCap || canHoCaoCapHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setCanHoCaoCapHover(true)}
                        onMouseLeave={() => setCanHoCaoCapHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(true);
                            setCanHoChungCu(false);
                            setCanHoDuAnNen(false);
                            setVanPhongCaoOc(false);
                            setNhaOKhuCaoTang(false);
                            setCanHoKhuNghiDuong(false);
                        }}
                    >
                        <img
                            src={canHoCaoCap || canHoCaoCapHover ? assets.iconCanHoCaoCapHover : assets.iconCanHoCaoCap}
                            alt=""
                        />
                        <h1
                            className={`${
                                canHoCaoCap || canHoCaoCapHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Căn hộ cao cấp
                        </h1>
                    </div>

                    <div
                        className={`${
                            canHoChungCu || canHoChungCuHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setCanHoChungCuHover(true)}
                        onMouseLeave={() => setCanHoChungCuHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(false);
                            setCanHoChungCu(true);
                            setCanHoDuAnNen(false);
                            setVanPhongCaoOc(false);
                            setNhaOKhuCaoTang(false);
                            setNhaOKhuDoThi(false);
                            setCanHoKhuNghiDuong(false);
                        }}
                    >
                        <img
                            src={
                                canHoChungCu || canHoChungCuHover
                                    ? assets.iconCanHoChungCuHover
                                    : assets.iconCanHoChungCu
                            }
                            alt=""
                        />
                        <h1
                            className={`${
                                canHoChungCu || canHoChungCuHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Căn hộ chung cư
                        </h1>
                    </div>

                    <div
                        className={`${
                            canHoDuAnNen || canHoDuAnNenHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setCanHoDuAnNenHover(true)}
                        onMouseLeave={() => setCanHoDuAnNenHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(false);
                            setCanHoChungCu(false);
                            setCanHoDuAnNen(true);
                            setVanPhongCaoOc(false);
                            setNhaOKhuCaoTang(false);
                            setNhaOKhuDoThi(false);
                            setCanHoKhuNghiDuong(false);
                        }}
                    >
                        <img
                            src={
                                canHoDuAnNen || canHoDuAnNenHover
                                    ? assets.iconCanHoDuAnNenHover
                                    : assets.iconCanHoDuAnNen
                            }
                            alt=""
                        />
                        <h1
                            className={`${
                                canHoDuAnNen || canHoDuAnNenHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Căn hộ dự án nền
                        </h1>
                    </div>

                    <div
                        className={`${
                            vanPhongCaoOc || vanPhongCaoOcHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setVanPhongCaoOcHover(true)}
                        onMouseLeave={() => setVanPhongCaoOcHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(false);
                            setCanHoChungCu(false);
                            setCanHoDuAnNen(false);
                            setVanPhongCaoOc(true);
                            setNhaOKhuCaoTang(false);
                            setNhaOKhuDoThi(false);
                            setCanHoKhuNghiDuong(false);
                        }}
                    >
                        <img
                            src={
                                vanPhongCaoOc || vanPhongCaoOcHover
                                    ? assets.iconVanPhongCaoOcHover
                                    : assets.iconVanPhongCaoOc
                            }
                            alt=""
                        />
                        <h1
                            className={`${
                                vanPhongCaoOc || vanPhongCaoOcHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Văn phòng cao ốc
                        </h1>
                    </div>

                    <div
                        className={`${
                            nhaOKhuCaoTang || nhaOKhuCaoTangHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setNhaOKhuCaoTangHover(true)}
                        onMouseLeave={() => setNhaOKhuCaoTangHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(false);
                            setCanHoChungCu(false);
                            setCanHoDuAnNen(false);
                            setVanPhongCaoOc(false);
                            setNhaOKhuCaoTang(true);
                            setNhaOKhuDoThi(false);
                            setCanHoKhuNghiDuong(false);
                        }}
                    >
                        <img
                            src={
                                nhaOKhuCaoTang || nhaOKhuCaoTangHover
                                    ? assets.iconNhaOKhuCaoTangHover
                                    : assets.iconNhaOKhuCaoTang
                            }
                            alt=""
                        />
                        <h1
                            className={`${
                                nhaOKhuCaoTang || nhaOKhuCaoTangHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Nhà ở khu cao tầng
                        </h1>
                    </div>

                    <div
                        className={`${
                            nhaOKhuDoThi || nhaOKhuDoThiHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setNhaOKhuDoThiHover(true)}
                        onMouseLeave={() => setNhaOKhuDoThiHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(false);
                            setCanHoChungCu(false);
                            setCanHoDuAnNen(false);
                            setVanPhongCaoOc(false);
                            setNhaOKhuCaoTang(false);
                            setNhaOKhuDoThi(true);
                            setCanHoKhuNghiDuong(false);
                        }}
                    >
                        <img
                            src={
                                nhaOKhuDoThi || nhaOKhuDoThiHover
                                    ? assets.iconNhaOKhuDoThiHover
                                    : assets.iconNhaOKhuDoThi
                            }
                            alt=""
                        />
                        <h1
                            className={`${
                                nhaOKhuDoThi || nhaOKhuDoThiHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Nhà ở khu đô thị
                        </h1>
                    </div>

                    <div
                        className={`${
                            canHoKhuNghiDuong || canHoKhuNghiDuongHover ? 'bg-primary' : ''
                        } flex items-center gap-3 py-10 pl-[30px] border-[1px] cursor-pointer`}
                        onMouseEnter={() => setCanHoKhuNghiDuongHover(true)}
                        onMouseLeave={() => setCanHoKhuNghiDuongHover(false)}
                        onClick={() => {
                            setCanHoCaoCap(false);
                            setCanHoChungCu(false);
                            setCanHoDuAnNen(false);
                            setVanPhongCaoOc(false);
                            setNhaOKhuCaoTang(false);
                            setNhaOKhuDoThi(false);
                            setCanHoKhuNghiDuong(true);
                        }}
                    >
                        <img
                            src={
                                canHoKhuNghiDuong || canHoKhuNghiDuongHover
                                    ? assets.iconCanHoKhuNghiDuongHover
                                    : assets.iconCanHoKhuNghiDuong
                            }
                            alt=""
                        />
                        <h1
                            className={`${
                                canHoKhuNghiDuong || canHoKhuNghiDuongHover ? 'text-white' : 'text-[#707070]'
                            } text-sm uppercase font-medium`}
                        >
                            Căn hộ khu nghỉ dưỡng
                        </h1>
                    </div>
                </div>
                <div className="w-[800px] mx-[15px]">
                    <div className="grid grid-cols-2 gap-6">
                        {combinedData.slice(0, 4).map((item, index) => (
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
                </div>
            </div>
        </div>
    );
}

export default ProductStandOut;
