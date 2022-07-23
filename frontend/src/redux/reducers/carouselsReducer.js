import { CAROUSEL_LAPTOPS, CAROUSEL_MOBILE, CAROUSEL_TV, CAROUSEL_WASHING_MACHINE } from "../actions/carouselsActions";

const initialState = {
    laptop: [],
    tv: [],
    mobile: [],
    machine : []
}
const carouselProductsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CAROUSEL_LAPTOPS: {
         return {laptop : payload}
        }
        case CAROUSEL_TV: {
            return {tv : payload}
        }
        case CAROUSEL_MOBILE: {
            return {mobile : payload}
        }
        case CAROUSEL_WASHING_MACHINE: {
            return {machine : payload}
            }
        default:
            return state;
}
}

export default carouselProductsReducer;