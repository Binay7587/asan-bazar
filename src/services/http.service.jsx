import axiosInstance from "./axios.service";

class HttpService {
    headers;

    getHeaders = (config = {}) => {
        this.headers = {
            "Content-Type": config && config.file ? "multipart/form-data" : "application/json",
        };
        if (config.login) {
            let token = localStorage.getItem(import.meta.env.VITE_ACCESSTOKEN_KEY);
            if (!token) {
                let error = { status: 401, msg: "Unauthorized" };
                throw error;
            }
            this.headers["Authorization"] = "Bearer " + token;
        }
    }

    postRequest = async (url, data, config = {}) => {
        try {
            this.getHeaders(config);
            let response = await axiosInstance.post(url, data, {
                headers: this.headers
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    getRequest = async (url, config = {}) => {
        try {
            this.getHeaders(config);
            let response = await axiosInstance.get(url, {
                headers: this.headers
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    deleteRequest = async (url, config = {}) => {
        try {
            this.getHeaders(config);
            let response = await axiosInstance.delete(url, {
                headers: this.headers
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    putRequest = async (url, data, config = {}) => {
        try {
            this.getHeaders(config);
            let response = await axiosInstance.put(url, data, {
                headers: this.headers
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}

export default HttpService;