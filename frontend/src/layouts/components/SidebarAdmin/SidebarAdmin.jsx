import { useState, useEffect } from 'react';
import { assets } from '@/assets/assets';
import config from '@/configs';
import SidebarLink from '@/components/SidebarLink';
import { FaBars, FaTimes } from 'react-icons/fa';

function SidebarAdmin() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const closeMenu = () => setIsOpen(false);
        window.addEventListener('click', closeMenu);
        return () => window.removeEventListener('click', closeMenu);
    }, [isOpen]);

    if (!localStorage.getItem('isAdmin')) return null;

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-md lg:hidden"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            <div
                className={`fixed inset-y-0 left-0 z-40 w-72 bg-white shadow-lg px-5 py-8 text-gray-800 border-r border-gray-200 transition-transform duration-300 
                ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 lg:relative lg:flex lg:flex-col lg:w-72`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-60 mx-auto mb-10">
                    <img src={assets.logo} className="w-full hidden sm:block" alt="Logo" />
                </div>
                <div className="flex flex-col gap-5 mt-10">
                    {[
                        { to: config.routes.addXeDauKeo, text: 'Thêm xe đầu kéo' },
                        { to: config.routes.ListXeDauKeo, text: 'Danh sách xe đầu kéo' },
                        { to: config.routes.addMayPhatDien, text: 'Thêm máy phát điện' },
                        { to: config.routes.ListMayPhatDien, text: 'Danh sách máy phát điện' },
                        { to: config.routes.addRoMooc, text: 'Thêm rơ mooc' },
                        { to: config.routes.ListRoMooc, text: 'Danh sách rơ mooc' },
                        { to: config.routes.addTinTuc, text: 'Thêm tin tức' },
                        { to: config.routes.ListTinTuc, text: 'Danh sách tin tức' },
                        { to: config.routes.addSanPhamKhac, text: 'Thêm sản phẩm khác' },
                        { to: config.routes.ListSanPhamKhac, text: 'Danh sách sản phẩm khác' },
                    ].map((item, index) => (
                        <SidebarLink key={index} to={item.to} text={item.text} onClick={() => setIsOpen(false)} />
                    ))}
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}

export default SidebarAdmin;
