import { Col, Card, Badge } from "react-bootstrap";

import noProductImage from '../../../assets/images/noProductImage.png';
import { NavLink } from "react-router-dom";

const SingleGridProductComponent = ({ product }) => {

    return (
        <Col sm={12} md={6} lg={3} className="mb-3">
            <NavLink to={`/products/${product.slug}`}>
                <Card style={{ height: "370px" }}>
                    <Card.Img variant="top" src={product.productImage && product.productImage.length > 0 ? import.meta.env.VITE_BASE_URL + '/images' + product.productImage[0] : noProductImage} alt="product" style={{ objectFit: "cover", minHeight: "250px", maxHeight: "250px" }} />
                    <Card.Body style={{ height: "50%", overflow: "hidden" }}>
                        <Card.Title style={{ fontSize: "1rem", height: "1rem", overflow: "hidden" }}>{product.title}</Card.Title>
                        <Card.Text as="div" style={{ fontSize: "0.875rem", height: "4rem", overflow: "hidden" }}>
                            <h5 className="me-3" style={{ color: "#ffa500" }}>
                                NPR. {product.afterDiscount}
                            </h5>
                            {
                                product.discount > 0 && <><span className="text-danger">
                                    <del>NPR. {product.price}</del>
                                </span> <Badge bg="success">{product.discount} % off</Badge>  </>
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </Col >
    )
}

export default SingleGridProductComponent;