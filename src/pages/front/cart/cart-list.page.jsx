import { Button, Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import customStyles from "../../../assets/styles/tables.styles";
import { ImageFormatter } from "../../../components/common/formatter.component";
import noProductImage from '../../../assets/images/noProductImage.png';
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartService from "../../../services/cart.service";
import { FaMinus, FaPlus } from "react-icons/fa"
import { setCart } from "../../../reducers/cart.slicer";

const CartListPage = () => {
    const [data, setData] = useState([]);
    let cart = useSelector((rootStore) => {
        return rootStore.Cart.cart;
    });

    const dispatch = useDispatch();
    const changeCart = (quantity, productId) => {
        dispatch(setCart({
            quantity: quantity,
            productId: productId
        }));
    }

    const getCartDetails = useCallback(async () => {
        try {
            const response = await cartService.getCartDetails({ products: cart });
            if (response.status) {
                setData(response.result);
            }
        } catch (error) {
            // Do nothing
            console.log(error);
        }
    }, [cart])

    useEffect(() => {
        if (cart) {
            getCartDetails()
        }
    }, [cart, getCartDetails])

    const columns = [
        {
            name: 'Product',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <ImageFormatter url={row.productImage} noImageUrl={noProductImage} />,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => <>
                <Button variant="warning" size="sm" className="circle" onClick={(e) => {
                    e.preventDefault();
                    changeCart(Number(row.quantity) - 1, row.productId);
                }}><FaMinus /></Button>
                <span style={{ fontWeight: "bolder", padding: "10px" }}>{row.quantity}</span>
                <Button variant="warning" size="sm" className="circle" onClick={(e) => {
                    e.preventDefault();
                    changeCart(Number(row.quantity) + 1, row.productId);
                }}><FaPlus /></Button>
            </>,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => `NPR. ${row.afterDiscount}`,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => `NPR. ${row.amount}`,
            sortable: true,
        }
    ]

    return (<>
        <Container className="my-5">
            <Row>
                <Col>
                    <h1 className="text-center">Cart List</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <DataTable
                        customStyles={customStyles}
                        columns={columns}
                        data={data}
                        highlightOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={10}
                    />
                </Col>
            </Row>
        </Container>
    </>);
}

export default CartListPage;