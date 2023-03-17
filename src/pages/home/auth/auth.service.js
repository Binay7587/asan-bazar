import HttpService from "../../../services/http.service";

export class AuthService extends HttpService {
    registerUser = async (data) => {
        try {
            // FormData
            let formData = new FormData();
            if (data.userImage) {
                formData.append("userImage", data.userImage, data.userImage.name);
                delete data.userImage;
            }
            /*formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('password', data.password);*/

            (Object.keys(data)).map((key) => formData.append(key, data[key]));

            let response = await this.postRequest("api/v1/register", formData, { file: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    loginUser = async (formData) => {
        try {
            let response = await this.postRequest("api/v1/login", formData);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}

const authService = new AuthService();
export default authService;