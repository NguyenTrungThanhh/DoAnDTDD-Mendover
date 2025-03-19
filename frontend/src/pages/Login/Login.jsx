import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MendoverContext } from '@/context/MendoverContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';
import config from '@/configs';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
    const { url } = useContext(MendoverContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = 'Đăng nhập - Mendover';
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password,
            };
            const response = await axios.post(`${url}/api/v1/client/user/login`, user);
            console.log(response.data);

            if (response.data.success) {
                const token = response.data.token;

                if (token) {
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('username', response.data.user.name);
                    localStorage.setItem('userId', response.data.user.id);

                    toast.success('Đăng nhập thành công');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 3000);
                } else {
                    toast.error('Lỗi: Không tìm thấy token!');
                }
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(
                    <div>
                        <h4 className="text-black font-bold">Đăng nhập thất bại</h4>
                        <p className="text-black text-[14px]">{error.response.data.error}</p>
                    </div>,
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    },
                );
            } else {
                toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
            }
            console.log(error);
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Đăng nhập</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Đăng nhập</p>
                </div>
            </div>
            <div className="w-3/4 m-auto mt-10 mb-[30px] w-[426px] px-5 py-4 bg-white rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.2)]">
                <h1 className="text-center text-[20px] uppercase">Đăng nhập</h1>
                <div>
                    <form action="" onSubmit={handleLogin} className="mt-6">
                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-black font-bold">
                                    Email
                                </label>
                                <div className="flex items-center h-12 mt-2 border-[1px] rounded-md overflow-hidden transition-all duration-200 border-gray-400 hover:border-primary focus-within:border-primary">
                                    <input
                                        value={email}
                                        id="email"
                                        name="email"
                                        type="text"
                                        className="outline-none bg-transparent text-black p-3 w-full"
                                        placeholder="name@domain.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Mật khẩu */}
                            <div>
                                <label htmlFor="password" className="text-black font-bold">
                                    Mật khẩu
                                </label>
                                <div className="flex items-center h-12 mt-2 border-[1px] rounded-md overflow-hidden transition-all duration-200 border-gray-400 hover:border-primary focus-within:border-primary">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full px-3 py-2 border-none rounded outline-none focus:ring-0"
                                        placeholder="••••••••"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <FontAwesomeIcon
                                        className="text-gray-500 mr-4 hover:scale-105 hover:text-black cursor-pointer"
                                        icon={showPassword ? faEye : faEyeSlash}
                                        onClick={handleTogglePassword}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="text-white font-bold px-4 py-3 bg-primary border-primary w-full mt-2 rounded-lg hover:opacity-80 transition"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-2">
                        <p>Quên mật khẩu?</p>
                        <Link to={config.routes.DangKy}>
                            <p className="hover:text-primary">Đăng ký tại đây</p>
                        </Link>
                    </div>

                    <div>
                        <p className="my-4 text-center">Hoặc đăng nhập bằng</p>
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

export default Login;
