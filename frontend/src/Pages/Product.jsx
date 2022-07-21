import React from "react";
import { ProdCategory } from "./ProdCategory";
import styled from "styled-components";
import "../App.css";

const Box = styled.div`
  border: 1px solid;
  display: flex;
  // width: 100% ;
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

const StyledCheckBox = styled.div`
  gap: 7px;
  display: flex;
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
      <div style={{ width: "30%", paddingLeft: "8px" }}>
        <h2>FILTERS</h2>
        <hr />
        <div>
          <h3>Price</h3>
          <input type="range" />
          <div style={{display: "flex", gap:"5px"}}>
            <InputBox placeholder="Min." type="tel" />
            <p style={{fontSize: "13px"}}>to</p>
            <InputBox placeholder="Max." type="tel" />
            <button
              style={{
                background: "#1f4985",
                color: "white",
                border: "none",
                padding: "10px",
                height: "42px",
                marginLeft: "5px",
              }}
            >
              GO
            </button>
          </div>
        </div>
        <hr />
        <div>
          <p>Availability</p>
          <StyledCheckBox>
            <input type="checkbox" />
            <p>Exclude out of Stock</p>
          </StyledCheckBox>
        </div>
        <hr />
        <div>
          <p>Brand</p>
          <StyledCheckBox>
            <input type="checkbox" />
            <p>Xiaomi</p>
          </StyledCheckBox>
          <StyledCheckBox>
            <input type="checkbox" />
            <p>Samsung</p>
          </StyledCheckBox>
          <StyledCheckBox>
            <input type="checkbox" />
            <p>Apple</p>
          </StyledCheckBox>
          <StyledCheckBox>
            <input type="checkbox" />
            <p>Realme</p>
          </StyledCheckBox>
          <a href="#" style={{ textDecoration: "none" }}>
            see more
          </a>
        </div>
        <hr />
        <p>Features</p>
        <hr />
        <p>5G</p>
        <hr />
        <p>4G</p>
        <hr />
        <p>Memory RAM</p>
        <hr />
        <p>Internal Storage</p>
        <hr />
        <p>Primary Camera</p>
        <hr />
        <p>Operating System Type</p>
        <hr />
        <p>SIM Type</p>
        <hr />
        <p>Glass Type</p>
        <hr />
        <p>Model</p>
        <hr />
        <p>Battery Capacities</p>
        <hr />
        <p>Front Camera</p>
        <hr />
        <p>Screen Size</p>
        <hr />
        <p>USB</p>
      </div>
      <StyledProdList>
        {data.map((item) => {
          return <ProdCategory key={item.id} item={item} />;
        })}
      </StyledProdList>
    </Box>
  );
};


function InputBox({ placeholder, type, onChange }) {
  const [onFucus, setOnFocus] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className="services__section__content__right__form__input">
      <label
        className="services__section__content__right__form__input__label"
        style={
          value !== ""
            ? { top: -10, zIndex: 1 }
            : onFucus
            ? { top: -10, zIndex: 1 }
            : null
        }
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        type={type}
        name={placeholder}
        id={placeholder}
        value={value}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        className="services__section__content__right__form__input__field"
      />
    </div>
  );
}