import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminUserForm from "../../../components/admin/user/user.form.component";
import AdminBreadCrumb from "../../../components/admin/breadcrumb.component";
import userService from "../../../services/user.service";

const AdminUserCreate = () => {
    const defaultValue = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "admin",
        address: {
            temp: {
                state: "",
                district: "",
                municipality: "",
                street: "",
                houseNumber: "",
                postcode: "",
            },
            perm: {
                state: "",
                district: "",
                municipality: "",
                street: "",
                houseNumber: "",
                postcode: "",
            },
        },
        phone: "",
        userImage: "",
        status: "active"
    };


    let navigate = useNavigate();
    const submitEvent = async (values) => {
        try {
            let response = await userService.createUser(values);
            if (response.status) {
                navigate("/admin/user");
                toast.success(response.msg);
            }
        } catch (err) {
            toast.error(err.data.msg);
        }
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">User Create Page</h1>
            <AdminBreadCrumb path={[
                { title: "User", url: "/admin/user" },
                { title: "Create" }
            ]} />
            <div className="card mb-4">
                <div className="card-body">
                    <AdminUserForm
                        defaultValue={defaultValue}
                        submitEvent={submitEvent} />
                </div>
            </div>
        </div>
    )
}

export default AdminUserCreate