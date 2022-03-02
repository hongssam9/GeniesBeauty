import React from "react";
import poster1 from "./images/poster1.png";
import "./Home.css";
import { Carousel } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      {/* <div
        id = "home-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/1478/6606/products/saga_2_grande.jpg?v=1517853168"
              class="carousel-img"
              alt="homepage"
            />
          </div>
          <div class="carousel-item ">
            <img src={saga1} class="carousel-img" id = "saga1" alt="homepage" />
          </div>
        </div>
      </div> */}
 <img
              src="https://cdn.shopify.com/s/files/1/1478/6606/products/saga_2_grande.jpg?v=1517853168"
              class="carousel-img"
              alt="homepage"
            />

    </div>
  );
};

export default Home;
