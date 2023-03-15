import "../../assets/css/admin.css";
import "bootstrap";
import { FaAngleDown, FaBars, FaBookOpen, FaChartArea, FaColumns, FaSearch, FaTable, FaTachometerAlt, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const toogleSidebar = (e) => {
    e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
}

const AdminLayout = () => {
    return (<>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <NavLink className="navbar-brand ps-3" to="/">Start Bootstrap</NavLink>
            <button onClick={toogleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!"><FaBars /></button>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><FaSearch /></button>
                </div>
            </form>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></NavLink>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" to="/settings">Settings</NavLink></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><NavLink className="dropdown-item" to="/login">Logout</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <NavLink className="nav-link" to="index.html">
                                <div className="sb-nav-link-icon"><FaTachometerAlt /></div>
                                Dashboard
                            </NavLink>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><FaColumns /></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                            </NavLink>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <NavLink className="nav-link" to="layout-static.html">Static Navigation</NavLink>
                                    <NavLink className="nav-link" to="layout-sidenav-light.html">Light Sidenav</NavLink>
                                </nav>
                            </div>
                            <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><FaBookOpen /></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                            </NavLink>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                                    </NavLink>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <NavLink className="nav-link" to="login.html">Login</NavLink>
                                            <NavLink className="nav-link" to="register.html">Register</NavLink>
                                            <NavLink className="nav-link" to="password.html">Forgot Password</NavLink>
                                        </nav>
                                    </div>
                                    <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                                    </NavLink>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <NavLink className="nav-link" to="401.html">401 Page</NavLink>
                                            <NavLink className="nav-link" to="404.html">404 Page</NavLink>
                                            <NavLink className="nav-link" to="500.html">500 Page</NavLink>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <NavLink className="nav-link" to="charts.html">
                                <div className="sb-nav-link-icon"><FaChartArea /></div>
                                Charts
                            </NavLink>
                            <NavLink className="nav-link" to="tables.html">
                                <div className="sb-nav-link-icon"><FaTable /></div>
                                Tables
                            </NavLink>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <NavLink to="#">Privacy Policy</NavLink>
                                &middot;
                                <NavLink to="#">Terms &amp; Conditions</NavLink>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>)
}

export default AdminLayout