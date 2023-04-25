import { Col, Container, Row } from "react-bootstrap"
import SingleGridProductComponent from "../product/single-grid-product.component"
import productService from "../../../services/product.service"
import { useCallback, useEffect, useState } from "react";

const LatestProductsComponent = () => {
    let [products, setProducts] = useState([]);

    const getAllProducts = useCallback(async () => {
        try{
            let response = await productService.getActiveProducts();
            if(response.status) {
                setProducts(response.result)
            }
        } catch(error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getAllProducts()
    }, [getAllProducts]);

    return (<>
        <Container className="my-5" fluid>
            <Row>
                <Col>
                    <h4>Latest Products</h4>
                </Col>
            </Row>
            <Row>
                {
                    products.map((product, index) => {
                        return <SingleGridProductComponent product={product} key={index} />
                    })
                }
            </Row>
        </Container>
    </>)
}

export default LatestProductsComponent