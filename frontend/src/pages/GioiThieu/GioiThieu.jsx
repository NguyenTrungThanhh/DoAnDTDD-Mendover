import { Link } from 'react-router-dom';
import { assets } from '@/assets/assets';
import config from '@/configs';

function GioiThieu() {
    return (
        <div className="mt-[129px]">
            <div className="relative">
                <img src={assets.bannerAll} alt="" className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#ffecb1] text-[54px] italic font-asap">Giới thiệu</p>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5">
                <div className="w-3/4 mx-auto flex items-center gap-3">
                    <Link to={config.routes.home} className="hover:underline">
                        Trang chủ
                    </Link>
                    <img src={assets.iconBreadcrumb} alt="" />
                    <p className="text-primary">Giới thiệu</p>
                </div>
            </div>
            <div className="w-3/4 m-auto mt-10 mb-[30px]">
                <h1 className="text-[26px] font-bold mb-2">Giới thiệu</h1>
                <div className="flex flex-col gap-5">
                    <p>
                        Công ty Thiết Kế Xây Dựng Mendover là công ty chuyên nghiệp hoạt động trong lĩnh vực Thiết kế và
                        Thi công nhà ở tại Việt Nam. Với định hướng trở thành doanh nghiệp thiết kế và thi công Nhà Đẹp
                        hàng đầu Việt Nam, không chỉ sản xuất và cung cấp sản phẩm cho ngành xây dựng, mà hơn thế, chúng
                        tôi cung cấp Giải pháp toàn diện cho nhà ở bằng dịch vụ trọn gói: Thiết kế – Sản xuất – Thi
                        công.
                    </p>
                    <p>
                        Mendover luôn tự hào và tự tin về năng lực của mình để đem đến cho khách hàng giải pháp tốt, đáp
                        ứng công năng sử dụng với chi phí thấp. Để đáp ứng được những công trình đòi hỏi tiêu chuẩn kỹ
                        thuật cao, có quy mô lớn, Mendover liên tục nâng cao năng lực chuyên môn, năng lực quản lý và áp
                        dụng hệ thống quản lý chất lượng ISO 9001:2008 cho toàn công ty. Bên cạnh đó, công ty đã xây
                        dựng được văn hóa làm việc với môi trường thuận lợi, trọng dụng nhân tài, phát huy tối đa sự độc
                        lập và sáng tạo của từng nhân viên, hướng đến mục tiêu xây dựng công ty lớn mạnh và phát triển
                        bền vững.{' '}
                    </p>
                    <p>
                        Năng lực thiết kế và thi công của Mendover hiện có được trang bị đồng bộ thiết kế thi công
                        chuyên nghiệp. Chúng tôi cam kết luôn xây dựng và phát triển công ty gắn chặt với mục tiêu chất
                        lượng là số 1 và sự hài lòng của khách hàng là mục tiêu duy nhất.
                    </p>
                    <p>Trân trọng!</p>
                </div>
            </div>
        </div>
    );
}

export default GioiThieu;
