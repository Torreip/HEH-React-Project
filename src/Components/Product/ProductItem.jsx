import ProductItemForm from "./ProductItemForm";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductItem(props) {
    return (
        <Card style={{ height: "100%" }}>
            <Card.Body>
                <Link to={"product/" + props.product._id} className="cardBody">
                    <Card.Img variant="top" src={props.product.mainImage} />
                    <Card.Title>{props.product.name}</Card.Title>
                </Link>
            </Card.Body>
            <Card.Footer>
                {props.product.price}€
                <ProductItemForm product={props.product} />
            </Card.Footer>
        </Card>
    );
}

export default ProductItem;
