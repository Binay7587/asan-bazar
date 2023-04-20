import HttpService from "./http.service";

export class BrandService extends HttpService {
    createBrand = async (data) => {
        try {
            let response = await this.postRequest("api/v1/brand", data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getBrandList = async (config) => {
        try {
            let response = await this.getRequest(`api/v1/brand?perPage=${config.perPage}&page=${config.page}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getAllBrands = async () => {
        try {
            let response = await this.getRequest(`api/v1/brand/all`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getActiveBrands = async () => {
        try {
            let response = await this.getRequest(`api/v1/brand/active`, { login: true });
            return response;
        } catch (err) {
            throw err;
        }
    }

    getBrandById = async (id) => {
        try {
            let response = await this.getRequest(`api/v1/brand/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    deleteBrandById = async (id) => {
        try {
            let response = await this.deleteRequest(`api/v1/brand/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    updateBrandById = async (data, id) => {
        try {
            let response = await this.putRequest(`api/v1/brand/${id}`, data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}

const brandService = new BrandService();
export default brandService;