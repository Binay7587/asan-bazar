import { NavLink } from "react-router-dom"
import { FaAngleDown, FaBookOpen, FaChartArea, FaColumns, FaTable, FaTachometerAlt } from "react-icons/fa";

const AdminSideNav = () => {
    return (<>
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
    </>)
}

export default AdminSideNav