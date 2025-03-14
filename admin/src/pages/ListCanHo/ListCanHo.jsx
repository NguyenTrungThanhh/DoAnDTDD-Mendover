import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ListCanHo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Mendover | Danh sách căn hộ';
    }, []);

    const fetchNhaO = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/v1/admin/CanHo`);
            if (response.data.success) {
                setData(response.data.products);
            }
        } catch (error) {
            toast.error('Lỗi call API Căn Hộ');
        }
    };

    const deleteSong = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_URL_API}/api/v1/admin/CanHo/delete/${id}`);
            if (response.data.success) {
                toast.success('Xóa Căn Hộ thành công');
                fetchNhaO();
            }
        } catch (error) {
            toast.error('Xóa Căn Hộ thất bại');
        }
    };

    useEffect(() => {
        fetchNhaO();
    }, []);

    return (
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
            <p>Danh sách Căn Hộ</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-5 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Ảnh</b>
                    <b className="m-auto">Tên</b>
                    <b className="m-auto">Giá</b>
                    <b className="m-auto">Mô tả</b>
                    <b className="m-auto">Action</b>
                </div>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100"
                        >
                            <img className="w-12" src={item.imageMain} alt="" />
                            <p className="m-auto line-clamp-2">{item.name}</p>
                            <p className="m-auto line-clamp-2">{item.price}</p>
                            <p className="m-auto line-clamp-2">{item.desc}</p>
                            <p onClick={() => deleteSong(item._id)} className="m-auto cursor-pointer">
                                x
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListCanHo;
