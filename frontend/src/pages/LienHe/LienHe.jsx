import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

function LienHe() {
    return (
        <div>
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Liên hệ</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Liên hệ</p>
                </div>
            </div>
            <div className="w-3/4 m-auto my-16">
                <div className="relative pb-[56.25%] h-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.8570443994139!2d105.81590207333721!3d21.03602003322241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab128faefb3b%3A0xb9b4766093bd6da5!2zMjY2IFAuIMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1740674334274!5m2!1svi!2s"
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="w-3/4 m-auto my-16 flex gap-12">
                <div>
                    <h1 className="text-lg font-bold uppercase mb-8">Liên hệ với chúng tôi</h1>
                    <form action="" className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="">Họ và tên</label>
                            <input
                                type="text"
                                placeholder="Nguyễn Văn A"
                                className="w-[670px] border-[1px] border-[#ccc] rounded-md py-4 px-4 mt-2"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder="nguyenvana@gmail.com"
                                className="w-[670px] border-[1px] border-[#ccc] rounded-md py-4 px-4 mt-2"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Bình luận</label>
                            <textarea
                                name="contact[body]"
                                placeholder="Nhập nội dung"
                                rows="5"
                                required
                                className="w-full p-3 px-4 border rounded-md mt-2"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-85 transition duration-200"
                        >
                            Gửi liên hệ
                        </button>
                    </form>
                </div>
                <div className="flex flex-col gap-9">
                    <img src={assets.logo} alt="" className="w-44" />
                    <p>
                        Mendover là một trong những Công ty cung cấp dịch vụ về nhà ở chất lượng và uy tín nhất tại Hà
                        Nội với hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản.
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full text-white">
                                <FontAwesomeIcon icon={faLocationDot} size="md" />
                            </div>
                            <span className="text-[#333] text-sm font-medium">
                                Tầng 6, 266 Đội Cấn, Ba Đình , Hà Nội
                            </span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full text-white">
                                <FontAwesomeIcon icon={faMobileScreenButton} size="md" />
                            </div>
                            <span className="text-[#333] text-sm font-medium">1900 6750</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full text-white">
                                <FontAwesomeIcon icon={faEnvelope} size="md" />
                            </div>
                            <span className="text-[#333] text-sm font-medium">support@sapo.vn</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LienHe;
