import { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '@/assets/assets';
import { toast } from 'react-toastify';

function AddTinTuc() {
    const [imageBig, setImageBig] = useState(false);
    const [imageSmall, setImageSmall] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'Mendover | Thêm tin tức';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('date', date);
            formData.append('desc', JSON.stringify(desc));
            formData.append('imageBig', imageBig);
            formData.append('imageSmall', imageSmall);

            const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/v1/admin/TinTuc/add`, formData);

            if (response.data.success) {
                toast.success('Thêm tin tức thành công');
                setName('');
                setDate('');
                setDesc('');
                setImageBig(false);
                setImageSmall(false);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error('Error occurred');
        }

        setLoading(false);
    };

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-black rounded-full animate-spin"></div>
        </div>
    ) : (
        <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-8 text-gray-600 pt-8 pl-5 sm:pt-12 sm:pl-12"
        >
            <div className="flex gap-8">
                <div className="flex flex-col items-center">
                    <p className="mb-2">Ảnh chính</p>
                    <input
                        onChange={(e) => setImageBig(e.target.files[0])}
                        type="file"
                        id="imageBig"
                        accept="image/*"
                        hidden
                    />
                    <label htmlFor="imageBig">
                        <img
                            src={imageBig ? URL.createObjectURL(imageBig) : assets.upload_area}
                            className="w-24 cursor-pointer"
                            alt=""
                        />
                    </label>
                </div>

                <div className="flex flex-col items-center">
                    <p className="mb-2">Ảnh phụ</p>
                    <input
                        onChange={(e) => setImageSmall(e.target.files[0])}
                        type="file"
                        id="imageSmall"
                        accept="image/*"
                        hidden
                    />
                    <label htmlFor="imageSmall">
                        <img
                            src={imageSmall ? URL.createObjectURL(imageSmall) : assets.upload_area}
                            className="w-24 cursor-pointer"
                            alt=""
                        />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2.5 w-2/4">
                <p>Tiêu đề tin tức</p>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent outline-primary border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
                    placeholder="Nhập vào đây"
                    type="text"
                />
            </div>

            <div className="flex flex-col gap-2.5 w-2/4">
                <p>Ngày / tháng / năm</p>
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent outline-primary border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
                    placeholder="Nhập vào đây"
                    type="text"
                />
            </div>

            <div className="flex flex-col gap-2.5 w-2/4">
                <p>Mô tả</p>
                <textarea
                    value={Array.isArray(desc) ? desc.join('\n') : ''}
                    onChange={(e) => setDesc(e.target.value.split('\n'))}
                    className="bg-transparent outline-primary border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)] min-h-[100px]"
                    placeholder="Nhập mỗi dòng là một phần tử trong mảng"
                ></textarea>
            </div>

            <button type="submit" className="text-base bg-black text-white py-2.5 px-14 cursor-pointer">
                ADD
            </button>
        </form>
    );
}

export default AddTinTuc;
