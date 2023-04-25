import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminCategoryForm from "../../../components/admin/category/category.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import categoryService from "../../../services/category.service";
import { useCallback, useEffect, useState } from "react";

const AdminCategoryEdit = () => {
    const [defaultValue, setDefaultValue] = useState();
    let params = useParams();

    let navigate = useNavigate();
    const submitEvent = async (data) => {
        try {
            let response = await categoryService.updateCategoryById(data, params.id);
            if (response.status) {
                navigate("/admin/category");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    const getCategoryDetails = useCallback(async () => {
        try {
            let response = await categoryService.getCategoryById(params.id);
            if (response.status) {
                setDefaultValue({
                    title: response.result?.title,
                    parent: response.result?.parent?._id,
                    categoryImage: response.result?.categoryImage,
                    featured: response.result?.featured,
                    status: response.result?.status
                });
            }
        } catch (err) {
            throw err;
        }
    }, [params.id])

    useEffect(() => {
        getCategoryDetails()
    }, [getCategoryDetails])

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Category Edit Page</h1>
            <AdminBreadCrumb path={[
                { title: "Category", url: "/admin/category" },
                { title: "Edit" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    {
                        defaultValue && <AdminCategoryForm defaultValue={defaultValue} submitEvent={submitEvent} />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminCategoryEdit