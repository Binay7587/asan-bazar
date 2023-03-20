import "../../assets/css/admin.css";
import "bootstrap";
import { Outlet } from "react-router-dom";
import AdminTopNav from "../../components/admin/layouts/admin-top-nav.component";
import AdminSideNav from "../../components/admin/layouts/admin-sidebar.component";
import AdminFooter from "../../components/admin/layouts/admin-footer.component";

const AdminLayout = () => {
    return (<>
        <AdminTopNav />
        {/* <AdminSideNav /> */}
        <div id="layoutSidenav">
            <AdminSideNav />
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                <AdminFooter />
            </div>
        </div>
    </>)
}

export default AdminLayout