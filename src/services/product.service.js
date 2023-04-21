import HttpService from "./http.service";

export class ProductService extends HttpService {
    createProduct = async (data) => {
        try {
            let response = await this.postRequest("api/v1/product", data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getProductList = async (config) => {
        try {
            let response = await this.getRequest(`api/v1/product?perPage=${config.perPage}&page=${config.page}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getAllProducts = async () => {
        try {
            let response = await this.getRequest(`api/v1/product/all`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getActiveProducts = async () => {
        try {
            let response = await this.getRequest(`api/v1/product/active`, { login: true });
            return response;
        } catch (err) {
            throw err;
        }
    }

    getFeaturedProducts = async () => {
        try {
            let response = await this.getRequest(`api/v1/product/featured`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    getProductById = async (id) => {
        try {
            let response = await this.getRequest(`api/v1/product/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getProductsByCategorySlug = async (slug) => {
        try {
            let response = await this.getRequest(`api/v1/product/category/${slug}`);
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    getProductsByBrandSlug = async (slug) => {
        try {
            let response = await this.getRequest(`api/v1/product/brand/${slug}`);
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    deleteProductById = async (id) => {
        try {
            let response = await this.deleteRequest(`api/v1/product/${id}`, { login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    updateProductById = async (data, id) => {
        try {
            let response = await this.putRequest(`api/v1/product/${id}`, data, { file: true, login: true });
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}

const productService = new ProductService();
export default productService;