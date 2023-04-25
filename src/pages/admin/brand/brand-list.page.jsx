import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import brandService from '../../../services/brand.service';
import { toast } from "react-toastify";

import noBrandImage from '../../../assets/images/no-image.jpg';
import CustomDataTable from '../../../components/common/custom-datatable.component';
import { ImageFormatter, StatusBadgeFormatter } from '../../../components/common/formatter.component';
import TableButtonComponent from '../../../components/common/table-btn.component';

const AdminBrandList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const handleDelete = async (id) => {
        try {
            const response = await brandService.deleteBrandById(id);
            if (response.status) {
                toast.success(response.msg);
                loadAllBrands({ perPage: 10, page: 1 });
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
            selector: row => <ImageFormatter url={row.brandImage} noImageUrl={noBrandImage} />,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <StatusBadgeFormatter status={row.status} />,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <TableButtonComponent id={row._id} handleDelete={handleDelete} editUrl={'/admin/brand'} />,
            sortable: false,
        },
    ]

    const loadAllBrands = useCallback(
        async (config) => {
            try {
                setLoading(true);
                const response = await brandService.getBrandList(config);
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
        loadAllBrands({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        loadAllBrands({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        loadAllBrands({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [loadAllBrands, paginate.currentPage, paginate.perPage]);

    return (
        <div className="container-fluid px-4" >
            <h1 className="mt-4">
                Brand list Page
                <NavLink to="/admin/brand/create" className="btn btn-sm btn-primary float-end">
                    <FaPlus /> Add Brand
                </NavLink>
            </h1>
            <AdminBreadCrumb path={[
                { title: "Brand", url: "/admin/brand" },
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

export default AdminBrandList