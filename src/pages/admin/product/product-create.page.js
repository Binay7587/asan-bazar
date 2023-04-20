import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminProductForm from "../../../components/admin/product/product.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import productService from "../../../services/product.service";

const AdminProductCreate = () => {
    const defaultValue = {
        title: "",
        description: "",
        categoryId: null,
        price: "",
        discount: "",
        featured: false,
        brand: null,
        sellerId: null,
        status: { value: "inactive", label: "Unpublish" },
        productImage: null,
    }

    let navigate = useNavigate();
    const submitEvent = async (values) => {
        try {
            let response = await productService.createProduct(values);
            if (response.status) {
                navigate("/admin/product");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Product Create Page</h1>
            <AdminBreadCrumb path={[
                { title: "Product", url: "/admin/product" },
                { title: "Create" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <AdminProductForm
                        defaultValue={defaultValue}
                        submitEvent={submitEvent} />
                </div>
            </div>
        </div>
    )
}

export default AdminProductCreate