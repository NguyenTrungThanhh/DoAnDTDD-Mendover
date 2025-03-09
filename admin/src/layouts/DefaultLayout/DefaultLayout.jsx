import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-full bg-cover bg-center">
                    <Header />
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
