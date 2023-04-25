import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import categoryService from '../../../services/category.service';
import { toast } from "react-toastify";

import noCategoryImage from '../../../assets/images/no-image.jpg';
import CustomDataTable from '../../../components/common/custom-datatable.component';
import { ImageFormatter, StatusBadgeFormatter } from '../../../components/common/formatter.component';
import TableButtonComponent from '../../../components/common/table-btn.component';

const AdminCategoryList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const handleDelete = async (id) => {
        try {
            const response = await categoryService.deleteCategoryById(id);
            if (response.status) {
                toast.success(response.msg);
                loadAllCategories({ perPage: 10, page: 1 });
            }
        } catch (error) {
            // Do nothing
        }
    }

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <ImageFormatter url={row.categoryImage} noImageUrl={noCategoryImage} />,
            sortable: true,
        },
        {
            name: 'Parent',
            selector: row => row?.parent?.title || 'No Parent',
            sortable: true,
        },
        {
            name: 'Featured',
            selector: row => row?.featured ? 'Yes' : 'No',
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <StatusBadgeFormatter status={row.status} />,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <TableButtonComponent id={row._id} handleDelete={handleDelete} editUrl={'/admin/category'} />,
            sortable: false,
        },
    ]

    const loadAllCategories = useCallback(
        async (config) => {
            try {
                setLoading(true);
                const response = await categoryService.getCategoryList(config);
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
        loadAllCategories({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        loadAllCategories({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        loadAllCategories({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [loadAllCategories, paginate.currentPage, paginate.perPage]);

    return (
        <div className="container-fluid px-4" >
            <h1 className="mt-4">
                Category list Page
                <NavLink to="/admin/category/create" className="btn btn-sm btn-primary float-end">
                    <FaPlus /> Add Category
                </NavLink>
            </h1>
            <AdminBreadCrumb path={[
                { title: "Category", url: "/admin/category" },
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

export default AdminCategoryList