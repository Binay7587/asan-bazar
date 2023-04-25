import { Col, Container, Row } from "react-bootstrap"
import productService from "../../../services/product.service"
import { useCallback, useEffect, useState } from "react";
import SingleGridProductComponent from "../../../components/front/product/single-grid-product.component";

const ProductListPage = () => {
    const [product, setProduct] = useState({});
    const loadProductList = useCallback(async () => {
        try {
            let response = await productService.getActiveProducts();
            if (response.status) {
                setProduct(response.result);
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    useEffect(() => {
        loadProductList()
    }, [loadProductList]);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 className="text-center">All Products</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="mt-3">
                {
                    product && product.length > 0 ? product.map((p, index) => (
                        <SingleGridProductComponent product={p} key={index} />
                    )) : <Col>No Products</Col>
                }
            </Row>
        </Container>
    )
}

export default ProductListPage