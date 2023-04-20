import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminProductForm from "../../../components/admin/product/product.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import productService from "../../../services/product.service";
import { useCallback, useEffect, useState } from "react";

const AdminProductEdit = () => {
    const [defaultValue, setDefaultValue] = useState();
    let params = useParams();

    let navigate = useNavigate();
    const submitEvent = async (data) => {
        try {
            let response = await productService.updateProductById(data, params.id);
            if (response.status) {
                navigate("/admin/product");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    const getProductDetails = useCallback(async () => {
        try {
            let response = await productService.getProductById(params.id);
            if (response.status) {
                let detail = response.result;
                let selCat = detail.categoryId?.map((item) => {
                    return { value: item._id, label: item.title }
                });
                setDefaultValue({
                    title: detail?.title,
                    description: detail?.description,
                    categoryId: selCat,
                    price: detail?.price,
                    discount: detail?.discount,
                    featured: detail?.featured,
                    brand: { value: detail?.brand?._id, label: detail?.brand?.title },
                    sellerId: { value: detail?.sellerId?._id, label: detail?.sellerId?.name },
                    status: { value: detail?.status, label: detail?.status === "active" ? "Publish" : "Unpublish" },
                    productImage: detail?.productImage,
                    delImages: []
                });
            }
        } catch (err) {
            throw err;
        }
    }, [params.id])

    useEffect(() => {
        getProductDetails()
    }, [getProductDetails])

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Product Edit Page</h1>
            <AdminBreadCrumb path={[
                { title: "Product", url: "/admin/product" },
                { title: "Edit" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    {
                        defaultValue && <AdminProductForm defaultValue={defaultValue} submitEvent={submitEvent} />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminProductEdit