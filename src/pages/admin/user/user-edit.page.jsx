import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminUserForm from "../../../components/admin/user/user.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import userService from "../../../services/user.service";
import { useCallback, useEffect, useState } from "react";

const AdminUserEdit = () => {
    const [defaultValue, setDefaultValue] = useState();
    let params = useParams();

    let navigate = useNavigate();
    const submitEvent = async (data) => {
        try {
            let response = await userService.updateUserById(data, params.id);
            if (response.status) {
                navigate("/admin/user");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    const getUserDetails = useCallback(async () => {
        try {
            let response = await userService.getUserById(params.id);
            if (response.status) {
                setDefaultValue({
                    name: response.result?.name,
                    email: response.result?.email,
                    password: response.result?.password,
                    confirmPassword: response.result?.confirmPassword,
                    role: response.result?.role,
                    address: {
                        temp: {
                            state: response.result?.address?.temp?.state,
                            district: response.result?.address?.temp?.district,
                            municipality: response.result?.address?.temp?.municipality,
                            street: response.result?.address?.temp?.street,
                            houseNumber: response.result?.address?.temp?.houseNumber,
                            postcode: response.result?.address?.temp?.postcode,
                        },
                        perm: {
                            state: response.result?.address?.perm?.state,
                            district: response.result?.address?.perm?.district,
                            municipality: response.result?.address?.perm?.municipality,
                            street: response.result?.address?.perm?.street,
                            houseNumber: response.result?.address?.perm?.houseNumber,
                            postcode: response.result?.address?.perm?.postcode,
                        },
                    },
                    phone: response.result?.phone,
                    userImage: response.result?.userImage,
                    status: response.result?.status
                });
            }
        } catch (err) {
            throw err;
        }
    }, [params.id])

    useEffect(() => {
        getUserDetails()
    }, [getUserDetails])

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">User Edit Page</h1>
            <AdminBreadCrumb path={[
                { title: "User", url: "/admin/user" },
                { title: "Edit" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    {
                        defaultValue && <AdminUserForm defaultValue={defaultValue} submitEvent={submitEvent} />
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminUserEdit