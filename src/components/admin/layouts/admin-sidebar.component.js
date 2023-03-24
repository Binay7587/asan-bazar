import { NavLink } from "react-router-dom"
import { FaImages, FaPaperclip, FaShoppingBag, FaShoppingCart, FaSitemap, FaTachometerAlt, FaUsers } from "react-icons/fa";

const AdminSideNav = () => {
    return (<>
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <NavLink className="nav-link" to="/admin">
                            <div className="sb-nav-link-icon"><FaTachometerAlt /></div>
                            Dashboard
                        </NavLink>

                        <div className="sb-sidenav-menu-heading">Modules</div>
                        <NavLink className="nav-link" to="/admin/banner">
                            <div className="sb-nav-link-icon"><FaImages /></div>
                            Banner Module
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/brand">
                            <div className="sb-nav-link-icon"><FaPaperclip /></div>
                            Brand Module
                        </NavLink>
                        <NavLink className="nav-link" to="/admin.category">
                            <div className="sb-nav-link-icon"><FaSitemap /></div>
                            Category Module
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/user">
                            <div className="sb-nav-link-icon"><FaUsers /></div>
                            User Module
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/product">
                            <div className="sb-nav-link-icon"><FaShoppingBag /></div>
                            Product Module
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/order">
                            <div className="sb-nav-link-icon"><FaShoppingCart /></div>
                            Order Module
                        </NavLink>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    </>)
}

export default AdminSideNav