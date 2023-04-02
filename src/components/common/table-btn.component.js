import { FaPen, FaTrash } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Swal from 'sweetalert2'

const TableButtonComponent = ({ id, handleDelete, editUrl }) => {
    const deleteAction = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#007560',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            }
        })
    }


    return (<>
        <NavLink to={`${editUrl}/${id}`} className="btn btn-sm btn-primary me-2">
            <FaPen />
        </NavLink>
        <NavLink onClick={deleteAction} className="btn btn-sm btn-danger">
            <FaTrash />
        </NavLink>
    </>)
}

export default TableButtonComponent