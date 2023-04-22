import { Container, Row, Col, Card } from "react-bootstrap";

import brand1 from '../../assets/images/brands/brand1.png';
import brand2 from '../../assets/images/brands/brand2.png';
import brand3 from '../../assets/images/brands/brand3.jpg';
import brand4 from '../../assets/images/brands/brand4.png';
import brand5 from '../../assets/images/brands/brand5.png';
import brand6 from '../../assets/images/brands/brand6.jpg';
import { NavLink } from "react-router-dom";
import HomePageBanner from "../../components/front/home/banner.component";
import CategoryListSection from "../../components/front/home/category-list.component";
import LatestProductsComponent from "../../components/front/home/latest-products.component";

const HomePage = () => {

    return (<>
        <HomePageBanner />

        <CategoryListSection />

        <Container className="my-5 bg-white" fluid>
            <Row className="py-1">
                <Col>
                    <h4>Brands</h4>
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <NavLink to="/brands/apple">
                            <Card.Img variant="top" src={brand1} />
                        </NavLink>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <NavLink to="/brands/apple">
                            <Card.Img variant="top" src={brand2} />
                        </NavLink>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <NavLink to="/brands/apple">
                            <Card.Img variant="top" src={brand3} />
                        </NavLink>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <NavLink to="/brands/apple">
                            <Card.Img variant="top" src={brand4} />
                        </NavLink>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <NavLink to="/brands/apple">
                            <Card.Img variant="top" src={brand5} />
                        </NavLink>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <NavLink to="/brands/apple">
                            <Card.Img variant="top" src={brand6} />
                        </NavLink>
                    </Card>
                </Col>
            </Row>
        </Container>

        <LatestProductsComponent />
    </>)
}

export default HomePage