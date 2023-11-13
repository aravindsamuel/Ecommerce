import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import FamousCard from "../components/FamousCard";
import { Famous } from "../dataSource";
import { Blogs } from "../dataSource";
import { Featured } from "../dataSource";
import { SpecialProducts } from "../dataSource";

function Home() {
  return (
    <>
      <section className="home-wrapper-1">
        <div className="flexcont-1">      
          <Link to='/earbud' className="main-banner position-relative">
            <img
              className="img-fluid rounded-3"
              src="images/main-banner-1.jpg"
              alt="main banner"
            />
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5 className="text-dark">Earbuds</h5>
              <p className="text-dark">From $19 or 5/mo</p>
              <Link to='/earbud' className="buybtn">Buy Now</Link>
            </div>
          </Link>
        </div>
        <div className="flexcont-2">
          <div className="small-banner-container">
            <Link to='/laptop' className="small-banner position-relative">
              <img
                className="img-fluid rounded-3"
                src="images/catbanner-01.jpg"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>BEST SALE</h4>
                <h5 className="text-dark">Laptops</h5>
                <p className="text-dark">From 200 or 50/mo</p>
              </div>
            </Link>
            <Link to='/watch' className="small-banner position-relative">
              <img
                className="img-fluid rounded-3"
                src="images/catbanner-02.jpg"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5 className="text-dark">Watches</h5>
                <p className="text-dark">From 99 or 20/mo</p>
              </div>
            </Link>
            <Link to='/tablet' className="small-banner position-relative">
              <img
                className="img-fluid rounded-3"
                src="images/catbanner-03.jpg"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>15% OFF</h4>
                <h5 className="text-dark">Tablets</h5>
                <p className="text-dark">From 200 or 30/mo</p>
              </div>
            </Link>
            <Link to='/headphone' className="small-banner position-relative">
              <img
                className="img-fluid rounded-3"
                src="images/catbanner-04.jpg"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>OFFER ZONE</h4>
                <h5 className="text-dark">Headphones</h5>
                <p className="text-dark">From 99 or 20/mo</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2">
        <div className="service-container">
          <div className="service-box">
            <img
              className="serviceicons"
              src="images/service.png"
              alt="services"
            />
            <div className="service-item">
              <h6>Free Shipping</h6>
              <p className="mb-0">From all orders over 5$</p>
            </div>
          </div>
          <div className="service-box">
            <img
              className="serviceicons"
              src="images/service-02.png"
              alt="services"
            />
            <div className="service-item">
              <h6>Daily Offers</h6>
              <p className="mb-0">Save upto 25% off</p>
            </div>
          </div>
          <div className="service-box">
            <img
              className="serviceicons"
              src="images/service-03.png"
              alt="services"
            />
            <div className="service-item">
              <h6>Support 24/7</h6>
              <p className="mb-0">Shop with an expert</p>
            </div>
          </div>
          <div className="service-box">
            <img
              className="serviceicons"
              src="images/service-04.png"
              alt="services"
            />
            <div className="service-item">
              <h6>Affordable Prices</h6>
              <p className="mb-0">Get Factory default Price</p>
            </div>
          </div>
          <div className="service-box">
            <img
              className="serviceicons"
              src="images/service-05.png"
              alt="services"
            />
            <div className="service-item">
              <h6>Secure Payments</h6>
              <p className="mb-0">100% Protected Payment</p>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products-wrapper">
        <div className="container-xxl">
          <h5 className="featured-products">Featured Products</h5>
          <div className="product-flex py-2">
            {Featured.map(p => (<ProductCard key={p.id} brand={p.brand} rating={p.rating} price={p.price} img={p.img} title={p.title} />))}
          </div>
        </div>
      </section>
      <section className="famous-products-wrapper">
        <div className="container-xxl d-flex flex-wrap justify-content-around py-2 ">
          {Famous.map(famous => (<FamousCard key={famous.id} famimg={famous.img} famtitle={famous.title} famsub={famous.subtitle} famlink={famous.link} />))}
        </div>
      </section>
      <section className="special-products-wrapper">
        <div className="container-xxl pt-4">
          <h5 className="special-products">Special Products</h5>
          <div className="sp-products-flex">
            {SpecialProducts.map(sp => (<SpecialProduct key={sp.id} sPimg={sp.img} sPbrand={sp.brand} sPtitle={sp.title} sPrating={sp.rating} sPprice={sp.price} sPstrikePrice={sp.strike_price} sPoffer={sp.offer} sPproducts={sp.products} sPProgress={sp.progressbar} />) )}
          </div>
        </div>
      </section>
      <section className="marque-wrapper">
        <div className="container-xxl py-3 marquee-container">
          <Marquee className="marquee">
            <div>
              <img className="marimg" src="images/brand-01.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-02.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-03.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-04.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-05.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-06.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-07.png" alt="brand" />
            </div>
            <div>
              <img className="marimg" src="images/brand-08.png" alt="brand" />
            </div>
          </Marquee>
        </div>
      </section>
      <section className="blogcard-wrapper">
        <div className="container-xxl">
          <h5 className="Blogs">Blogs</h5>
          <div className="blog-container">
            {Blogs.map(blog => (<BlogCard key={blog.id} blog={blog} blogDate={blog.date} blogTitle={blog.title} blogdesc={blog.shortdesc} blogimg={blog.img}/>))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
