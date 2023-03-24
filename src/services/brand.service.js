import HttpService from "./http.service";

export class BrandService extends HttpService {
    createBrand = async (data) => {
        try {
            // FormData
            let formData = new FormData();
            if (data.brandImage) {
                formData.append("brandImage", data.brandImage, data.brandImage.name);
                delete data.brandImage;
            }
            (Object.keys(data)).map((key) => formData.append(key, data[key]));

            let response = await this.postRequest("api/v1/brand", formData, { login: true, file: true });
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

    getActiveBrands = async () => {
        try {
            let response = await this.getRequest(`api/v1/brand/list`, { login: true });
            return response;
        } catch (err) {
            throw err;
        }
    }
}

const brandService = new BrandService();
export default brandService;