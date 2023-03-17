import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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
        // User is not logged in
        // TODO: Logout user and redirect to login page
    } else if (error.response.status === 403) {
        // User is not authorized
        // TODO: Navigate to user dashboard
    }

    throw error.response;
});


export default axiosInstance;