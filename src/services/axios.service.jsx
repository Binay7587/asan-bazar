import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setLoggedInUser } from "../reducers/user.slicer";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 30000,
    timeoutErrorMessage: 'Request timed out',
});

// Interceptors
// Response sent from server => 401 as status code => should logout user and redirect to login page
axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        let dispatch = useDispatch();
        let navigate = useNavigate();

        dispatch(setLoggedInUser(null))
        localStorage.removeItem(import.meta.env.VITE_ACCESSTOKEN_KEY);
        navigate('/login');
        toast.warning('Unauthorized Access!');
    }else if(error.response.status === 403){
        // TODO: Redirect to 403 page
        console.log('Unauthorized Access');
    }

    throw error.response;
});


export default axiosInstance;