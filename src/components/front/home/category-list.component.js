import { useCallback, useEffect, useState } from "react";
import categoryService from "../../../services/category.service";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import noCategoryImage from "../../../assets/images/no-image.jpg";

const CategoryListSection = () => {
    let [categoryList, setCategoryList] = useState([]);

    let LoadCategoryList = useCallback(async () => {
        try {
            let response = await categoryService.getFeaturedCategories();
            if (response.status) {
                setCategoryList(response.result);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        LoadCategoryList()
    }, [LoadCategoryList])

    return (
        <Container className="my-5" fluid>
            <Row>
                <Col>
                    <h4>Featured Categories</h4>
                </Col>
            </Row>
            <Row>
                {
                    categoryList && categoryList.length > 0 ? categoryList.map((category, index) => {
                        return (<Col sm={12} md={6} lg={3} className="mb-3" key={index}>
                            <Card>
                                <Card.Img variant="top" src={category?.categoryImage ? `${process.env.REACT_APP_BASE_URL}/images${category.categoryImage}` : noCategoryImage} alt="product" />
                                <Card.Body>
                                    <Card.Title>{category.title}</Card.Title>
                                    <Button variant="success" size="sm">View More</Button>
                                </Card.Body>
                            </Card>
                        </Col >)
                    }) : <Col>No Categories</Col>
                }
            </Row>
        </Container>
    )
}

export default CategoryListSection