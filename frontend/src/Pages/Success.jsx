import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  font-family: roboto, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  width: fit-content;
  margin: 60px auto;
  text-align: center;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100px;
  margin-top: 8%;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  padding: 5px;
  font-size: 16px;
  border-radius: 6px;
`;

function Success() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  let id = Math.round(Math.random() * 3311000);

  return (
    <Box>
      <Image
        src="https://c.tenor.com/0AVbKGY_MxMAAAAC/check-mark-verified.gif"
        alt="green tick"
      />
      <h2>Thank you for your purchase!</h2>
      <p>
        Your order id: <span id="order">{id}</span>
      </p>

      <Button onClick={handleClick}>Continue Shopping</Button>
    </Box>
  );
}

export default Success;