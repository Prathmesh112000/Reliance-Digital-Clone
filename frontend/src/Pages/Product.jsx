import * as React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Slider from "@mui/material/Slider";
import { ProdCategory } from "./ProdCategory";
import styled from "styled-components";
import "../styles/Product.css";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

const Boxx = styled.div`
  border: 1px solid;
  width: 100%;
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://www.reliancedigital.in/medias/OnePlus-Series-9-CLP-Banner-24-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MjU2NHxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaGIxLzk4NTc2Mzc0MTY5OTAuanBnfDljM2E5YzM5ZjlhNWUxODEyOGVjM2FkYWQyYWJiNGJjMGI0ODZmYTA3MTUyNzA0MzAzMTIxYWU2Njg1NjkxOWI",
  },
  {
    imgPath:
      "https://www.reliancedigital.in/medias/OnePlus-Nord-2T-5G-CLP-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDEzNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGJiL2hjZC85ODY0NDYyMDczODg2LmpwZ3w5ODFhZGQ0MTgyNGY5YmE0ZjU1YWQ3N2I2YzE0OTFkYzg4NzExYmIxOTBiYjljMzJjNGMxZGJmYThlMGIyMzAx",
  },
  {
    imgPath:
      "https://www.reliancedigital.in/medias/OnePlus-Nord-CE2-Lite-5G-Carousel-Banner-29-04-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MzIyOXxpbWFnZS9qcGVnfGltYWdlcy9oMzAvaGUyLzk4NjQ0NjM3Nzc4MjIuanBnfDk3ODVlZDc5OTRlOGJmODNkZWZiMTlkMTk4ZDk5M2UzN2EzMzVhODk1ODM1Y2Y4ZjY5OTg4NWIxNmViZTQ1NzM",
  },
  {
    imgPath:
      "https://www.reliancedigital.in/medias/Samsung-Galaxy-M52-CLP-Banner-20-D.jpg?context=bWFzdGVyfGltYWdlc3w5ODg5M3xpbWFnZS9qcGVnfGltYWdlcy9oODkvaDgwLzk4NjQ0NjM5MDg4OTQuanBnfDEyNzRhMzNmNGE3OTM3MTQ4OWMyN2ZhZTc3ODdjYjlmZGZlZDU4NDRiNjUxNDE2ZGZjNDZmZTc4MTZmNWU5NDg",
  },
  {
    imgPath:
      "https://www.reliancedigital.in/medias/RD-POVA-CLP-Bannrer-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMzIwNzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2gyNy85ODU3NjQ4MjYzMTk4LmpwZ3w4YjQ5OTE1YmM5MWM0YjhmMjY3MDExYmVhZTFiYjU0YWIyNjlmMDU0YjRkYzI0ZmIxZTU2MjgwMjM0M2E4YmE2",
  },
  {
    imgPath:
      "https://www.reliancedigital.in/medias/Vivo-T1-Series-CLP-Banner-14-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDUxMDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGEwL2hiYy85ODU3NjM3OTQxMjc4LmpwZ3w0ZjVlMDY5ODA2N2ExZmVlYmFlYmJiNTljODU5MGM2ODkwNWQ5OTE0ZTlhOWQzZjNhNjZkOTNjNGFiYjA1YTlm",
  },

  {
    imgPath:
      "https://www.reliancedigital.in/medias/JioPhone-Next-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjU2ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRiL2g5Yi85ODU3NjM4MDcyMzUwLmpwZ3w3YzFkNGJhMmJjODUwNzlmZGM2ZmY5ZGU5ZjU4MzVlMThjNDFlZDg3MTBlYzQ0YTg2NWFlNmJiZmIyZTcxZmMz",
  },
  {
    imgPath:
      "https://www.reliancedigital.in/medias/iPhone-12-CLP-Banner-D-13.05.jpg?context=bWFzdGVyfGltYWdlc3w5MjE0MXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGM0Lzk4NjE5NzY3NTIxNTguanBnfDdiYmIxOTc2ZmY5NjUzZmRmNGFkNjg4YTExYjViNmU5ZTcyMTRjMjVmOTNiYTBiN2Y4OTljZWE3OTgwZjFlZTM",
  },
];

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export const Product = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [data, setData] = useState([]);
  const [value, setValue] = useState([3799, 179900]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/product`);
        let data = await res.json();
        console.log(data.data);
        setData(data);
      } catch (err) {
        console.log("err:", err);
      }
      // const payload = { category: "mobile" };
      // try {
      //   axios
      //     .post("https://quiet-citadel-13240.herokuapp.com/products")
      //     .then((res) => console.log(res));
      // } catch (err) {
      //   console.log("err:", err);
      // }
    };
    getData();
  }, []);

  return (
    <>
      <img
        style={{ width: "100%" }}
        src="https://www.reliancedigital.in/medias/iPhone-12-CLP-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTkwMXxpbWFnZS9qcGVnfGltYWdlcy9oMmIvaGQ0Lzk4NjQ0NjE5NDI4MTQuanBnfDU5MWNiNmMxOGNiZGM5NDM4MDliMzdjYTY1ODZkOWEyMDhlOTMwNjU1N2QzNWEyNWI3ODA5ZWZiYzAyNjQ1OTg"
        alt="img"
      />
      <Box sx={{ flexGrow: 1, marginTop: "-55px" }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        ></Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ marginTop: "-35px" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{ marginTop: "-250px" }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              sx={{ marginTop: "-250px" }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Box>
      <Boxx>
        <div style={{ width: "55%", paddingLeft: "8px" }}>
          <h2>FILTERS</h2>
          <hr />
          <div>
            <h3>Price</h3>
            <Box sx={{ width: 200, paddingLeft: 0.9 }}>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={3799}
                max={179900}
              />
            </Box>
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
          <div
          // style={{ border: '1px solid' }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid",
                borderBottom: "none",
              }}
            >
              <h2 style={{ paddingLeft: "11px" }}>SMARTPHONES</h2>
              <div
                style={{ display: "flex", border: "1px", paddingRight: "10px" }}
              >
                <p>Sort by :</p>
                <select name="" id="" style={{ border: "none" }}>
                  <option value="Relevance">Relevance</option>
                  <option value="Relevance">Name(A-Z)</option>
                  <option value="Relevance">Name(Z-A)</option>
                  <option value="Relevance">Price(Low-High)</option>
                  <option value="Relevance">Price(High-Low)</option>
                </select>
              </div>
            </div>

            <StyledProdList>
              {data.map((item) => {
                return <ProdCategory key={item.id} item={item} />;
              })}
            </StyledProdList>
          </div>
          <div style={{ display: "flex" }}>
            <Stack spacing={2}>
              <Pagination count={50} />;
            </Stack>
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid",
              paddingLeft: "10px",
            }}
          >
            <div style={{ width: "73%" }}>
              <h5>Buy All Smartphones Online in India</h5>
              <p style={{ textAlign: "justify" }}>
                Mobile phones have transformed from being a device to make calls
                or send texts, to an entertainment and information gadget.
                Today, it’s practically impossible to spend a moment without our
                smartphones by our side- whether it’s just for sending an email,
                storing important files, doing a video call with our loved ones,
                or streaming the latest web series while commuting. Mobile
                phones come with a wide range of features these days- like
                fascinating photo filters, AI-powered cameras, blazing fast
                processing speeds, etc. At Reliance Digital, you can compare and
                find your choice of mobile phone online at the best prices.
              </p>
              <h5>Choosing A Smartphone As Per Operating System</h5>
              <p>
                With hundreds of options available, the online mobile shopping
                experience can be quite overwhelming if you don’t know what you
                want. Begin with choosing the type of operating system you’d be
                comfortable using. There are only two smartphone operating
                systems worth considering: Android and iOS.
              </p>
              <p>
                Here’s a comparison between Android phones and iOS phones that
                can help you choose better:
              </p>
              <table style={{ borderCollapse: "collapse", width: "66%" }}>
                <thead>
                  <tr>
                    <StyledTh>Features</StyledTh>
                    <StyledTh>Android</StyledTh>
                    <StyledTh>iOS</StyledTh>
                  </tr>
                </thead>
                <tbody>
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
                      Apple Maps, default as of iOS 6 (Google Maps also
                      available via a separate app download)
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
                      iPod Touch, iPhone, iPad, Apple TV (2nd and 3rd
                      generation)
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTh>Calls and Messaging</StyledTh>
                    <StyledTd>
                      Google Messages. 3rd party apps like Facebook Messenger,
                      WhatsApp, Google Duo, Discord, and Skype all work on
                      Android and iOS.
                    </StyledTd>
                    <StyledTd>
                      iMessage, FaceTime (with other Apple devices only), and
                      the rest of the apps as in Android.
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTh>App Store</StyledTh>
                    <StyledTd>
                      Google Play Store – 2,000,000+ apps. Other app stores like
                      Amazon and Aptoide also distribute Android apps.
                    </StyledTd>
                    <StyledTd>
                      Apple App Store – 1,000,000+ apps. Apps containing viruses
                      are very rare or nonexistent.
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTh>Photos & Videos Backup</StyledTh>
                    <StyledTd>
                      Apps are available for an automatic backup of photos and
                      videos. Google Photos allows unlimited backup of photos at
                      a compressed quality.
                    </StyledTd>
                    <StyledTd>
                      Up to 5 GB of photos and videos can be automatically
                      backed up with iCloud, with more paid iCloud storage
                      available via subscription.
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTh>Security</StyledTh>
                    <StyledTd>Monthly security updates</StyledTd>
                    <StyledTd>
                      Occasional security updates. Security threats are rare.
                    </StyledTd>
                  </tr>
                </tbody>
              </table>
              <h5>Buy Mobile Phones As Per Price Band</h5>
              <h5>Features of mobile phones below 5000</h5>
            </div>
            <div
              style={{
                paddingRight: "10px",
                paddingLeft: "10px",
                width: "32%",
              }}
            >
              <p>Smartphones Price List</p>
              <table style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <Styledth>S.no</Styledth>
                    <Styledth>Products - Smartphones</Styledth>
                    <Styledth>Price</Styledth>
                  </tr>
                </thead>
                <tbody>
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
                        OnePlus 9 Pro 128 GB, 8 GB RAM, Morning Mist, Mobile
                        Ph...
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
                        Motorola E32s 32 GB, 3 GB RAM, Misty Silver, Mobile
                        Pho...
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
                        Samsung Galaxy M52 128 GB, 6 GB RAM Icy Blue, Mobile
                        Ph...
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
                        OnePlus 9 Pro 256 GB, 12 GB RAM, Pine Green, Mobile
                        Pho...
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
                        Redmi 9A Sport 32 GB 3 GB RAM, Coral Green, Mobile
                        Phon...
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
                        Motorola G82 5G 128GB, 8GB RAM, Meteorite Gray, Mobile
                        ...
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
                </tbody>
                {/* <tr>
                  <Styledtd>
                    Smartphones Price List updated on 21-07-2022
                  </Styledtd>
                </tr> */}
              </table>
            </div>
          </div>
        </div>
      </Boxx>
    </>
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
