import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from '../pages/admin/admin.layout';
import AdminDashboard from '../pages/admin/dashboard.page';
import AdminProfile from '../pages/admin/profile.page';
import LoginPage from '../pages/home/auth/login.page';
import RegisterPage from '../pages/home/auth/register.page';
import BrandDetail from '../pages/home/brand/brand-detail.page';
import HomePageLayout from '../pages/layout/home-page.layout';

const Routing = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/brands/:slug" element={<BrandDetail />} />

                <Route path="/admin" element={<AdminLayout />} >
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>

                <Route path="*" element={<><h2 className='text-center'>404 Not Found!</h2></>} />
            </Routes>
        </BrowserRouter>
    </>);
};

export default Routing;