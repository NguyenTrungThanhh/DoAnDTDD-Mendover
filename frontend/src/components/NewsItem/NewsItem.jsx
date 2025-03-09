import config from '@/configs';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function NewsItem(props) {
    return (
        <div className="flex flex-col gap-3 w-full">
            <Link to={config.routes.TinTuc + `/${props.slug}`}>
                <div>
                    <img src={props.imageBig} alt="" className="w-full" />
                </div>
            </Link>
            <div className="flex flex-col gap-4">
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <h1 className="text-2xl hover:text-[#f1805f]">{props.title}</h1>
                </Link>
                <p className="flex items-center gap-2 text-primary text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    {props.date}
                </p>
                <p className="line-clamp-2">{props.desc}</p>
            </div>
            <div className="">
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <button className="px-8 py-3 text-primary border-2 border-primary uppercase font-medium hover:bg-primary hover:text-white">
                        Đọc tiếp
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NewsItem;
