import BannerInfo from '@/components/BannerInfo';
import BannerService from '@/components/BannerService';
import ProductsSelling from '@/components/ProductsSelling/ProductsSelling';
import SwiperSlider from '@/components/SwiperSlider';

function Home() {
    return (
        <div>
            <SwiperSlider />
            <BannerInfo />
            <ProductsSelling />
            <BannerService />
        </div>
    );
}

export default Home;
