import { Link } from 'react-router-dom';
import config from '@/configs';

function CanHoItem(props) {
    return (
        <>
            <div className="flex flex-col">
                <Link to={config.routes.CanHo + `/${props.slug}`}>
                    <img src={props.imageMain} alt="" className="w-[270px] h-[204px]" />
                </Link>
                <div className="pt-8">
                    <h1>{props.name}</h1>
                    <p className="pt-3 text-[#f4304c]">{props.price}</p>
                </div>
            </div>
        </>
    );
}

export default CanHoItem;
