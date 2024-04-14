import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { CartContext } from "../../App";
import trashcan from "../../assets/trashcan.svg";
import Form from "react-bootstrap/esm/Form";

function Cart(props) {
    let cartContext = useContext(CartContext);

    const removeItemHandler = (event) => {
        event.preventDefault();

        cartContext[1]({ type: "remove", id: event.target[1].value });
    };

    return (
        <Modal
            show={props.modalStatus}
            size="lg"
            onHide={props.cartHandler}
            backdrop="static"
            keyboard={false}
            centered
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Ref</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartContext[0].map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}€</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Form onSubmit={removeItemHandler}>
                                        <Button
                                            variant="outline-primary"
                                            type="submit"
                                        >
                                            <img
                                                src={trashcan}
                                                height={"26px"}
                                                width={"26px"}
                                            />
                                        </Button>
                                        <input
                                            type="hidden"
                                            value={product.id}
                                        ></input>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Container fluid>
                    <Row className="cartRow">
                        <h3>Total Amount</h3>
                        <h3>
                            {cartContext[0].reduce((acc, product) => {
                                return acc + product.price * product.quantity;
                            }, 0)}
                            €
                        </h3>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.cartHandler}>
                    Close
                </Button>
                <Button variant="primary">Order</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart;
