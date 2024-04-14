import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ErrorToaster from "../Layout/ErrorToaster";
import { ListGroup, Row, Spinner, Container, Col } from "react-bootstrap";

function ProductPage() {
    const productID = useParams().id;

    //MAKE THE API CALL TO GET THE PRODUCT DATA

    const [productData, setProductData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/product/" + productID)
            .then((response) => {
                let data = JSON.parse(JSON.stringify(response.data));
                setProductData(data["product"]);
            })
            .catch((error) => {
                setErrorMessage("💥☄️ " + error.message);
            });
    }, [productID]);
    return (
        <>
            {errorMessage && <ErrorToaster errorMessage={errorMessage} />}
            {productData == null && !errorMessage && (
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {productData != null && (
                <>
                    <Carousel
                        style={{
                            width: "60vw",
                            height: "45vh",
                            margin: "5vh 0",
                        }}
                        variant="dark"
                        slide={true}
                    >
                        <Carousel.Item>
                            <img
                                src={productData.mainImage}
                                style={{
                                    maxWidth: "60vw",
                                    maxHeight: "40vh",
                                }}
                            ></img>
                        </Carousel.Item>
                        ;
                        {productData.images.map((productImage, index) => (
                            <Carousel.Item
                                key={index}
                                style={{
                                    maxWidth: "60vw",
                                    maxHeight: "40vh",
                                }}
                            >
                                <img
                                    src={productImage}
                                    style={{
                                        maxWidth: "60vw",
                                        maxHeight: "40vh",
                                    }}
                                ></img>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <h2 style={{ padding: "5vh 0" }}>{productData.name}</h2>
                    <ListGroup>
                        <Container fluid>
                            <ListGroup.Item>
                                <Row className="itemRow">
                                    <h3>Price:</h3>
                                    <p>{productData.price}€</p>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="itemRow">
                                    <h3>Stock:</h3>
                                    <p>{productData.quantity} Unit</p>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="itemRow">
                                    <h3>Ratings:</h3>
                                    <p>{productData.ratingsAverage}⭐</p>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="itemRow">
                                    <h3>Description:</h3>
                                    <p id="description">
                                        {productData.description}
                                    </p>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="itemRow">
                                    <h3>Size:</h3>
                                    <Col className="itemCol">
                                        {productData.sizes.map(
                                            (size, index) => (
                                                <p key={index}>{size.size}</p>
                                            )
                                        )}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row className="itemRow">
                                    <h3>Colors:</h3>
                                    <Col className="itemCol">
                                        {productData.colors.map(
                                            (color, index) => (
                                                <p key={index}>{color.color}</p>
                                            )
                                        )}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Container>
                    </ListGroup>
                </>
            )}
        </>
    );
}

export default ProductPage;
