import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from '../pages/admin/admin.layout';
import AdminDashboard from '../pages/admin/dashboard.page';
import AdminProfile from '../pages/admin/profile.page';
import LoginPage from '../pages/front/auth/login.page';
import RegisterPage from '../pages/front/auth/register.page';
import BrandListPage from '../pages/front/brand/brand-list.page';
import BrandDetailPage from '../pages/front/brand/brand-detail.page';
import CategoryListPage from '../pages/front/category/category-list.page';
import CategoryDetailPage from '../pages/front/category/category-detail.page';
import ProductListPage from '../pages/front/product/product-list.page';
import ProductDetailPage from '../pages/front/product/product-detail.page';
import CartListPage from '../pages/front/cart/cart-list.page';
import HomePage from '../pages/front/home.page';
import HomePageLayout from '../pages/layout/home-page.layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PermissionRoute from './permissionRoutes';
import { AdminBannerCreate, AdminBrandEdit, AdminBannerList, AdminBrandCreate, AdminBannerEdit, AdminBrandList, AdminCategoryList, AdminCategoryCreate, AdminCategoryEdit, AdminUserList, AdminUserCreate, AdminUserEdit, AdminProductList, AdminProductCreate, AdminProductEdit, } from '../pages/admin';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from '../reducers/user.slicer';
import { updateCart } from '../reducers/cart.slicer';
import { useEffect } from 'react';

const Routing = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        let token = localStorage.getItem(import.meta.env.VITE_ACCESSTOKEN_KEY);
        if (token) {
            dispatch(getLoggedInUser());
        }
        dispatch(updateCart());
    }, [dispatch])

    return (<>
        <ToastContainer />
        <Router>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />

                    <Route path="categories" element={<CategoryListPage />} />
                    <Route path="categories/:slug" element={<CategoryDetailPage />} />
                    <Route path="brands" element={<BrandListPage />} />
                    <Route path="brands/:slug" element={<BrandDetailPage />} />
                    <Route path="products" element={<ProductListPage />} />
                    <Route path="products/:slug" element={<ProductDetailPage />} />
                    <Route path="cart" element={<CartListPage />} />
                </Route>

                <Route path="/admin" element={<PermissionRoute component={<AdminLayout />} checkRole="admin" />}  >
                    <Route index element={<AdminDashboard />} />
                    <Route path='banner' element={<AdminBannerList />} />
                    <Route path='banner/create' element={<AdminBannerCreate />} />
                    <Route path='banner/:id' element={<AdminBannerEdit />} />

                    <Route path="brand" element={<AdminBrandList />} />
                    <Route path="brand/create" element={<AdminBrandCreate />} />
                    <Route path='brand/:id' element={<AdminBrandEdit />} />

                    <Route path="category" element={<AdminCategoryList />} />
                    <Route path="category/create" element={<AdminCategoryCreate />} />
                    <Route path='category/:id' element={<AdminCategoryEdit />} />

                    <Route path="user" element={<AdminUserList />} />
                    <Route path="user/create" element={<AdminUserCreate />} />
                    <Route path='user/:id' element={<AdminUserEdit />} />

                    <Route path="product" element={<AdminProductList />} />
                    <Route path="product/create" element={<AdminProductCreate />} />
                    <Route path='product/:id' element={<AdminProductEdit />} />

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
        </Router>
    </>);
};

export default Routing;
