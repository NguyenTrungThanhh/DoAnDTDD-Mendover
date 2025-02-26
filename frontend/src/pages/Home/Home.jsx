import SwiperSlider from '@/components/SwiperSlider';
import BannerInfo from '@/components/BannerInfo';
import ProductsSelling from '@/components/ProductsSelling';
import BannerService from '@/components/BannerService';
import ProductStandOut from '@/components/ProductStandOut';
import BannerEvaluate from '@/components/BannerEvaluate';
import ProductPromotional from '@/components/ProductPromotional';
import Partner from '@/components/Partner';

function Home() {
    return (
        <div>
            <SwiperSlider />
            <BannerInfo />
            <ProductsSelling />
            <BannerService />
            <ProductStandOut />
            <BannerEvaluate />
            <ProductPromotional />
            <Partner />
        </div>
    );
}

export default Home;
