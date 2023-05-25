import { Container, Navbar, Nav, Form, Row, Col, Badge } from "react-bootstrap";
import logo from '../../../assets/images/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "../../../assets/css/home.css"
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import categoryService from "../../../services/category.service";

const HomeMenu = () => {
    const [categoryList, setCategoryList] = useState({});

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
        LoadCategoryList();
    }, [LoadCategoryList])

    let user = useSelector((rootUser) => {
        return rootUser.User.loggedInUser;
    });

    let cartQty = useSelector((rootStore) => {
        let cart = rootStore.Cart.cart;
        let quantity = 0;
        cart.map((item) => quantity += Number(item.quantity));

        return quantity;
    });

    return (<>
        <Navbar variant="light">
            <Container>
                <NavLink to="/" className="nav-brand">
                    <img
                        src={logo}
                        height="45"
                        className="d-inline-block align-top circle"
                        alt="React logo"
                    />
                </NavLink>
                <Nav className="me-auto" style={{marginLeft: "30px"}}> 
                    <NavLink to="/" className={"nav-link"}>Home</NavLink>
                    <NavLink to="/categories" className={"nav-link"}>Categories</NavLink>
                    <NavLink to="/brands" className={"nav-link"}>Brands</NavLink>
                    <NavLink to="/products" className={"nav-link"}>Products</NavLink>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        size="sm"
                    />
                </Form>
                <Nav>
                    <NavLink to="/cart" className={"nav-link"}>
                        <div style={{ position: 'relative' }}>
                            <FaShoppingCart size={20} /> Cart <Badge pill bg="warning" style={{ position: 'absolute', top: '-10px', right: '-10px' }}>{cartQty}</Badge>
                        </div>
                    </NavLink>
                    {
                        user ? <>
                            <NavLink to={`/${user.role}`} className={"nav-link"}>
                                {user.name}
                            </NavLink>
                        </> : <>
                            <NavLink to="/login" className={"nav-link"}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={"nav-link"}>
                                Register
                            </NavLink>
                        </>
                    }
                </Nav>
            </Container >
        </Navbar >
        <div className="text-white" style={{ backgroundColor: "#ffa500", overflow: "hidden" }}>
            <Container>
                <Row>
                    <Col>
                        <ul className="nav">
                            {
                                categoryList && categoryList.length > 0 ?
                                    categoryList.map((c, index) => {
                                        return <li className="nav-item" key={index}>
                                            <NavLink to={`/categories/${c.slug}`} className={"nav-link text-white"}>{c.title}</NavLink>
                                        </li>
                                    })
                                    : ""
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </>)
}

export default HomeMenu;
