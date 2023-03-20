import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from '../pages/admin/admin.layout';
import AdminDashboard from '../pages/admin/dashboard.page';
import AdminProfile from '../pages/admin/profile.page';
import LoginPage from '../pages/home/auth/login.page';
import RegisterPage from '../pages/home/auth/register.page';
import BrandDetail from '../pages/home/brand/brand-detail.page';
import HomePage from '../pages/home/home.page';
import HomePageLayout from '../pages/layout/home-page.layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PermissionRoute from './permissionRoutes';

const Routing = () => {
    return (<>
        <ToastContainer />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />

                    <Route path="brands/:slug" element={<BrandDetail />} />
                </Route>

                <Route path="/admin" element={<PermissionRoute component={<AdminLayout />} checkRole="admin" />}  >
                    <Route index element={<AdminDashboard />} />
                    <Route path="profile" element={<AdminProfile />} />
                </Route>

                <Route path="/seller" element={<PermissionRoute component={<AdminLayout />} checkRole="seller" />}  >
                    <Route index element={<>Seller Dashboard</>} />
                </Route>

                <Route path="/customer" element={<PermissionRoute component={<AdminLayout />} checkRole="customer" />}  >
                    <Route index element={<>Customer Dashboard</>} />
                </Route>

                <Route path="*" element={<><h2 className='text-center'>404 Not Found!</h2></>} />
            </Routes>
        </BrowserRouter>
    </>);
};

export default Routing;