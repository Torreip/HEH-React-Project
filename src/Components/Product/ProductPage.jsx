import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ErrorToaster from "../Layout/ErrorToaster";
import { Spinner } from "react-bootstrap";

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
            {errorMessage && (
                <ErrorToaster errorMessage={errorMessage} link={""} />
            )}
            {productData == null && !errorMessage && (
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {productData != null && (
                <>
                    <h2>{productData.name}</h2>
                    <Carousel
                        style={{ width: "75vh", height: "50vh" }}
                        variant="dark"
                        slide={true}
                    >
                        <Carousel.Item>
                            <img
                                src={productData.mainImage}
                                style={{ maxWidth: "75vh", height: "50vh" }}
                            ></img>
                        </Carousel.Item>
                        ;
                        {productData.images.map((productImage, index) => (
                            <Carousel.Item
                                key={index}
                                style={{ maxWidth: "75vh", height: "50vh" }}
                            >
                                <img
                                    src={productImage}
                                    style={{
                                        maxWidth: "75vh",
                                        height: "50vh",
                                    }}
                                ></img>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </>
            )}
        </>
    );
}

export default ProductPage;
