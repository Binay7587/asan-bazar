import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBannerForm from "../../../components/admin/banner/banner.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import bannerService from "../../../services/banner.service";
import { useCallback, useEffect, useState } from "react";

const AdminBannerEdit = () => {
    const [defaultValue, setDefaultValue] = useState();
    let params = useParams();

    let navigate = useNavigate();
    const submitEvent = async (data) => {
        try {
            let response = await bannerService.updateBannerById(data, params.id);
            if (response.status) {
                navigate("/admin/banner");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    const getBannerDetails = useCallback(async () => {
        try {
            let response = await bannerService.getBannerById(params.id);
            if (response.status) {
                setDefaultValue({
                    title: response.result?.title,
                    bannerImage: response.result?.bannerImage,
                    link: response.result?.link,
                    status: response.result?.status
                });
            }
        } catch (err) {
            throw err;
        }
    }, [params.id])

    useEffect(() => {
        getBannerDetails()
    }, [getBannerDetails])

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Banner Edit Page</h1>
            <AdminBreadCrumb path={[
                { title: "Banner", url: "/admin/banner" },
                { title: "Edit" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    {
                        defaultValue && <AdminBannerForm defaultValue={defaultValue} submitEvent={submitEvent} />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminBannerEdit