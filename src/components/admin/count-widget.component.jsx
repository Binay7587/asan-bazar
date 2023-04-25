import { Card, Col } from "react-bootstrap"

const widgetStyle = {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const CountWidget = ({ count, icon, color, title }) => {
    return (
        <Col xl={3} md={6}>
            <Card
                bg={color}
                text={'light'}
                className="mb-2"
            >
                <Card.Header><b>{title}</b></Card.Header>
                <Card.Body style={widgetStyle}>
                    <Card.Title as="span" style={{ fontSize: "3rem" }}> {icon} </Card.Title>
                    <Card.Text as="span">
                        NPR. {count}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CountWidget