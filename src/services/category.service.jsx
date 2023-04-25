import HttpService from "./http.service";

export class CategoryService extends HttpService {
    createCategory = async (data) => {
        try {
            let response = await this.postRequest("api/v1/category", data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getCategoryList = async (config) => {
        try {
            let response = await this.getRequest(`api/v1/category?perPage=${config.perPage}&page=${config.page}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getAllCategories = async () => {
        try {
            let response = await this.getRequest(`api/v1/category/all`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getActiveCategories = async () => {
        try {
            let response = await this.getRequest(`api/v1/category/active`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    getFeaturedCategories = async () => {
        try {
            let response = await this.getRequest(`api/v1/category/featured`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    getCategoryById = async (id) => {
        try {
            let response = await this.getRequest(`api/v1/category/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    deleteCategoryById = async (id) => {
        try {
            let response = await this.deleteRequest(`api/v1/category/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    updateCategoryById = async (data, id) => {
        try {
            let response = await this.putRequest(`api/v1/category/${id}`, data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}

const categoryService = new CategoryService();
export default categoryService;