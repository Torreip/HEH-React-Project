import ProductItemForm from "./ProductItemForm";
import Card from "react-bootstrap/Card";

function ProductItem(props) {
    return (
        <Card>
            <Card.Body>
                Link
                <a href={"product/" + props.product._id}>
                    <Card.Img variant="top" src={props.product.mainImage} />
                    <Card.Title>{props.product.name}</Card.Title>
                </a>
            </Card.Body>
            <Card.Footer>
                {props.product.price}€
                <ProductItemForm product={props.product} />
            </Card.Footer>
        </Card>
    );
}

export default ProductItem;
