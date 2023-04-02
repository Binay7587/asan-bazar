import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBrandForm from "../../../components/admin/brand/brand.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import brandService from "../../../services/brand.service";
import { useCallback, useEffect, useState } from "react";

const AdminBrandEdit = () => {
    const [defaultValue, setDefaultValue] = useState();
    let params = useParams();

    let navigate = useNavigate();
    const submitEvent = async (data) => {
        try {
            let response = await brandService.updateBrandById(data, params.id);
            if (response.status) {
                navigate("/admin/brand");
                toast.success(response.message);
            }
        } catch (err) {
            toast.error(err.data.message);
        }
    }

    const getBrandDetails = useCallback(async () => {
        try {
            let response = await brandService.getBrandById(params.id);
            if (response.status) {
                setDefaultValue({
                    title: response.result?.title,
                    brandImage: response.result?.brandImage,
                    status: response.result?.status
                });
            }
        } catch (err) {
            throw err;
        }
    }, [params.id])

    useEffect(() => {
        getBrandDetails()
    }, [getBrandDetails])

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Brand Edit Page</h1>
            <AdminBreadCrumb path={[
                { title: "Brand", url: "/admin/brand" },
                { title: "Edit" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    {
                        defaultValue && <AdminBrandForm defaultValue={defaultValue} submitEvent={submitEvent} />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminBrandEdit