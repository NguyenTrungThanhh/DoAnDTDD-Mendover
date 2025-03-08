import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NewsItem(props) {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div>
                <img src={props.imageBig} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl hover:text-[#f1805f]">{props.title}</h1>
                <p className="flex items-center gap-2 text-primary text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    {props.date}
                </p>
                <p>{props.desc}</p>
            </div>
            <div className="">
                <button className="px-8 py-3 text-primary border-2 border-primary uppercase font-medium hover:bg-primary hover:text-white">
                    Đọc tiếp
                </button>
            </div>
        </div>
    );
}

export default NewsItem;
