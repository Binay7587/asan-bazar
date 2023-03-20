import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../services/auth.service";

const PermissionRoute = ({ component, checkRole }) => {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    let authCheck = useCallback(async () => {
        try {
            let userDetail = await authService.getLoggedInUser();
            if (userDetail && userDetail.result.role === checkRole) {
                setLoading(false);
            } else {
                navigate(`/${userDetail.result.role}`);
                toast.warning('Unauthorized Access!');
            }
        } catch (err) {
            if (err.status === 401) {
                navigate('/login');
                toast.warning('Unauthorized Access!');
            }
        }
    }, [checkRole, navigate]);

    useEffect(() => {
        authCheck();
    }, [authCheck]);

    return loading ?
        <div className="preloader" >
            <div className="spinner" ></div >
        </div > : component;
}

export default PermissionRoute;