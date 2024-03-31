import axios from "axios";
export async function productLoader({ params }) {
    const productInfo = (
        await axios.get("http://localhost:3000/api/product/" + params.productID)
    ).data.product;
    return productInfo;
}
