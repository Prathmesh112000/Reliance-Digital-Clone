import React from "react";
import "./Navbar.css"
const Navbar = () => {
  // jfjsfdhjhbjbjhbknknkjwnfwejn
  return (
    <div>
      <div className="navbar">
        <div className="logo-div">
          <div to='/'>
          <img
            className="imglogo"
            src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
            alt=""
          /></div>
        </div>
        <div className="searchdiv">
          <input
            type="search"
            name=""
            id="searchinput"
            placeholder="Find Your favorite products"
          />
        </div>
        <div className="quries">
          <div className="contact">
            <h5><i className="fa-solid fa-location-dot"></i> Find a store | Buying guides | Contact us</h5>
          </div>
          <div className="location">
          <i class="fa-solid fa-location-dot"></i> Deliver to Mumbai 000000  |  
          <i class="fa-solid fa-cart-shopping"></i>Cart
          <i class="fa-solid fa-user"></i>Login
          </div>
        </div>
      </div>
      <div className="drop-down">
        <nav className="nav-bar">
          <ul>
            <li>
              Mobile & Tablets
              <div id="img" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Smartphones</h3>
                    <p><div className="linknavbar" to='/moto'>Moto E32s</div></p>
                  </div>
                  <div className="left-mega-position">
                    <h3>Smart Wearables</h3>
                    <p>Apple Watch 5% Off</p>
                    <p>Bluetooth Calling Watches</p>
                    <p>Smart Watch Accessories</p>
                  </div>
                  <div className="left-mega-position">
                    <h3>Accessories</h3>
                    <p>Tablet Accessories</p>
                    <p>Mobile Accessories</p>
                    <p>Mobile Grips & Stands</p>
                    <p>Car Mobile Holders</p>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Headphones & Headers</h3>
                    <p>True Wireless</p>
                    <p>Bluetooth Neckbands</p>
                    <p>Wired Earphones</p>
                  </div>
                  <div className="left-mega-position">
                    <h3>Tablets & eReaders</h3>
                    <p>Every Day use Tablets below 15000</p>
                    <p>Premium Tablets, Above 15001</p>
                  </div>
                  <div className="left-mega-position">
                    <h3>Power Banks</h3>
                    <p>10K Mah Starting @549</p>
                  </div>
                  <div className="left-mega-position">
                    <h3>eSlates</h3>
                    <h3>AI Learning Robots</h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              TELEVISION
              <div id="img2" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Televisions</h3>
                    <p>Smart TVs</p>
                    <p><div className="linknavbar" to='inchtv'>32 Inch TVs</div></p>
                    <p>43 Inch TVs</p>
                    <p>55 Inch TVs</p>
                    <p>Andriod TVs</p>
                    <p>4K Ultra HD TVs</p>
                    <p>Full HD TVs</p>
                    <p>HD Ready TVs</p>
                    <p>OLED TVs</p>
                    <p>Large Screen TVs</p>
                    <h3>Streaming Devices</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Bluetooth & WiFi Speakers</h3>
                    <h3>Smart Speakers</h3>
                    <h3>TV Speakers & Soundbars</h3>
                    <h3>Party Speakers</h3>
                    <h3>Home Theatre Systems</h3>
                    <h3>Specialty Speakers</h3>
                    <h3>Audio, Speaker Stands</h3>
                    <h3>Gaming</h3>
                    <p>Gaming Consoles</p>
                    <p>Gaming Accessories</p>
                    <p>Gaming Titles</p>
                    <h3>Projectors</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Reconnect Disney | Marvel Audio Collection</h3>
                    <h3>TV & Audio Accessories</h3>
                    <p>Virtual Reality Headsets</p>
                    <p>Stabilizers & Surge Protectors</p>
                    <p>Power Strips & Extension Cords</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              home appliances
              <div id="img3" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Air Conditioners</h3>
                    <p>Split Air Conditioners</p>
                    <p>Window Air Conditioners</p>
                    <p>Smart Air Conditioners</p>
                    <p>Energy Efficient Air Conditioners</p>
                    <p>1 ton Air Conditioners</p>
                    <p>1.5 ton Air Conditioners</p>
                    <p>5 star Air Conditioners</p>
                    <h3>Air Coolers</h3>
                    <h3>Air Purifiers</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Washing Machines</h3>
                    <p>Fully Automatic Front Load</p>
                    <p>Fully Automatic Top Load</p>
                    <p>Semi-Automatic Top Load</p>
                    <p>Washing Machine Detergents & Liquids</p>
                    <h3>Refrigerators</h3>
                    <p>Single Door</p>
                    <p>Double Door</p>
                    <p>Side by Side Refrigerators</p>
                    <p>Convertible</p>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Vacuum Cleaners</h3>
                    <p><div className="linknavbar" to='/robotic'>Robotic Vacuum Cleaners</div></p>
                    <h3>Diswashers</h3>
                    <h3>Fans</h3>
                    <h3>Cloth Dryers</h3>
                    <h3>Geysers</h3>
                    <h3>Room Heaters</h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              computers
              <div id="img4" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Laptops</h3>
                    <p>Basic usee laptops</p>
                    <p>Student Laptops</p>
                    <p>Thin and light Laptops</p>
                    <p>Multi-Tasking Laptops</p>
                    <p>Gaming Laptops</p>
                    <p>Content Creator Laptops</p>
                    <h3>Desktops & All-in-Ones</h3>
                    <h3>Computer Monitors</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>luetooth & WiFi Speakers</h3>
                    <h3>Internet Connectivity Devices</h3>
                    <p>Wireless Hotspot</p>
                    <p>Routes</p>
                    <p>WiFi Range Extenders</p>
                    <h3>Printers</h3>
                    <h3>Toners & Ink Cartridges</h3>
                    <h3>Data Storage Devices</h3>
                    <p>Pen Drives & OTG Drives</p>
                    <p>Hard Drives & SSD</p>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Computer Accessories</h3>
                    <p>Upto 72% Off, Only on Reliancedigital.in</p>
                    <p>Computer Networking Cables</p>
                    <p>Laptop Chargers & Adaptor</p>
                    <p>Hubs & Docks</p>
                    <p>Laptop Bags & Sleeves</p>
                    <p>Laptop Cooling Pad</p>
                    <p>Laptop Screen Protectors</p>
                    <p>Laptop Tables & Stands</p>
                    <h3>Input Devices</h3>
                    <p>Keyboards</p>
                    <p>Computer Mouse</p>
                    <p>Mousepads</p>
                    <p>Stylus Pens</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              camers
              <div id="img5" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>DSLR Camers</h3>
                    <h3>Mirrorless Cameras</h3>
                    <h3>Point & Shoot Cameras</h3>
                    <h3>ProSumer Cameras</h3>
                    <h3>Action Cameras</h3>
                    <h3>Photo Storage Devices</h3>
                    <p>Memory Cards</p>
                    <p>Pn Drives</p>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Binoculars</h3>
                    <h3>Camera Lens</h3>
                    <h3>Digital Camera Accessories</h3>
                    <p>Camera Batteries & Chargers</p>
                    <p>Camera bags & cases</p>
                    <p>Tripods & Monopods</p>
                    <p>Action Camera Accessories</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              kitchen appliances
              <div id="img6" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Microwave Ovens</h3>
                    <h3>Water Purifiers</h3>
                    <h3>Fruits and Vegetable Cleaner</h3>
                    <h3>Oven Toaster Grillers (OTG)</h3>
                    <h3>Cookwares</h3>
                    <h3>Juicer Mixer Grinders</h3>
                    <p>Juicers</p>
                    <p>Hand Mixers</p>
                    <p>Mixer Grinders</p>
                    <p>Choppers & Slicers</p>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Induction Cookers</h3>
                    <h3>Food Processors</h3>
                    <h3>Blenders</h3>
                    <h3>Kitchen Hobs & Gas Stoves</h3>
                    <h3>Kitchen Chimneys</h3>
                    <h3>Rice Cookers</h3>
                    <h3>Sandwich Makers</h3>
                    <h3>Popup Toasters</h3>
                    <h3>Coffee Makers & Grinders</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Reconnect Disney|Marvel Kitchen Collection</h3>
                    <h3>Air Fryers</h3>
                    <h3>Specialty Appliances</h3>
                    <h3>Electric Kettles</h3>
                    <h3>Water Dispensers</h3>
                    <h3>Wet Grinders</h3>
                    <h3>Egg Boilers</h3>
                    <h3>Flour Mills</h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              personal care
              <div id="img7" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Shavers & Trimmers</h3>
                    <h3>Epilators</h3>
                    <h3>Hair Dryers & Stylers</h3>
                    <h3>Weighing Scales</h3>
                    <h3>Irons</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Reconnect Disney|Marvel Grooming Collection</h3>
                    <h3>Hygiene & Personal Care</h3>
                    <p>Digital Thermometers</p>
                    <p>Massagers</p>
                    <p>Misc. Care Devices</p>
                    <h3>Garment Streamers</h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              accessories
              <div id="img8" className="mega-menu">
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Bags, Cases & Sleeves</h3>
                    <h3>Smart Devices</h3>
                    <p>Smart Plugs</p>
                    <p>Smart Cameras</p>
                    <p>Smart Sensors</p>
                    <p>Smart Lights</p>
                    <p>Smart Speakers</p>
                    <h3>Betteries & PowerBanks</h3>
                    <h3>Cables & Cords</h3>
                    <h3>Chargers & Adapters</h3>
                    <h3>Bluetooth & wiFi Speakers</h3>
                    <h3>Audio/Video Accessories</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>Reconnect Disney | Marvel Accessories</h3>
                    <h3>Memory Cards</h3>
                    <h3>Mounts & Stands</h3>
                    <h3>Pen Drives</h3>
                    <h3>Routers</h3>
                    <h3>Screen Guards & Protectors</h3>
                    <h3>Power Strips & Extension Cords</h3>
                    <h3>Stablizers</h3>
                    <h3>Surge Protectors</h3>
                    <h3>UPS</h3>
                    <h3>Webcams</h3>
                  </div>
                </div>
                <div className="inner-mega-menu">
                  <div className="left-mega-position">
                    <h3>External Hard Disks</h3>
                    <h3>Headphones & Headsets</h3>
                    <h3>Cleaners & Protectors</h3>
                    <h3>Computer Mouse</h3>
                    <h3>Keyboards</h3>
                    <h3>Indoor Lighting</h3>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
