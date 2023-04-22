import { useCallback, useEffect, useState } from "react";
import categoryService from "../../../services/category.service";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import noCategoryImage from "../../../assets/images/no-image.jpg";
import { NavLink } from "react-router-dom";

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
                    categoryList && categoryList.length > 0 ? categoryList.map((c, index) => {
                        return <Col sm={12} md={6} lg={3} className="mb-3" key={index}>
                        <NavLink to={`/categories/${c.slug}`}>
                            <Card style={{ cursor: "pointer" }}>
                                <Card.Img variant="top" src={c?.categoryImage ? `${process.env.REACT_APP_BASE_URL}/images${c.categoryImage}` : noCategoryImage} alt="product" />
                                <Card.Body>
                                    <Card.Title>{c.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </Col >
                    }) : <Col>No Categories</Col>
                }
            </Row>
        </Container>
    )
}

export default CategoryListSection