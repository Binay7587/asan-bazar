import { useCallback, useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productService from "../../../services/product.service";
import SingleGridProductComponent from "../../../components/front/product/single-grid-product.component";

const BrandDetailPage = () => {
    const [catDetail, setCatDetail] = useState();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    let { slug } = useParams();
    const LoadBrandList = useCallback(async () => {
        try {
            let response = await productService.getProductsByBrandSlug(slug);
            if (response.status) {
                setCatDetail(response.result.brand);
                setProducts(response.result.products);
            }
            setLoading(false);
            console.log(response.result);
        } catch (err) {
            setLoading(false);
            console.log(err);
            throw err;
        }
    }, [slug])

    useEffect(() => {
        LoadBrandList()
    }, [LoadBrandList])
    return (<>
        {
            loading ? <h1>Loading...</h1> :
                catDetail ? <Container className="my-5">
                    <Row>
                        <Col>
                            <h1>{catDetail?.title}</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mt-3">
                        {
                            products && products.length > 0 ? <>
                                {
                                    products.map((p, index) => (
                                        <SingleGridProductComponent product={p} key={index} />
                                    ))
                                }
                            </> : <p className="text-center">Product doesn't exists in this brand.</p>
                        }
                    </Row>
                </Container> : <Alert variant="danger">Brand doesn't exists.</Alert>
        }
    </>)
}

export default BrandDetailPage