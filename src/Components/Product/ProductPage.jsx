import { useLoaderData } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function ProductPage() {
    const productData = useLoaderData();
    return (
        <>
            <h2>{productData.name}</h2>
            <Carousel>
                <Carousel.Item>
                    <img src={productData.mainImage}></img>
                </Carousel.Item>
                ;
                {productData.images.map((productImage, index) => (
                    <Carousel.Item key={index}>
                        <img src={productImage}></img>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default ProductPage;
