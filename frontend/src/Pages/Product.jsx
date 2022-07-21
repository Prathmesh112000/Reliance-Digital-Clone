import React from "react";
import { ProdCategory } from "./ProdCategory";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid;
  // width: 100% ;
  display: flex;
  // grid-template-columns: repeat(2, 1fr);
  // gap: 10px;
  // margin: 20px;

`;

const StyledProdList = styled.div`

  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-left: 12px;
  // margin: 20px ;
`;

export const Product = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/Product`);
        let data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log("err:", err);
      }
    };
    getData();
  }, []);

  return (
    <Box>
      <div style={{ width: "20%" }}>
        <h2>FILTERS</h2>
        <hr />
        <h3>Price</h3>
        <input type="range" />
        <input type="text" />
        to
        <input type="tel" />
        <button>GO</button>
        <hr />
        <input type="checkbox" />
        Exclude out of Stock

      </div>
      <StyledProdList>
        {data.map((item) => {
          return <ProdCategory key={item.id} item={item} />;
        })}
      </StyledProdList>
    </Box>
  );
};
