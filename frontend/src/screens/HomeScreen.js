import React from "react";
import Carousel from "../components/MainCarousel";
import { FaHome } from "react-icons/fa";
import styled from "../styles/HomePage.module.css";
import ProductCarousel from "../components/ProductsCaraousel";

const HomeScreen = () => {
  return (
    <div>
      <img width="100%" src="https://www.reliancedigital.in/medias/DIS-Carousel-Banner-Sale-Starts-21-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g1NC85ODYzMzMyNTYwOTI2LmpwZ3xjN2RhOWMzMjBhODE0YzMwNWNmN2I0YzA4YjExNDg5OWVlOGJhYTRhY2FhNzVhNjI4ODhhYzA4NDFhOWI5YjZj" alt="" />
      <Carousel
        image1="https://www.reliancedigital.in/medias/Boot-Up-ICICI-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ0MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hmNS85ODYxNDY0NjIxMDg2LmpwZ3xmYzQzYzE3MTg1YTk5MjE5OWU4ZTE3ODYzNjU1ZmIxYzg1Mjc0YThjZmMyYWYxNGE2NjRmZjM2OTNkMTI5NDMx"
        image2="https://www.reliancedigital.in/medias/Samsung-Galaxy-M52-Desktop-20.06.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gwYy85ODYxOTc2NDkwMDE0LmpwZ3w5N2EzMDE4MWQ4ZTI5MmE1NDRkNjRlODJkYWNhNjJkYzQ5YzBiMDdjMThhYjhkOWU2MTAyM2YzZGQxNWIyYzk0"
        image3="https://www.reliancedigital.in/medias/Lenovo-Laptops-Desktop-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hiMC85ODYyMjA3MDQ1NjYyLmpwZ3w1MmIyMzI0MmY3NzJkYjI2YTI5NTdkZDMwYmUyMmQxZDIyMGY0MWI5OWM2ZTJhNzIxMDgyZjUxY2YyZTdmNzA5"
        image4="https://www.reliancedigital.in/medias/Samsung-Days-Carousel-Banner-08-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NTYyNXxpbWFnZS9qcGVnfGltYWdlcy9oMTMvaGJmLzk4NjAwNjUwOTk4MDYuanBnfGQ2ODBmYWQ3NjdiYTRjM2I3ZWMwY2RjYjEzYmY1ZGY2YzljYmYxMGRmMzA4ZTRmYzE0YmI1Nzk1ZGI0ZWVkOGQ"
        image5="https://www.reliancedigital.in/medias/OnePlus-TV-CLP-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDY4NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2g0OC85ODYyNDU3MjYyMTEwLmpwZ3xiNjUwZjZiNzQ0MWU0MjUzYmNmNmUyMzEzMDM2MzMxNDAzZWI5ZTNlOTQzMzdmYWU5MmRmN2Q2OTBiZTBjYjhi"
      />
       <div className="border px-3 d-flex align-items-center">
                <FaHome />
                <p className=" mx-2 mt-2 mb-2">Laptops</p>
            </div>
      <p className="fs-4 py-3 px-3">
        BEST DEALS ON LATEST LAPTOPS |
        <span className={styled.smallText}>VIEW ALL</span>
      </p>
      <ProductCarousel />
      <div className="px-2 mb-2">
        <p className="fs-4 py-3 px-3">TOP BRANDS - WASHING MACHINE</p>
        <img
          className="mx-3 px-1"
          src="https://www.reliancedigital.in/medias/Sansui-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNjM0NHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDA4Lzk4NjE5ODU3OTYxMjYuanBnfDdjMmNkOWMyNTFlNTAyYTBkNjg3ZWMxYjBmMGNlYzQwMzkzZjc2Y2QyOGM4MzRiNDYxYmQ5ZjU3MmZhNjE4NjI"
          alt=""
        />
        <img
          className="mx-3"
          src="https://www.reliancedigital.in/medias/Samsung-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMzc1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDc1Lzk4NjE5ODU4NjE2NjIuanBnfDVhZWRlNjAzYmE2MWUxNGNiMTgyMTIwODM0ZTBhYTg5ZmJkZDEyZTA5YmFkYmYwMTNiZWE5YTBmMGQyMzcyMzE"
          alt=""
        />
        <img
          className="mx-3"
          src="https://www.reliancedigital.in/medias/LG-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNzk1MXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaGY4Lzk4NjE5ODU5OTI3MzQuanBnfGY3NzdiYzA0MDFkZjhmNTRlYTI5ODgyYWM5MTdjNjI0ZjZjNjlhY2E3YTIwNTI2MzllYTI5MGQxY2Q0Mjg4Yjk"
          alt=""
        />
        <img
          className="mx-3"
          src="https://www.reliancedigital.in/medias/Candy-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjEyNXxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDAwLzk4NjE5ODYxMjM4MDYuanBnfDU5MzBjMmRjZThmNTYyZWY1ZmIyYTNlMDdlYzg1YWFkYzlhZWVmNTE3MjM0ZTM3MGNmOTBlMDZiNDIwM2Y4YmQ"
          alt=""
        />
      </div>
      <div className="px-3 mb-2">
        <p className="fs-4 py-3 px-3">OFFER YOU CANNOT MISS</p>
        <img
          className="mx-3 px-1"
          src="https://www.reliancedigital.in/medias/Apple-Watch-offers-u-cannot-miss.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3MnxpbWFnZS9qcGVnfGltYWdlcy9oODkvaDQzLzk4NjAxMDc3NjM3NDIuanBnfDM2MzQ3MzZkNzhhZGE3YzdkMmRkMmQxYWJiYjVlMTdjNWNjYzk2M2NiNzgxNGRiZWNmOGU0YTRhMTI3NmI0ZmQ"
          alt=""
        />
        <img
          className="mx-3 "
          src="https://www.reliancedigital.in/medias/OFFERS-YOU-CANNOT-MISS-Water-Purifier.jpg?context=bWFzdGVyfGltYWdlc3w0MDU5NXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDU4Lzk4NTc1MDkyNjEzNDIuanBnfDc0ZTMxNzIzMjI4YWRiOGFhYjg3NGJiZjlkYmRiYWY2NDI4MjA2YmVmY2FhYjA2MDYzN2FiN2ZhM2FlMzVjNjI"
          alt=""
        />
        <img
          className="mx-3"
          src="https://www.reliancedigital.in/medias/Kodak-HD-Ready-LED-Smart-TV.jpg?context=bWFzdGVyfGltYWdlc3w3NTIyMnxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDk3Lzk4NjI0NTc1ODk3OTAuanBnfGFkNzcyMDQ2MGIyZDkyYWVjYjZkM2Q0OWIzOGIyZmMxMGZkM2Q1MGZmOGY2MjRhODU3ZDAxOWEzMDQ0YWI5N2E"
          alt=""
        />
        <img
          className="mx-2"
          src="https://www.reliancedigital.in/medias/Samsung-190L-Single-Door-Refrigerator.jpg?context=bWFzdGVyfGltYWdlc3w0MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oZWYvaDY4Lzk4NjEyODA0NjQ5MjYuanBnfDAyODcwNGM3ZGQxYjcxODIyZDQ1YmY5ZDY3NjIzNTZhMGU0N2VhMjBkNzU1ZmJkNmIwN2QzNzQyODYwNWU4NGI"
          alt=""
        />
      </div>
      <div className="px-3 mb-2">
        <img
          className="mx-3 px-1"
          src="https://www.reliancedigital.in/medias/HP-Laptops.jpg?context=bWFzdGVyfGltYWdlc3w1NzM0MHxpbWFnZS9qcGVnfGltYWdlcy9oMWIvaDkyLzk4NjI0NTczOTMxODIuanBnfGZjZTRmMTgxYzY2NGNhOGRiNzU4NTZhMGYzNjY5NjllYzYzZWUxNTUyYjRlZmJmZWJkZGY5NzcxOWU2YWUzN2M"
          alt=""
        />
        <img
          className="mx-3 "
          src="https://www.reliancedigital.in/medias/Realme-C25Y-27.06.jpg?context=bWFzdGVyfGltYWdlc3w1Nzg3OXxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGJmLzk4NTc1MTEzMjU3MjYuanBnfGY4ZGY0NjRlZGYyYWQ4ZTI4NzFjMWI0MGJmMzE5NWMxNDFjYjU4YWQzMzdiNDViMzA4ZWYxOGY5ZmIyZTI0YWI"
          alt=""
        />
        <img
          className="mx-3"
          src="https://www.reliancedigital.in/medias/Printers-and-Inks-05.jpg?context=bWFzdGVyfGltYWdlc3w1MTIxMnxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDg4Lzk4NjI0NTc1MjQyNTQuanBnfGFiNTE0ODIwMDNmZTQxNTVhY2NhZmQyYjg1OGJjNDUxYTlhZTI0YmVmZWViOTE0YTU0M2RkMWQ4NmUxNDU0M2Q"
          alt=""
        />
        <img
          className="mx-2"
          src="https://www.reliancedigital.in/medias/True-Wireless-05.jpg?context=bWFzdGVyfGltYWdlc3wzNDkxOXxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDRhLzk4NjI0NTc0NTg3MTguanBnfDhhZmU1MGE5MjQ2NDBlZjZhMjhmOTZhNGI5Y2JhZmFhNWU1MmMxMDFiN2VhYzkwOGE2NmFkNjZhNjE2NzY4MjI"
          alt=""
        />
      </div>
      <Carousel
        image1="https://www.reliancedigital.in/medias/Oppo-Reno-8PRO-NPI-D-18.04.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2g3My85ODYyNDM3NTY4NTQyLmpwZ3xkZmM1MDIxODRlYTc4MjRjMzhiODBhNmY5ZjdlYmVlMjdhOWNkMjYxMmU4Y2U2Yjk2YjA4OWNhMWRmYjMxYTFi"
        image2="https://www.reliancedigital.in/medias/OnePlus-Nord-2T-5G-NPI-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGY3Lzk4NjAwNjcwNjU4ODYuanBnfGEzZDhiNmRmYjBiYzg1YzFjOGI5MmFkMGJlZjYzMTAyY2FkNzNkMzIwNTdkYWM2ZTA0YzlkNzFjOTZiN2E1NDA"
        image3="https://www.reliancedigital.in/medias/Samsung-Smart-HD-TV-NPI-D-11.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzk4NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gwOC85ODYyNDU3NjU1MzI2LmpwZ3wxZjgxYTE3OTBjMjE4Zjg1YzEwZGU1ZjkzYzFkYjc2Yjg4YjQzNjkxNjQyNzQyMTkxNmIwMTA2MDcxNDk2YWNh"
        image4="https://www.reliancedigital.in/medias/Ignitr-Lyt-1365-X-260-NPI-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDExMzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDNjL2hiZS85ODYzNDE3NzU3NzI2LmpwZ3w5NWE4NTEzZDgxNjVjNmFiOWNhMWI4N2RiYTE0ZDc2MzVkZDA0ODkyOWI0YzE0OWJiZGU5MDg5ZGU2MGQzOTIx"
        image5="https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Dial-NPI-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2g1Mi85ODYwNjY3ODAxNjMwLmpwZ3wyY2UxNjU1ZDQ1N2NjOTc4MmNhZjE2NTk1YTAwNDIwMjFjYjA2MzNhOGUxY2Y1YmYyMWI1NmZjZmQ0ZjNjNGNk"
      />
    </div>
  );
};

export default HomeScreen;
