import { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productService from "../../../services/product.service";
import ProductDetailComponent from "../../../components/front/product/product.detail.component";

const ProductDetailPage = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    let { slug } = useParams();
    const loadProduct = useCallback(async () => {
        try {
            let response = await productService.getProductBySlug(slug);
            if (response.status) {
                setProduct(response.result);
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw err;
        }
    }, [slug])

    useEffect(() => {
        loadProduct()
    }, [loadProduct])
    return (<>
        {
            loading ? <h1>Loading...</h1> :
                <Container className="my-5">
                    <Row className="mt-3">
                        {
                            product ? <ProductDetailComponent product={product} /> : <p className="text-center">Product doesn't exists.</p>
                        }
                    </Row>
                </Container>
        }
    </>)
}

export default ProductDetailPage