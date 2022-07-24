import axios from "axios";
// Action types
export const CAROUSEL_LAPTOPS = "CAROUSEL_LAPTOPS";
export const CAROUSEL_TV = "CAROUSEL_TV";
export const CAROUSEL_MOBILE = "CAROUSEL_MOBILE";
export const CAROUSEL_WASHING_MACHINE = "CAROUSEL_WASHING_MACHINE";



// Action creators
export const carouselLaptop = () => async (dispatch,getState) => {
try {
    const { data } = await axios.post("https://quiet-citadel-13240.herokuapp.com/products", { category: "laptop"})
    console.log("eeee",data.data);
    dispatch({type : CAROUSEL_LAPTOPS , payload : data.data})
} catch (error) {
    console.log(error);
}
}
export const carouselTV = () => async (dispatch,getState) => {
try {
    const { data } = await axios.post("http://localhost:8080/products", { category: "TV"})
    console.log(data);
    dispatch({type : CAROUSEL_TV , payload : data.data})
} catch (error) {
    console.log(error);
}
}
export const carouselMobile = () => async (dispatch,getState) => {
try {
    const { data } = await axios.post("http://localhost:8080/products", { category: "mobile"})
    console.log(data);
    dispatch({type : CAROUSEL_MOBILE , payload : data.data})
} catch (error) {
    console.log(error);
}
}
export const carouselWashingMachine = () => async (dispatch,getState) => {
try {
    const { data } = await axios.post("http://localhost:8080/products", { category: "washingMachine" })
    console.log(data);
    dispatch({type : CAROUSEL_WASHING_MACHINE , payload : data.data})
} catch (error) {
    console.log(error);
}
}