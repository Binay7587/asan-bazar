import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
import SingleGridComponent from "../../components/product/single-grid.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import banner1 from '../../assets/images/banners/banner1.jpg';
import banner2 from '../../assets/images/banners/banner2.jpg';
import banner3 from '../../assets/images/banners/banner3.jpg';
import banner4 from '../../assets/images/banners/banner4.jpg';

import brand1 from '../../assets/images/brands/brand1.jpg';
import brand2 from '../../assets/images/brands/brand2.png';
import brand3 from '../../assets/images/brands/brand3.jpg';
import brand4 from '../../assets/images/brands/brand4.png';
import brand5 from '../../assets/images/brands/brand5.png';
import brand6 from '../../assets/images/brands/brand6.jpg';
import brand7 from '../../assets/images/brands/brand7.png';

import starGrey from '../../assets/images/star-grey.png';
import starYellow from '../../assets/images/star-yellow.png';
import HomeMenu from "../home/components/menu.component";

const HomePageLayout = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    return (<>
        <HomeMenu />

        <div className="banner-wrapper">
            <Slider {...settings}>
                <div>
                    <Image src={banner1} className="img img-fluid" alt="banner" />
                </div>
                <div>
                    <Image src={banner2} className="img img-fluid" alt="banner" />
                </div>
                <div>
                    <Image src={banner3} className="img img-fluid" alt="banner" />
                </div>
                <div>
                    <Image src={banner4} className="img img-fluid" alt="banner" />
                </div>
            </Slider>
        </div>

        <Container className="my-5 bg-white" fluid>
            <Row className="py-1">
                <Col>
                    <h4>Brands</h4>
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <Card.Img variant="top" src={brand1} />
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <Card.Img variant="top" src={brand2} />
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <Card.Img variant="top" src={brand3} />
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <Card.Img variant="top" src={brand4} />
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <Card.Img variant="top" src={brand5} />
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <Card>
                        <Card.Img variant="top" src={brand6} />
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container className="my-5" fluid>
            <Row>
                <Col>
                    <h4>Latest Products</h4>
                </Col>
            </Row>
            <Row>
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
                <SingleGridComponent />
            </Row>
        </Container>
    </>);
}

export default HomePageLayout;