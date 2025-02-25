import { Link } from 'react-router-dom';
import { assets, product } from '@/assets/assets';
import ProductItem from '@/components/ProductItem';

function ProductsSelling() {
    return (
        <div className="m-auto w-3/4 mt-16">
            <div className="flex justify-center items-center gap-10 mb-8">
                <img src={assets.iconName} alt="" />
                <h1 className="text-[25px] font-bold uppercase">Sản phẩm bán chạy</h1>
                <img src={assets.iconName} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-6">
                {product.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item.id}
                        slug={item.slug}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                <Link>
                    <button className="text-primary uppercase px-7 pt-[10px] pb-[10px] border-2 border-primary hover:bg-primary hover:text-white">
                        Xem thêm
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProductsSelling;
