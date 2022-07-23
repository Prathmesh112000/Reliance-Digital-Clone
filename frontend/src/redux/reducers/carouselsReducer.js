import { CAROUSEL_LAPTOPS } from "../actions/carouselsActions";

const initialState = {
    laptops : {}
}
export const carouselProductsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CAROUSEL_LAPTOPS: {
         return {}
        }
        default:
            return state;
}
}