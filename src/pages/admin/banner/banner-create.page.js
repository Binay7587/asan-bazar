import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBannerForm from "../../../components/admin/banner/banner.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import bannerService from "../../../services/banner.service";

const AdminBannerCreate = () => {
    const defaultValue = {
        title: "",
        bannerImage: "",
        link: "",
        status: "active",
    }

    let navigate = useNavigate();
    const submitEvent = async (values) => {
        try {
            let response = await bannerService.createBanner(values);
            if (response.status) {
                navigate("/admin/banner");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Banner Create Page</h1>
            <AdminBreadCrumb path={[
                { title: "Banner", url: "/admin/banner" },
                { title: "Create" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <AdminBannerForm
                        defaultValue={defaultValue}
                        submitEvent={submitEvent} />
                </div>
            </div>
        </div>
    )
}

export default AdminBannerCreate