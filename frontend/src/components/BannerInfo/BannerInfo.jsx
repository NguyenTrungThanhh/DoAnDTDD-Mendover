import { assets } from '@/assets/assets';

function BannerInfo() {
    return (
        <div className="w-3/4 m-auto flex gap-6 mt-10">
            <div>
                <img src={assets.banner1} alt="" />
            </div>
            <div>
                <img src={assets.banner2} alt="" />
            </div>
            <div>
                <img src={assets.banner3} alt="" />
            </div>
        </div>
    );
}

export default BannerInfo;
