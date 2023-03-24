import DataTable from 'react-data-table-component';
import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import customStyles from '../../../assets/styles/tables.styles';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import bannerService from '../../../services/banner.service';
import { capitalizeFirstLetter } from '../../../config/helpers';

import noImage from "../../../assets/images/no-image.jpg";

const AdminBannerList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const getBannerList = useCallback(
        async (config) => {
            try {
                setLoading(true);
                const response = await bannerService.getBannerList(config);
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
        getBannerList({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        getBannerList({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        getBannerList({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [getBannerList, paginate.currentPage, paginate.perPage]);

    return (
        <div className="container-fluid px-4" >
            <h1 className="mt-4">
                Banner list Page
                <NavLink to="/admin/banner/create" className="btn btn-sm btn-primary float-end">
                    <FaPlus /> Add Banner
                </NavLink>
            </h1>
            <AdminBreadCrumb path={[
                { title: "Banner", url: "/admin/banner" },
                { title: "List" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <DataTable
                        customStyles={customStyles}
                        columns={[
                            {
                                name: 'Title',
                                selector: row => row.title,
                                sortable: true,
                            },
                            {
                                name: 'Image',
                                selector: row => <img src={row.bannerImage ? process.env.REACT_APP_BASE_URL + '/images' + row.bannerImage : noImage}
                                    className="img-fluid img-banner-md"
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
                        ]}
                        data={data}
                        highlightOnHover
                        progressPending={loading}
                        pagination
                        paginationServer
                        paginationTotalRows={paginate.totalCount}
                        onChangeRowsPerPage={handlePerPageChange}
                        onChangePage={handlePageChange}
                    />
                </div>
            </div>
        </div >
    )
}

export default AdminBannerList