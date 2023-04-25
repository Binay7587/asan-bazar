import { FaBars, FaSearch, FaUser } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../../reducers/user.slicer";

const AdminTopNav = () => {
    let dispatch = useDispatch();

    const toogleSidebar = (e) => {
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
    }

    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem(import.meta.env.VITE_ACCESSTOKEN_KEY);
        dispatch(setLoggedInUser(null))
        navigate('/login');
    }

    return (<>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <NavLink className="navbar-brand ps-3" to="/">Ecommerce</NavLink>
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
                        <li><NavLink className="dropdown-item" onClick={logout}>Logout</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>)
}

export default AdminTopNav