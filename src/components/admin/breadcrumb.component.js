import { NavLink } from "react-router-dom";

const AdminBreadCrumb = ({ path = null }) => {
    return (
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
                <NavLink to="/admin" >Dashboard</NavLink>
            </li>
            {
                path && path.map((item, index) => {
                    return (
                        <li key={index} className={`breadcrumb-item ${!item.url ? 'active' : ''}`}>
                            {
                                item.url ? <NavLink to={item.url}>{item.title}</NavLink> : item.title
                            }
                        </li>
                    )
                })
            }
        </ol>
    );
}

export default AdminBreadCrumb;