import { Fragment, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
import { publicRoutes } from '@/routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Suspense
                                        fallback={
                                            <div className="flex justify-center items-center h-screen">
                                                <ClipLoader color="#bda87f" size={50} />
                                            </div>
                                        }
                                    >
                                        <Page />
                                    </Suspense>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
