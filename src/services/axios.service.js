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
    console.log("Success Intercept", response);
    return response;
}, (error) => {
    console.log("Error Intercept", error);
    // TODO: HANDLE ERROR
    throw error;
});


export default axiosInstance;