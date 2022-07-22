import React from "react";
import { ProdCategory } from "./ProdCategory";
import styled from "styled-components";
import "../App.css";
// import * as react from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

const Box = styled.div`
  border: 1px solid;
  display: flex;
  // margin-top: 123px;
  // top: 10%;
  // position: relative;
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
          <div style={{ display: "flex", gap: "5px" }}>
            <InputBox placeholder="Min." type="tel" />
            <p style={{ fontSize: "13px" }}>to</p>
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
      <div>
        <StyledProdList>
          {data.map((item) => {
            return <ProdCategory key={item.id} item={item} />;
          })}
          {/* <Stack spacing={2}>
          <Pagination count={42} />
        </Stack> */}
        </StyledProdList>
        <div style={{ border: "1px solid" }}>Pagination</div>
        <div
          style={{ display: "flex", border: "1px solid", paddingLeft: "10px" }}
        >
          <div style={{ width: "73%" }}>
            <h5>Buy All Smartphones Online in India</h5>
            <p style={{ textAlign: "justify" }}>
              Mobile phones have transformed from being a device to make calls
              or send texts, to an entertainment and information gadget. Today,
              it’s practically impossible to spend a moment without our
              smartphones by our side- whether it’s just for sending an email,
              storing important files, doing a video call with our loved ones,
              or streaming the latest web series while commuting. Mobile phones
              come with a wide range of features these days- like fascinating
              photo filters, AI-powered cameras, blazing fast processing speeds,
              etc. At Reliance Digital, you can compare and find your choice of
              mobile phone online at the best prices.
            </p>
            <h5>Choosing A Smartphone As Per Operating System</h5>
            <p>
              With hundreds of options available, the online mobile shopping
              experience can be quite overwhelming if you don’t know what you
              want. Begin with choosing the type of operating system you’d be
              comfortable using. There are only two smartphone operating systems
              worth considering: Android and iOS.
            </p>
            <p>
              Here’s a comparison between Android phones and iOS phones that can
              help you choose better:
            </p>
            <table style={{ borderCollapse: "collapse", width: "66%" }}>
              <tr>
                <StyledTh>Features</StyledTh>
                <StyledTh>Android</StyledTh>
                <StyledTh>iOS</StyledTh>
              </tr>
              <tr>
                <StyledTh>Latest Stable Release</StyledTh>
                <StyledTd>Android 10</StyledTd>
                <StyledTd>iOS 13.3.1 and iPadOS 13.3.1</StyledTd>
              </tr>
              <tr>
                <StyledTh>Customizability</StyledTh>
                <StyledTd>A lot. Can change almost anything.</StyledTd>
                <StyledTd>Limited unless jailbroken</StyledTd>
              </tr>
              <tr>
                <StyledTh>Internet Browsing</StyledTh>
                <StyledTd>
                  Google Chrome (other browsers are available).
                </StyledTd>
                <StyledTd>
                  Safari (Other browsers are available but not as default)
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>Web Mapping Service</StyledTh>
                <StyledTd>Google Maps</StyledTd>
                <StyledTd>
                  Apple Maps, default as of iOS 6 (Google Maps also available
                  via a separate app download)
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>Available On</StyledTh>
                <StyledTd>
                  Major manufacturers such as Samsung, Oppo, OnePlus, Vivo,
                  Honor, and Xiaomi. Pixel and Android One devices are pure
                  Android.
                </StyledTd>
                <StyledTd>
                  iPod Touch, iPhone, iPad, Apple TV (2nd and 3rd generation)
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>Calls and Messaging</StyledTh>
                <StyledTd>
                  Google Messages. 3rd party apps like Facebook Messenger,
                  WhatsApp, Google Duo, Discord, and Skype all work on Android
                  and iOS.
                </StyledTd>
                <StyledTd>
                  iMessage, FaceTime (with other Apple devices only), and the
                  rest of the apps as in Android.
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>App Store</StyledTh>
                <StyledTd>
                  Google Play Store – 2,000,000+ apps. Other app stores like
                  Amazon and Aptoide also distribute Android apps.
                </StyledTd>
                <StyledTd>
                  Apple App Store – 1,000,000+ apps. Apps containing viruses are
                  very rare or nonexistent.
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>Photos & Videos Backup</StyledTh>
                <StyledTd>
                  Apps are available for an automatic backup of photos and
                  videos. Google Photos allows unlimited backup of photos at a
                  compressed quality.
                </StyledTd>
                <StyledTd>
                  Up to 5 GB of photos and videos can be automatically backed up
                  with iCloud, with more paid iCloud storage available via
                  subscription.
                </StyledTd>
              </tr>
              <tr>
                <StyledTh>Security</StyledTh>
                <StyledTd>Monthly security updates</StyledTd>
                <StyledTd>
                  Occasional security updates. Security threats are rare.
                </StyledTd>
              </tr>
            </table>
            <h5>Buy Mobile Phones As Per Price Band</h5>
            <h5>Features of mobile phones below 5000</h5>
          </div>
          <div
            style={{ paddingRight: "10px", paddingLeft: "10px", width: "32%" }}
          >
            <p>Smartphones Price List</p>
            <table style={{ borderCollapse: "collapse" }}>
              <tr>
                <Styledth>S.no</Styledth>
                <Styledth>Products - Smartphones</Styledth>
                <Styledth>Price</Styledth>
              </tr>
              <tr>
                <Styledtd>1</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    OnePlus 9 128 GB, 8 GB RAM, Arctic Sky, Mobile Phone
                  </a>
                </Styledtd>
                <Styledtd>₹37,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>2</Styledtd>
                <Styledtd>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Motorola E32s 32 GB, 3 GB RAM, Slate Gray, Mobile Phone
                  </a>
                </Styledtd>
                <Styledtd>₹7,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>3</Styledtd>
                <Styledtd>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    OnePlus 9 Pro 128 GB, 8 GB RAM, Morning Mist, Mobile Ph...
                  </a>
                </Styledtd>
                <Styledtd>₹49,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>4</Styledtd>
                <Styledtd>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Motorola E32s 32 GB, 3 GB RAM, Misty Silver, Mobile Pho...
                  </a>
                </Styledtd>
                <Styledtd>₹7,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>5</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Samsung Galaxy M52 128 GB, 6 GB RAM Icy Blue, Mobile Ph...
                  </a>
                </Styledtd>
                <Styledtd>₹20,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>6</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Oppo K10 128 GB, 6 GB RAM, Black Carbon, Mobile Phone
                  </a>
                </Styledtd>
                <Styledtd>₹14,990.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>7</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    OnePlus 9 Pro 256 GB, 12 GB RAM, Pine Green, Mobile Pho...
                  </a>
                </Styledtd>
                <Styledtd>₹54,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>8</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Redmi 9A Sport 32 GB 3 GB RAM, Coral Green, Mobile Phon...
                  </a>
                </Styledtd>
                <Styledtd>₹7,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>9</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Motorola G82 5G 128GB, 8GB RAM, Meteorite Gray, Mobile ...
                  </a>
                </Styledtd>
                <Styledtd>₹22,999.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>10</Styledtd>
                <Styledtd>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#1774ef" }}
                  >
                    Apple iPhone 12 128 GB, Blue
                  </a>
                </Styledtd>
                <Styledtd>₹60,900.00</Styledtd>
              </tr>
              <tr>
                <Styledtd>
                  Smartphones Price List updated on 21-07-2022
                </Styledtd>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Box>
  );
};

// function BasicPagination() {
//   return (

//   );
// }

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

const StyledTh = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 10px;
`;
const Styledth = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
`;
const StyledTd = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 10px;
  font-size: 13px;
`;
const Styledtd = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  font-size: 12px;
`;