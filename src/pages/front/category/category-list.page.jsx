import { Card, Col, Container, Row } from "react-bootstrap"
import categoryService from "../../../services/category.service"
import noCategoryImage from "../../../assets/images/no-image.jpg"
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryListPage = () => {
    const [category, setCategory] = useState({});
    const loadCategoryList = useCallback(async () => {
        try {
            let response = await categoryService.getActiveCategories();
            if (response.status) {
                setCategory(response.result);
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    useEffect(() => {
        loadCategoryList()
    }, [loadCategoryList]);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 className="text-center">Category List</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="mt-3">
                {
                    category && category.length > 0 ? category.map((c, index) => {
                        return <Col sm={12} md={6} lg={3} className="mb-3" key={index}>
                            <NavLink to={`/categories/${c.slug}`}>
                                <Card style={{ cursor: "pointer", height: "310px" }}>
                                    <Card.Img variant="top" src={c?.categoryImage ? `${import.meta.env.VITE_BASE_URL}/images${c.categoryImage}` : noCategoryImage} alt="product" style={{ objectFit: "cover", minHeight: "250px", maxHeight: "250px" }} />
                                    <Card.Body style={{ height: "50%", overflow: "hidden" }}>
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

export default CategoryListPage