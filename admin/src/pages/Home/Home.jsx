import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Mendover Admin';
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <h1 className="text-3xl font-bold text-center">Welcome, Admin!</h1>
        </div>
    );
};

export default Home;
