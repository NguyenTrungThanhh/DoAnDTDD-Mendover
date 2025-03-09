import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SidebarLink = ({ to, icon, image, text }) => {
    return (
        <Link
            to={to}
            className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-transparent text-gray-700 transition-all duration-300 ease-in-out font-medium text-base hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1"
        >
            <div className="flex items-center gap-5 hover:text-white">
                {image ? (
                    <img
                        src={image}
                        className="w-5 transition-all duration-300 ease-in-out filter brightness-0 invert "
                        alt=""
                    />
                ) : (
                    <FontAwesomeIcon icon={icon} className="text-primary" />
                )}
                <p className="hidden sm:block">{text}</p>
            </div>
        </Link>
    );
};

export default SidebarLink;
