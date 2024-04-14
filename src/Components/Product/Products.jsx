import Spinner from "react-bootstrap/Spinner";
import ErrorToaster from "../Layout/ErrorToaster";
import ProductItem from "./ProductItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import axios from "axios";

// import placeholder from "../../assets/placeholder.png";

function Products() {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/product")
            .then((response) => {
                let data = JSON.parse(JSON.stringify(response.data));
                setProducts(data["products"]);
            })
            .catch((error) => {
                setErrorMessage("💥☄️ " + error.message);
            });
    }, []);

    return (
        <>
            {errorMessage && (
                <ErrorToaster errorMessage={errorMessage} link={""} />
            )}
            {products.length == 0 && !errorMessage && (
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {products.length > 0 && (
                <>
                    <Row xs={1} md={2} className="g-5 mt-2">
                        {products.map((product, index) => (
                            <Col key={index}>
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    );
}

export default Products;
