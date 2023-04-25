import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminCategoryForm from "../../../components/admin/category/category.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import categoryService from "../../../services/category.service";

const AdminCategoryCreate = () => {
    const defaultValue = {
        title: "",
        categoryImage: "",
        featured: false,
        status: "active",
    }

    let navigate = useNavigate();
    const submitEvent = async (values) => {
        try {
            let response = await categoryService.createCategory(values);
            if (response.status) {
                navigate("/admin/category");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Category Create Page</h1>
            <AdminBreadCrumb path={[
                { title: "Category", url: "/admin/category" },
                { title: "Create" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <AdminCategoryForm
                        defaultValue={defaultValue}
                        submitEvent={submitEvent} />
                </div>
            </div>
        </div>
    )
}

export default AdminCategoryCreate