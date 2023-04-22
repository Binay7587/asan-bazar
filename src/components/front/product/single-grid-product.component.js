import { Col, Card, Badge } from "react-bootstrap";

import noProductImage from '../../../assets/images/noProductImage.png';
import { NavLink } from "react-router-dom";

const SingleGridProductComponent = ({ product }) => {

    return (
        <Col sm={12} md={6} lg={3} className="mb-3">
            <NavLink to={`/products/${product.slug}`}>
                <Card>
                    <Card.Img variant="top" src={product.productImage && product.productImage.length > 0 ? process.env.REACT_APP_BASE_URL + '/images' + product.productImage[0] : noProductImage} alt="product" />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text as="div">
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