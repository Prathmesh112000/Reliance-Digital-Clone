import axios from "axios";
// Action types
export const CAROUSEL_LAPTOPS = "CAROUSEL_LAPTOPS";



// Action creators
export const carouselProducts = () => async (dispatch,getState) => {
try {
    const { data } = await axios.get("http://localhost:8080/products", { category: "laptops" })
    console.log(data);
} catch (error) {
    
}
}