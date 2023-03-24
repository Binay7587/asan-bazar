import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import brandService from '../../../services/brand.service';
import { capitalizeFirstLetter } from '../../../config/helpers';

import noImage from "../../../assets/images/no-image.jpg";
import CustomDataTable from '../../../components/common/custom-datatable.component';

const AdminBrandList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <img src={row.brandImage ? process.env.REACT_APP_BASE_URL + '/images' + row.brandImage : noImage}
                className="img-fluid img-brand-md"
                alt="" />,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => capitalizeFirstLetter(row.status),
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <>Edit / Delete</>,
            sortable: false,
        },
    ]

    const getBrandList = useCallback(
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
        getBrandList({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        getBrandList({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        getBrandList({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [getBrandList, paginate.currentPage, paginate.perPage]);

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