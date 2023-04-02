import HttpService from "./http.service";

export class BannerService extends HttpService {
    createBanner = async (data) => {
        try {
            let response = await this.postRequest("api/v1/banner", data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getBannerList = async (config) => {
        try {
            let response = await this.getRequest(`api/v1/banner?perPage=${config.perPage}&page=${config.page}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getActiveBanners = async () => {
        try {
            let response = await this.getRequest(`api/v1/banner/active`, { login: true });
            return response;
        } catch (err) {
            throw err;
        }
    }

    getBannerById = async (id) => {
        try {
            let response = await this.getRequest(`api/v1/banner/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    deleteBannerById = async (id) => {
        try {
            let response = await this.deleteRequest(`api/v1/banner/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    updateBannerById = async (data, id) => {
        try {
            let response = await this.putRequest(`api/v1/banner/${id}`, data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}

const bannerService = new BannerService();
export default bannerService;