import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../App";
import { useContext } from "react";

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    let cartItem = cartContext[0].reduce((acc) => {
        return acc + 1;
    }, 0);

    return (
        <Button variant="primary" onClick={props.cartHandler}>
            Cart <Badge bg="secondary">{cartItem}</Badge>
        </Button>
    );
};

export default HeaderCartButton;
