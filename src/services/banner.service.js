import HttpService from "./http.service";

export class BannerService extends HttpService {
    createBanner = async (data) => {
        try {
            // FormData
            let formData = new FormData();
            if (data.bannerImage) {
                formData.append("bannerImage", data.bannerImage, data.bannerImage.name);
                delete data.bannerImage;
            }
            (Object.keys(data)).map((key) => formData.append(key, data[key]));

            let response = await this.postRequest("api/v1/banner", formData, { login: true, file: true });
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
            let response = await this.getRequest(`api/v1/banner/list`, { login: true });
            return response;
        } catch (err) {
            throw err;
        }
    }
}

const bannerService = new BannerService();
export default bannerService;