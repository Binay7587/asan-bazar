import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import userService from '../../../services/user.service';
import { toast } from "react-toastify";

import noUserImage from '../../../assets/images/no-image.jpg';
import CustomDataTable from '../../../components/common/custom-datatable.component';
import { ImageFormatter, StatusBadgeFormatter } from '../../../components/common/formatter.component';
import TableButtonComponent from '../../../components/common/table-btn.component';

const AdminUserList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const handleDelete = async (id) => {
        try {
            const response = await userService.deleteUserById(id);
            if (response.status) {
                toast.success(response.msg);
                loadAllUsers({ perPage: 10, page: 1 });
            }
        } catch (error) {
            // Do nothing
        }
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <ImageFormatter url={row.userImage} noImageUrl={noUserImage} />,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <StatusBadgeFormatter status={row.status} />,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <TableButtonComponent id={row._id} handleDelete={handleDelete} editUrl={'/admin/user'} />,
            sortable: false,
        },
    ]

    const loadAllUsers = useCallback(
        async (config) => {
            try {
                setLoading(true);
                const response = await userService.getUserList(config);
                if (response.status) {
                    setData(response.result);
                    setPaginate((prevPaginate) => ({
                        ...prevPaginate,
                        totalCount: response.meta.totalCount,
                        perPage: response.meta.perPage,
                        currentPage: response.meta.currentPage,
                    }));
                }
            } catch (error) {
                // Do nothing
            } finally {
                setLoading(false);
            }
        }, []
    );

    const handlePerPageChange = (newPerPage, newPage) => {
        setPaginate({ ...paginate, perPage: newPerPage, currentPage: newPage })
        loadAllUsers({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        loadAllUsers({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        loadAllUsers({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [loadAllUsers, paginate.currentPage, paginate.perPage]);

    return (
        <div className="container-fluid px-4" >
            <h1 className="mt-4">
                User list Page
                <NavLink to="/admin/user/create" className="btn btn-sm btn-primary float-end">
                    <FaPlus /> Add User
                </NavLink>
            </h1>
            <AdminBreadCrumb path={[
                { title: "User", url: "/admin/user" },
                { title: "List" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <CustomDataTable columns={columns}
                        data={data}
                        loading={loading}
                        totalCount={paginate.totalCount}
                        handlePageChange={handlePageChange}
                        handlePerPageChange={handlePerPageChange}
                    />
                </div>
            </div>
        </div >
    )
}

export default AdminUserList