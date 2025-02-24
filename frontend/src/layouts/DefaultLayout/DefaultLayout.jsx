import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <Header />
            </div>
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
