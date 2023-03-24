import { Col, Button, Card, Badge } from "react-bootstrap";
import Rating from "react-rating";

import brand1 from '../../../assets/images/brands/brand1.png';
import starGrey from '../../../assets/images/star-grey.png';
import starYellow from '../../../assets/images/star-yellow.png';

const SingleGridComponent = () => {
    return (
        <Col sm={12} md={6} lg={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={brand1} alt="product" />
                <Card.Body>
                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                    <Card.Text as="div">
                        <div className="d-flex justify-content-between">
                            <span className="pull-left">
                                <Rating
                                    placeholderRating={3}
                                    emptySymbol={<img src={starGrey} className="icon" alt="empty-symbol" />}
                                    placeholderSymbol={<img src={starGrey} className="icon" alt="placeholder-symbol" />}
                                    fullSymbol={<img src={starYellow} className="icon" alt="full-symbol" />}
                                />
                            </span>
                            <span className="pull-right">
                                <span className="me-3">
                                    Npr. 2,75,000
                                </span>
                                <span className="text-danger">
                                    <del>Npr. 3,00,000</del>
                                </span>
                            </span>
                        </div>
                        <div className="mt-2 mb-2">
                            <Badge bg="warning" className="me-2">
                                5% off
                            </Badge>
                        </div>
                    </Card.Text>
                    <Button variant="success" size="sm">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default SingleGridComponent;