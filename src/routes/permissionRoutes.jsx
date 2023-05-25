import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PermissionRoute = ({ component, checkRole }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const user = useSelector((rootUser) => {
        return rootUser.User.loggedInUser;
    })

    const authCheck = useCallback(async () => {
        try {
            if (!user) {
                navigate("/login");
                return; // wait for the user object to be available
            }

            if (user && user.role === checkRole) {
                setLoading(false);
            } else {
                toast.warning('Unauthorized Access!');
                navigate(`/${user.role}`);
            }
        } catch (err) {
            throw err;
        }
    }, [user, checkRole, navigate]);

    useEffect(() => {
        authCheck();
    }, [authCheck]);

    return loading ?
        <div className="preloader" >
            <div className="spinner" ></div >
        </div > : component;
}

export default PermissionRoute;
