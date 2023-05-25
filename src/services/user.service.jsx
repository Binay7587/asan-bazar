import HttpService from "./http.service";

export class UserService extends HttpService {
    createUser = async (data) => {
        try {
            let response = await this.postRequest("api/v1/user", data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getUserList = async (config) => {
        try {
            let response = await this.getRequest(`api/v1/user?perPage=${config.perPage}&page=${config.page}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getActiveUsers = async () => {
        try {
            let response = await this.getRequest(`api/v1/user/active`, { login: true });
            return response;
        } catch (err) {
            throw err;
        }
    }

    getUsersByType = async (type) => {
        try {
            let response = await this.getRequest(`api/v1/user/type/${type}`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    getUserById = async (id) => {
        try {
            let response = await this.getRequest(`api/v1/user/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    deleteUserById = async (id) => {
        try {
            let response = await this.deleteRequest(`api/v1/user/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    updateUserById = async (data, id) => {
        try {
            let response = await this.putRequest(`api/v1/user/${id}`, data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getUserCount = async () => {
        try {
            let response = await this.getRequest(`api/v1/user/count`);
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}

const userService = new UserService();
export default userService;
