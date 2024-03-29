import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import bannerService from '../../../services/banner.service';
import { toast } from "react-toastify";

import noBannerImage from '../../../assets/images/noBannerImage.png';
import CustomDataTable from '../../../components/common/custom-datatable.component';
import { ImageFormatter, StatusBadgeFormatter } from '../../../components/common/formatter.component';
import TableButtonComponent from '../../../components/common/table-btn.component';

const AdminBannerList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const handleDelete = async (id) => {
        try {
            const response = await bannerService.deleteBannerById(id);
            if (response.status) {
                toast.success(response.msg);
                loadAllBanners({ perPage: 10, page: 1 });
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
            selector: row => <ImageFormatter url={row.bannerImage} noImageUrl={noBannerImage} />,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <StatusBadgeFormatter status={row.status} />,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <TableButtonComponent id={row._id} handleDelete={handleDelete} editUrl={'/admin/banner'} />,
            sortable: false,
        },
    ]

    const loadAllBanners = useCallback(
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
        loadAllBanners({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        loadAllBanners({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        loadAllBanners({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [loadAllBanners, paginate.currentPage, paginate.perPage]);

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

export default AdminBannerList