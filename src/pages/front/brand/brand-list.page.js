import { Card, Col, Container, Row } from "react-bootstrap"
import brandService from "../../../services/brand.service"
import noBrandImage from "../../../assets/images/no-image.jpg"
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BrandListPage = () => {
    const [brand, setBrand] = useState({});
    const loadBrandList = useCallback(async () => {
        try {
            let response = await brandService.getActiveBrands();
            if (response.status) {
                setBrand(response.result);
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    useEffect(() => {
        loadBrandList()
    }, [loadBrandList]);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 className="text-center">Brand List</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="mt-3">
                {
                    brand && brand.length > 0 ? brand.map((c, index) => {
                        return <Col sm={12} md={6} lg={3} className="mb-3" key={index}>
                            <NavLink to={`/brands/${c.slug}`}>
                                <Card style={{ cursor: "pointer", height: "310px" }}>
                                    <Card.Img variant="top" src={c?.brandImage ? `${process.env.REACT_APP_BASE_URL}/images${c.brandImage}` : noBrandImage} alt={brand + index} style={{ objectFit: "cover", minHeight: "250px", maxHeight: "250px" }} />
                                    <Card.Body style={{ height: "50%", overflow: "hidden" }}>
                                        <Card.Title>{c.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        </Col >
                    }) : <Col>No Brands</Col>
                }
            </Row>
        </Container>
    )
}

export default BrandListPage