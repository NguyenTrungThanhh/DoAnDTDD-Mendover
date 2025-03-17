import { Link } from 'react-router-dom';
import {
    faBookMedical,
    faBuilding,
    faEnvelope,
    faHouse,
    faHouseMedical,
    faPlus,
    faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import SidebarLink from '@/components/SidebarLink';
import { assets } from '@/assets/assets';
import config from '@/configs';

function Sidebar() {
    return (
        <div className="bg-gray-100 min-h-screen px-5 py-8 text-gray-800 shadow-lg">
            <Link to={config.routes.home}>
                <div className="w-40 mx-auto mb-10">
                    <img src={assets.logo} className="w-[max(10vw, 120px)] hidden sm:block" alt="Logo" />
                </div>
            </Link>
            <div className="flex flex-col gap-5 mt-10 w-64">
                <>
                    <SidebarLink to={config.routes.addNhaO} icon={faHouseMedical} text="Thêm nhà ở" />
                    <SidebarLink to={config.routes.listNhaO} icon={faHouse} text="Danh sách nhà ở" />
                    <SidebarLink to={config.routes.addCanHo} icon={faHouseMedical} text="Thêm căn hộ" />
                    <SidebarLink to={config.routes.listCanHo} icon={faBuilding} text="Danh sách căn hộ" />
                    <SidebarLink to={config.routes.addTinTuc} icon={faPlus} text="Thêm tin tức" />
                    <SidebarLink to={config.routes.listTinTuc} icon={faEnvelope} text="Danh sách tin tức" />
                </>
            </div>
        </div>
    );
}

export default Sidebar;
