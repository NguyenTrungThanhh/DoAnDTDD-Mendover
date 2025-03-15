import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ListTinTuc() {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Mendover | Danh sách tin tức';
    }, []);

    const fetchTinTuc = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/v1/admin/TinTuc`);
            if (response.data.success) {
                setData(response.data.news);
            }
        } catch (error) {
            toast.error('Lỗi call API Tin tức');
        }
    };

    const deleteTinTuc = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_URL_API}/api/v1/admin/TinTuc/delete/${id}`);
            if (response.data.success) {
                toast.success('Xóa Tin tức thành công');
                fetchTinTuc();
            }
        } catch (error) {
            toast.error('Xóa Tin tức thất bại');
        }
    };

    useEffect(() => {
        fetchTinTuc();
    }, []);

    return (
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
            <p>Danh sách Tin tức</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-5 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Ảnh</b>
                    <b className="m-auto">Tên</b>
                    <b className="m-auto">Date</b>
                    <b className="m-auto">Mô tả</b>
                    <b className="m-auto">Action</b>
                </div>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100"
                        >
                            <img className="w-12" src={item.imageBig} alt="" />
                            <p className="m-auto line-clamp-2">{item.name}</p>
                            <p className="m-auto line-clamp-2">{item.date}</p>
                            <p className="m-auto line-clamp-2">{item.desc}</p>
                            <p onClick={() => deleteTinTuc(item._id)} className="m-auto cursor-pointer">
                                x
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListTinTuc;
