import React from 'react';
import { FaHome } from "react-icons/fa";
const Carousels = () => {
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
            <img src="https://www.reliancedigital.in/medias/Back-to-School-Carousel-Banner-27-06-2022-05.jpg?context=bWFzdGVyfGltYWdlc3wxMDA4MzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGY5L2g2NC85ODU4MjE3ODAzODA2LmpwZ3wzYjk2Nzg0MmIzZWQxYzk4NDhiZWUzODM4Y2Y4ZTQ0ZjNiMmNiN2I5OTkyMDUwNzJjNGU3MWZiZGVjYWRiYTI3" className="d-block w-100" alt="..." />
           
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.reliancedigital.in/medias/intel-12th-Gen-Gaming-Laptop-CLP-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzc2Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGM2L2hiZS85ODU5OTMzNjAxODIyLmpwZ3xjNGFmMmY1OWNlZWJiMmE0N2Y1OGIyMDc2YjBkYjllOWFkMWYzYWMyZTUyMTVkZTY3MTMyOTQ0YzFlZWYxMWVj" className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src="https://www.reliancedigital.in/medias/Microsoft-Surface-Laptop-Go-2-CLP-Banner-05-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w2NzA5NHxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDkxLzk4NjE1MDMyMjE3OTAuanBnfGQ3YTIzMjNlZDVkNzhiZGY0ZWFlZjEyZTQ0Y2JlMTBmNmQzMWUzZjAxODYxNTRiMjIwN2I2Nzk1NzgzZWQyYjU" className="d-block w-100" alt="..." />
          
          </div>
          <div className="carousel-item">
            <img src="https://www.reliancedigital.in/medias/Laptops-D-CLP-Banner-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMDk1NTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYwL2g5NC85ODYyMjA2NzgzNTE4LmpwZ3xmMWMwYzdlNjA2MWUzZDA4MTJiYjAzYmMyMDA1NjdhOTgyY2Q3MGQwMWViYjMyNmQxMjNjZmRmNWU5ODVhNjM1" className="d-block w-100" alt="..." />
          
          </div>
          <div className="carousel-item">
            <img src="https://www.reliancedigital.in/medias/MSI-Laptops-at-never-before-prices-14-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0NTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGE1L2gwYS85ODYyMjA2OTE0NTkwLmpwZ3w4ODcwMGM2MmY2ZmFjMGQ0YmYxZGYwNWY5OGY4ZDE4YjI2NGI0NzNjMGRlZjZmMjczYTk3MzRlODVmOTMwYjA5" className="d-block w-100" alt="..." />
          
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
            <div className="border px-2 d-flex align-items-center">
                <FaHome />
                <p className=" mx-2 mt-2 mb-2">Laptops</p>
            </div>
            </>
  )
}

export default Carousels;