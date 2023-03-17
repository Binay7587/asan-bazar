import axiosInstance from "./axios.service";

class HttpService {
    postRequest = async (url, data, config = null) => {
        try {
            let response = await axiosInstance.post(url, data, {
                headers: {
                    "Content-Type": config && config.file ? "multipart/form-data" : "application/json",
                    // "Authorization": config.auth ?? "Bearer " + token
                }
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}

export default HttpService;