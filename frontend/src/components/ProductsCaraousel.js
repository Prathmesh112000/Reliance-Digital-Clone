import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/HomePage.module.css";
import { SamplePrevArrow, SampleNextArrow } from "./Arrows";
import { useDispatch } from 'react-redux';
import { carouselProducts } from '../redux/actions/carouselsActions';

const ProductsCaraousel = () => {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  useEffect(() => {
    dispatch(carouselProducts());
  }, [])
  
  return (
    <div className="px-5 mb-4">
        <Slider {...settings}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg" alt="" />
          <p style={{color : "blue", marginBottom : "10px"}}>Misfit by boAt T30 RTL Men's Trimmer, Active Black</p>
          <p>Deal Price: <span>₹ 69.00</span></p>
          <p>I.R.P: ₹1,499.00</p>
          <p>You Save: 70&(₹1,050)</p>
          <span>OFFERS AVAILABLE</span>
          </div>
          <div className={styles.imgContainer}>
          <img className={styles.img} src="https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg" alt="" />
          <p style={{color : "blue", marginBottom : "10px"}}>Misfit by boAt T30 RTL Men's Trimmer, Active Black</p>
          <p>Deal Price: <span>₹ 69.00</span></p>
          <p>I.R.P: ₹1,499.00</p>
          <p>You Save: 70&(₹1,050)</p>
          <span>OFFERS AVAILABLE</span>
          </div>
          <div className={styles.imgContainer}>
          <img className={styles.img} src="https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg" alt="" />
          <p style={{color : "blue", marginBottom : "10px"}}>Misfit by boAt T30 RTL Men's Trimmer, Active Black</p>
          <p>Deal Price: <span>₹ 69.00</span></p>
          <p>I.R.P: ₹1,499.00</p>
          <p>You Save: 70&(₹1,050)</p>
          <span>OFFERS AVAILABLE</span>
          </div>
          <div className={styles.imgContainer}>
          <img className={styles.img} src="https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg" alt="" />
          <p style={{color : "blue", marginBottom : "10px"}}>Misfit by boAt T30 RTL Men's Trimmer, Active Black</p>
          <p>Deal Price: <span>₹ 69.00</span></p>
          <p>I.R.P: ₹1,499.00</p>
          <p>You Save: 70&(₹1,050)</p>
          <span>OFFERS AVAILABLE</span>
          </div>
          <div className={styles.imgContainer}>
          <img className={styles.img} src="https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg" alt="" />
          <p style={{color : "blue", marginBottom : "10px"}}>Misfit by boAt T30 RTL Men's Trimmer, Active Black</p>
          <p>Deal Price: <span>₹ 69.00</span></p>
          <p>I.R.P: ₹1,499.00</p>
          <p>You Save: 70&(₹1,050)</p>
          <span>OFFERS AVAILABLE</span>
          </div>
          <div className={styles.imgContainer}>
          <img className={styles.img} src="https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg" alt="" />
          <p style={{color : "blue", marginBottom : "10px"}}>Misfit by boAt T30 RTL Men's Trimmer, Active Black</p>
          <p>Deal Price: <span>₹ 69.00</span></p>
          <p>I.R.P: ₹1,499.00</p>
          <p>You Save: 70&(₹1,050)</p>
          <span>OFFERS AVAILABLE</span>
          </div>
        </Slider>
      </div>

  )
}

export default ProductsCaraousel