import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Badge, Image, Form } from 'react-bootstrap';
import noProductImage from '../../../assets/images/noProductImage.png';
import { NavLink } from 'react-router-dom';

const ProductDetailComponent = ({ product }) => {
    const [activeImage, setActiveImage] = useState();

    const handleImageClick = (image) => {
        setActiveImage(image);
    };

    useEffect(() => {
        if (product.productImage && product.productImage.length > 0) {
            setActiveImage(process.env.REACT_APP_BASE_URL + '/images' + product.productImage[0]);
        } else {
            setActiveImage(noProductImage);
        }
    }, [product.productImage]);

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Row style={{ backgroundColor: "#fff" }}>
                        <Image src={activeImage} alt={`Product Image`} className="img-fluid" style={{ height: "350px", cursor: "pointer", objectFit: "contain" }} />
                    </Row>
                    <Row>
                        {
                            product.productImage && product.productImage.length > 0 && <div className="mt-3">
                                {
                                    product.productImage.map((image, index) => {
                                        image = process.env.REACT_APP_BASE_URL + '/images' + image;
                                        return <Image src={image} key={index} alt={`Product Image ${index}`} className={`img-fluid img-thumbnail me-2 ${activeImage === image ? 'active' : ''}`} style={{ width: "100px", cursor: "pointer" }} onClick={() => handleImageClick(image)} />
                                    })
                                }
                            </div>
                        }
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col>
                            <h2>{product.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 style={{ color: "#ffa500" }}>
                                NPR. {product.afterDiscount}
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                product.discount > 0 && <div><span className="text-danger">
                                    <del>NPR. {product.price}</del>
                                </span> <Badge bg="success" className="ms-2">{product.discount} % off</Badge>  </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Category:</strong>
                            {
                                product.categoryId && product.categoryId.map((category, index) => {
                                    return <NavLink to={`/categories/${category.slug}`} key={index} className="ms-2">
                                        <Badge bg="warning">{category.title}</Badge>
                                    </NavLink>
                                })
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Brand:</strong> {product.brand.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Availability:</strong> In Stock
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><strong>Seller:</strong> {product.sellerId.name}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={3}>
                                    <Form.Control
                                        name={"qty"}
                                        type="number"
                                        min={0}
                                        size='sm'
                                        placeholder='Qty'
                                    />
                                </Col>
                                <Col sm={9}>
                                    <Button variant="warning" size="sm">Add to Cart</Button>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col md={12}>
                    <Row>
                        <Col className={"mt-3"} style={{ backgroundColor: "#ffa500", color: "#fff" }}>
                            <h5 className='px-2 py-2'>Product Description</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"mt-3"} style={{ backgroundColor: "#fff" }}>
                            <p className='px-2 py-2' dangerouslySetInnerHTML={{__html: product.description}}></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetailComponent;