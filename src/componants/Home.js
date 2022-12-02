import React from "react";
import "./css/Home.css";
// import "./image/1.jpeg"
// import "./image/2.jpeg"
// import "./image/3.jpeg"
// import "./image/4.jpeg"
// import "./image/lotd.jpeg"

export default function Home() {
  return (
    <>
      <div className="box1">
        <div className="img-title">
          <h3>Get ready to fly</h3>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <h2 className="text-center a">
            WELCOME TO <b style={{ color: "#fbaa1a" }}>FIRST FIDDLE</b>
          </h2>
          <br/>

          <div className="row">
            <div className="col-md-7">
              <p className="bannercontent">
                First Fiddle Restaurants, one of India’s most prominent F&B
                companies in the casual dining sector, is headed by Priyank
                Sukhija. From Lazeez Affair, the first brand conceived in 1999
                to Lord of The Drinks, Dragonfly Experience, Diablo and Plum By
                Bent Chair, our latest ventures, we have brought a wave of
                innovation in the hospitality industry throughout. Being one of
                the India’s largest restaurant chain with over 30+ restaurants,
                now we are open to franchising routes for expansion and soon
                hitting the international grounds too.
              </p>

              <a href="/" className="btn btn-outline-warning mtop">
                FIND OUT MORE
              </a>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="https://www.firstfiddle.in/assets/images/ffbanner.png"
                width="75%"
                className="img1" alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <br/>

      <div className="container-fluid bimg">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <h1 className="mt-12">MEDIA MENTIONS</h1>
              <p className="mt-12-p">
                From Indian food to International food and scrumptious fusion
                eateries, we bring to you the best of both worlds with magical
                events happening every other night! We're here with the perfect
                concept resto-bars, which will lift your mundane lives. Have a
                glance right away!
              </p>
              <a href="/" className="btn btn-warning">
                KNOW MORE
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <br/>

      <div className="container-fluid">
        <div className="container">
          <h2 className="EXPLORE">
            EXPLORE <b className="our">OUR BRANDS</b>
          </h2>
          <br/>

          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card" style={{ borderStyle: "none" }}>
                <center>
                  <img src="https://www.firstfiddle.in/assets/images/explore_brand/bougie.jpg" alt="#" className="mx-1 mbottom"/>
                </center>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              <div className="card" style={{ borderStyle: "none" }}>
                <center>
                  <img src="https://www.firstfiddle.in/assets/images/explore_brand/lord-of--the--drinks.jpg" alt="#" className="mx-1 mbottom" />
                </center>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              <div className="card" style={{ borderStyle: "none" }}>
                <center>
                  <img src="https://www.firstfiddle.in/assets/images/explore_brand/bougie.jpg" alt="#" className="mx-1 mbottom"/>
                </center>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              <div className="card" style={{ borderStyle: "none" }}>
                <center>
                  <img src="https://www.firstfiddle.in/assets/images/explore_brand/openhouse.jpg" alt="#" className="mx-1 mbottom"/>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>

      <div className="container-fluid backimg">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <br/>
              <h2 className="mt">VISIT OUR OUTLETS</h2>
              <p className="mt1">
                From Indian food to International food and scrumptious fusion
                eateries, we bring to you the best of both worlds with magical
                events happening every other night! We're here with the perfect
                concept resto-bars, which will lift your mundane lives. Have a
                glance right away!
              </p>
              <a href="/" className="btn btn-warning">
                KNOW MORE..
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
