import BannerEvaluate from '@/components/BannerEvaluate';
import BannerInfo from '@/components/BannerInfo';
import BannerService from '@/components/BannerService';
import ProductsSelling from '@/components/ProductsSelling/ProductsSelling';
import ProductStandOut from '@/components/ProductStandOut';
import SwiperSlider from '@/components/SwiperSlider';

function Home() {
    return (
        <div>
            <SwiperSlider />
            <BannerInfo />
            <ProductsSelling />
            <BannerService />
            <ProductStandOut />
            <BannerEvaluate />
        </div>
    );
}

export default Home;
