import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { assets } from '@/assets/assets';
import { useEffect, useState } from 'react';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="w-full">
            <div
                className="fixed bottom-5 right-5 w-10 h-10 bg-primary text-white text-[18px] rounded-md hover:opacity-80 duration-200"
                style={{ display: isVisible ? 'block' : 'none' }}
                onClick={scrollToTop}
            >
                <button className="w-full h-full">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
            <div className="w-full bg-[#252525] py-[60px]">
                <div className="flex gap-32 max-w-[1200px] m-auto">
                    <div>
                        <img src={assets.logoFooter} alt="" className="pb-10" />
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#363636] rounded-full text-primary">
                                    <FontAwesomeIcon icon={faLocationDot} size="md" />
                                </div>
                                <span className="text-[#acacac] text-sm font-medium">
                                    Tầng 6, 266 Đội Cấn, Ba Đình , Hà Nội
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#363636] rounded-full text-primary">
                                    <FontAwesomeIcon icon={faMobileScreenButton} size="md" />
                                </div>
                                <span className="text-[#acacac] text-sm font-medium">1900 6750</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#363636] rounded-full text-primary">
                                    <FontAwesomeIcon icon={faEnvelope} size="md" />
                                </div>
                                <span className="text-[#acacac] text-sm font-medium">support@sapo.vn</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-32">
                        <div>
                            <h1 className="text-sm text-primary uppercase font-bold mb-10">Tài khoản</h1>
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Trang chủ
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Giới thiệu
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Sản phẩm
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Tin tức
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Liên hệ
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-sm text-primary uppercase font-bold mb-10">Chính sách</h1>
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Trang chủ
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Giới thiệu
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Sản phẩm
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Tin tức
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Liên hệ
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-sm text-primary uppercase font-bold mb-10">Điều khoản</h1>
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Trang chủ
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Giới thiệu
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Sản phẩm
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Tin tức
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Liên hệ
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-sm text-primary uppercase font-bold mb-10">Hướng dẫn</h1>
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Trang chủ
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Giới thiệu
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Sản phẩm
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Tin tức
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <p className="text-[#acacac] text-sm font-medium hover:text-primary hover:translate-x-1 transition-all duration-200">
                                            Liên hệ
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#1e1e1e] py-[14px] text-center">
                <p className="text-[#acacac]">
                    Bản quyền thuộc về <b>Avent Team</b> | Cung cấp bởi <b>Sapo</b>
                </p>
            </div>
        </div>
    );
}

export default Footer;
