import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useContext } from "react";
import { CartContext } from "../../App";

function ProductItemForm(props) {
    let cartContext = useContext(CartContext);
    const addToCartHandler = (event) => {
        event.preventDefault();
        let quantity = event.target[0].valueAsNumber;
        if (quantity < 1 || isNaN(quantity)) {
            console.log("Invalid Quantity");
            return;
        }
        cartContext[1]({
            type: "add",
            id: props.product._id,
            name: props.product.name,
            quantity: quantity,
            price: props.product.price,
        });
    };

    return (
        <Form onSubmit={addToCartHandler}>
            <InputGroup>
                <Form.Control type="number" min={1} placeholder="Quantity" />
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </InputGroup>
        </Form>
    );
}

export default ProductItemForm;
