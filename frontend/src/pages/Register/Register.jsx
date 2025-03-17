import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MendoverContext } from '@/context/MendoverContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';
import config from '@/configs';
import { faCircleInfo, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Register() {
    const { url } = useContext(MendoverContext);

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = 'Đăng ký - Mendover';
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập tên người dùng'),
            email: Yup.string()
                .email('Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com.')
                .required('Vui lòng nhập email'),
            password: Yup.string().min(8, 'Mật khẩu phải có ít nhất 8 ký tự').required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${url}/api/v1/client/user/signup`, values);
                if (response.data.success) {
                    toast.success('Đăng ký thành công');
                    formik.resetForm();
                }
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu lên server:', error);
            }
        },
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Đăng ký</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Đăng ký</p>
                </div>
            </div>
            <div className="w-3/4 m-auto mt-10 mb-[30px] w-[426px] px-5 py-4 bg-white rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.2)]">
                <h1 className="text-center text-[20px] uppercase">Đăng ký</h1>
                <div>
                    <p className="text-center mt-4">
                        Đã có tài khoản, đăng nhập{' '}
                        <Link to={config.routes.DangNhap}>
                            <span className="underline hover:text-primary cursor-pointer">tại đây</span>
                        </Link>
                    </p>

                    <form action="" onSubmit={formik.handleSubmit} className="mt-6">
                        <div className="flex flex-col gap-4">
                            {/* Họ và tên */}
                            <div>
                                <label htmlFor="name" className="text-black font-bold">
                                    Họ và tên
                                </label>
                                <div
                                    className={`flex items-center h-12 border-[1px] mt-2 rounded-md overflow-hidden transition-all duration-200 ${
                                        formik.touched.name && formik.errors.name
                                            ? 'border-red-500 hover:border-red-500'
                                            : 'border-gray-400 hover:border-primary focus-within:border-primary'
                                    }`}
                                >
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full px-3 py-2 border-none rounded outline-none focus:ring-0"
                                        placeholder="Nguyễn Văn A"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                </div>
                                <div
                                    className={`text-red-500 text-[12px] font-semibold mt-1 transition-all duration-300 ease-in-out ${
                                        formik.touched.name && formik.errors.name
                                            ? 'opacity-100 max-h-[100px]'
                                            : 'opacity-0 max-h-0'
                                    } overflow-hidden`}
                                >
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCircleInfo} className="text-base mr-2" />
                                            <span>{formik.errors.name}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-black font-bold">
                                    Địa chỉ email
                                </label>
                                <div
                                    className={`flex items-center h-12 border-[1px] mt-2 rounded-md overflow-hidden transition-all duration-200 ${
                                        formik.touched.email && formik.errors.email
                                            ? 'border-red-500 hover:border-red-500'
                                            : 'border-gray-400 hover:border-primary focus-within:border-primary'
                                    }`}
                                >
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="w-full px-3 py-2 border-none rounded outline-none focus:ring-0"
                                        placeholder="name@domain.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                                <div
                                    className={`text-red-500 text-[12px] font-semibold mt-1 transition-all duration-300 ease-in-out ${
                                        formik.touched.email && formik.errors.email
                                            ? 'opacity-100 max-h-[100px]'
                                            : 'opacity-0 max-h-0'
                                    } overflow-hidden`}
                                >
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCircleInfo} className="text-base mr-2" />
                                            <span>{formik.errors.email}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mật khẩu */}
                            <div>
                                <label htmlFor="password" className="text-black font-bold">
                                    Mật khẩu
                                </label>
                                <div
                                    className={`flex items-center h-12 mt-2 border-[1px] rounded-md overflow-hidden transition-all duration-200 ${
                                        formik.touched.password && formik.errors.password
                                            ? 'border-red-500 hover:border-red-500'
                                            : 'border-gray-400 hover:border-primary focus-within:border-primary'
                                    }`}
                                >
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full px-3 py-2 border-none rounded outline-none focus:ring-0"
                                        placeholder="••••••••"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    <FontAwesomeIcon
                                        className="text-gray-500 mr-4 hover:scale-105 hover:text-black cursor-pointer"
                                        icon={showPassword ? faEye : faEyeSlash}
                                        onClick={handleTogglePassword}
                                    />
                                </div>
                                <div
                                    className={`text-red-500 text-[12px] font-semibold mt-1 transition-all duration-300 ease-in-out ${
                                        formik.touched.password && formik.errors.password
                                            ? 'opacity-100 max-h-[100px]'
                                            : 'opacity-0 max-h-0'
                                    } overflow-hidden`}
                                >
                                    {formik.touched.password && formik.errors.password && (
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCircleInfo} className="text-base mr-2" />
                                            <span>{formik.errors.password}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Nút Đăng ký */}
                            <div>
                                <button
                                    type="submit"
                                    className="text-white font-bold px-4 py-3 bg-primary border-primary w-full mt-2 rounded-lg hover:opacity-80 transition"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </form>

                    <div>
                        <p className="my-4 text-center">Hoặc đăng ký bằng</p>
                        <div className="flex items-center justify-center gap-1">
                            <div>
                                <img src={assets.FacebookLogin} alt="" className="w-[129px] h-[37px]" />
                            </div>
                            <div>
                                <img src={assets.GoogleLogin} alt="" className="w-[129px] h-[37px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
