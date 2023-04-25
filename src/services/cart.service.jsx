import HttpService from "./http.service";

export class CartService extends HttpService {
    getCartByCartCode = async (cartCode) => {
        try {
            let response = await this.getRequest(`api/v1/cart/code/${cartCode}`, { login: true });
            return response;
        } catch (error) {
            throw error;
        }
    }

    getCartDetails = async (product) => {
        try {
            let response = await this.postRequest(`api/v1/cart/detail`, product, { login: true });
            return response;
        } catch (error) {
            throw error;
        }
    }

    updateCart = async (productId, quantity, cartId) => {
        try {
            let response = await this.postRequest(`api/v1/cart`, {productId, quantity, cartId}, { login: true });
            return response;
        } catch (error) {
            throw error;
        }
    }
}

const cartService = new CartService();
export default cartService;