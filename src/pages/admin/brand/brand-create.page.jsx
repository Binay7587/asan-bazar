import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBrandForm from "../../../components/admin/brand/brand.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import brandService from "../../../services/brand.service";

const AdminBrandCreate = () => {
    const defaultValue = {
        title: "",
        brandImage: "",
        status: "active",
    }

    let navigate = useNavigate();
    const submitEvent = async (values) => {
        try {
            let response = await brandService.createBrand(values);
            console.log(response);
            if (response.status) {
                navigate("/admin/brand");
                toast.success(response.msg);
            }
        } catch (err) {
            throw err;
        }
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Brand Create Page</h1>
            <AdminBreadCrumb path={[
                { title: "Brand", url: "/admin/brand" },
                { title: "Create" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <AdminBrandForm
                        defaultValue={defaultValue}
                        submitEvent={submitEvent} />
                </div>
            </div>
        </div>
    )
}

export default AdminBrandCreate
