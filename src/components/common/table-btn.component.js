import { FaPen, FaTrash } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const TableButtonComponent = () => {
    return (<>
        <NavLink to="/admin/banner/edit/1" className="btn btn-sm btn-primary me-2">
            <FaPen />
        </NavLink>
        <NavLink to="/admin/banner/delete/1" className="btn btn-sm btn-danger">
            <FaTrash />
        </NavLink>
    </>)
}

export default TableButtonComponent