import React from 'react';

const Carousels = ({image1,image2,image3,image4,image5}) => {
    return (
        <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button  type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={image1} className="d-block w-100" alt="..." />
           
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image2} className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="..." />
          
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="..." />
          
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
            </div>
            </>
  )
}

export default Carousels;