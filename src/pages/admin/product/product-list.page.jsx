import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import productService from '../../../services/product.service';
import { toast } from "react-toastify";

import noProductImage from '../../../assets/images/no-image.jpg';
import CustomDataTable from '../../../components/common/custom-datatable.component';
import { ImageFormatter, StatusBadgeFormatter } from '../../../components/common/formatter.component';
import TableButtonComponent from '../../../components/common/table-btn.component';

const AdminProductList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginate, setPaginate] = useState({
        "totalCount": 0,
        "perPage": 10,
        "currentPage": 1
    });

    const handleDelete = async (id) => {
        try {
            const response = await productService.deleteProductById(id);
            if (response.status) {
                toast.success(response.msg);
                loadAllProducts({ perPage: 10, page: 1 });
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
            selector: row => <ImageFormatter url={row.productImage[0]} noImageUrl={noProductImage} />,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row?.categoryId?.map((item) => item.title).join(', '),
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => `NPR. ${row.afterDiscount}`,
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
            selector: row => <TableButtonComponent id={row._id} handleDelete={handleDelete} editUrl={'/admin/product'} />,
            sortable: false,
        },
    ]

    const loadAllProducts = useCallback(
        async (config) => {
            try {
                setLoading(true);
                const response = await productService.getProductList(config);
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
        loadAllProducts({ perPage: newPerPage, page: newPage });
    }

    const handlePageChange = (newPage) => {
        setPaginate({ ...paginate, currentPage: newPage })
        loadAllProducts({ perPage: paginate.perPage, page: newPage });
    }

    useEffect(() => {
        loadAllProducts({ perPage: paginate.perPage, page: paginate.currentPage });
    }, [loadAllProducts, paginate.currentPage, paginate.perPage]);

    return (
        <div className="container-fluid px-4" >
            <h1 className="mt-4">
                Product list Page
                <NavLink to="/admin/product/create" className="btn btn-sm btn-primary float-end">
                    <FaPlus /> Add Product
                </NavLink>
            </h1>
            <AdminBreadCrumb path={[
                { title: "Product", url: "/admin/product" },
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

export default AdminProductList