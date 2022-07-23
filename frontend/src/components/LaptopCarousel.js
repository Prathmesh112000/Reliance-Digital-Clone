import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/HomePage.module.css";
import { SamplePrevArrow, SampleNextArrow } from "./Arrows";
import { useDispatch , useSelector} from 'react-redux';
import { carouselLaptop } from '../redux/actions/carouselsActions';
import { Link } from 'react-router-dom';

const ProductsCaraousel = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.carouselProductsReducer);
  const { laptop, tv, machine, mobile } = state;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  useEffect(() => {
    dispatch(carouselLaptop());
  }, [])
  
  return (
    <div className="px-5 mb-4">
      <Slider {...settings}>
        {laptop.map(elem => {
          return <Link to={`/products/${elem._id}`} className={styles.imgContainer}>
            <img className={styles.img} src={elem.img} alt="" />
            <p style={{ color: "blue", marginBottom: "10px" }}>{elem.name}</p>
            <p>Deal Price: <span>₹ {elem.price}</span></p>
            <p>I.R.P: ₹{elem.mrp}</p>
            <p>You Save: {elem.save}</p>
          <span>OFFERS AVAILABLE</span>
          </Link>
        })}
      
        </Slider>
      </div>

  )
}

export default ProductsCaraousel