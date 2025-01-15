import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "./common/MainLayout";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Rating } from "react-simple-star-rating";

import ProductImgOne from "../assets/images/mens/eleven.jpg";
import ProductImgTwo from "../assets/images/mens/twelve.jpg";
import ProductImgThree from "../assets/images/mens/three.jpg";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(4.0);

  return (
    <MainLayout>
      <div className="container product-detail">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-5">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Red Cherry T-Shirt
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-3">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  direction={`vertical`}
                  spaceBetween={10}
                  slidesPerView={6}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper mt-2"
                >
                  <SwiperSlide>
                    <div className="content">
                      <img
                        src={ProductImgOne}
                        alt=""
                        height={100}
                        className="w-100"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img
                        src={ProductImgTwo}
                        alt=""
                        height={100}
                        className="w-100"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img
                        src={ProductImgThree}
                        alt=""
                        height={100}
                        className="w-100"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-9">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  loop={true}
                  spaceBetween={0}
                  navigation={true}
                  thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div className="content">
                      <img src={ProductImgOne} alt="" className="w-100" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img src={ProductImgTwo} alt="" className="w-100" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img src={ProductImgThree} alt="" className="w-100" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h3>Red Cherry T-Shirt</h3>
            <div className="d-flex">
              <Rating size={20} initialValue={rating} readonly />
              <span className="ps-2 pt-1">30 Reviews</span>
            </div>
            <div className="price py-3 h4">
              NPR, 1200
              <span className="text-decoration-line-through ms-3">
                NPR, 1800
              </span>
            </div>
            <div className="h5">
              100% Original Product <br />
              Cash on delivery available <br />
              15 days cash back return policy is available
            </div>

            <div className="sizes py-3">
              <h3 className="mt-2">Select Sizes</h3>
              <button className="btn btn-size ms-2">S</button>
              <button className="btn btn-size ms-2">M</button>
              <button className="btn btn-size ms-2">L</button>
              <button className="btn btn-size ms-2">XL</button>
            </div>

            <div className="add-to-cart my-2">
              <button className="btn btn-secondary text-uppercase">
                Add To Cart
              </button>
            </div>
            <hr />
            <div>
              <strong>SKU: </strong>ROBIN9876521
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="Description">
                Tab content for Description
              </Tab>
              <Tab eventKey="review" title="Reviews (10)">
                Tab content for Reviews (10)
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
