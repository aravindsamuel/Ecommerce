import React from "react";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import {Link, useParams } from "react-router-dom";
import { Productsdata } from "../dataSource";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishListContext";
import { useCompareProduct } from "../CompareProductContext";

const SingleProduct = () => {
 let {id} = useParams();

 const { addToCart } = useCart();

 const { addToWishlist } = useWishlist();

 const { addToCompare } = useCompareProduct();

 const product = Productsdata.find((item) => item.id === id)

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const handleAddToCompare = () => {
    addToCompare(product);
  };



  return (
    <>
      <div className="main-product-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <div className="d-flex justify-content-between flex-wrap bg-white rounded p-3">
              <div className="main-products-img">
                <img src={product.img} className="img-fluid main-product-img w-100" alt="Watch" />
              </div>
              <div className="main-products-details bg-white">
                <div>
                  <h3 className="title">{product.title}</h3>                 
                </div>
                <div className="py-2">
                  <div className="d-flex align-items-center gap-2 mb-1">
                  <h4 className="price mt-2">$ {product.price}.00</h4>
                  <p className="mb-0 product-strike">$ {product.strike_price}.00</p>
                  </div>
                  <p className="mb-1 product-heading">OFFER: <b>{product.offer}</b>%</p>
                  <div className="d-flex align-items-center gap-1">
                    <ReactStars
                      count={5}
                      size={17}
                      value={product.rating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">{product.rating}</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">Brand :</h3>{" "}
                    <p className="product data m-0">{product.brand}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">{product.display || product.processor || product.bluetooth}</h3>
                    <p className="product data m-0">{product.display_type || product.processor_name || product.bt_v}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">{product.ram || product.occasion || product.wm}</h3>
                    <p className="product data m-0">{product.ram_type || product.occasion_type || product.wm_ans}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">{product.screen || product.dail || product.Battery}</h3>
                    <p className="product data m-0">{product.screen_size || product.dail_color || product.bt_life}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">{product.os || product.play}</h3>
                    <p className="product data m-0">{product.os_type || product.play_value}</p>
                  </div>                 
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">{product.range || product.warranty}</h3>
                    <p className="product data m-0">{product.range_value || product.warranty_years}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1 my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product data m-0">{product.category}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1 my-2">
                    <h3 className="product-heading">Availablity :</h3>
                    <p className="product data m-0">In Stock</p>
                  </div>                  
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading mb-2">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex flex-column gap-15 flex-row mb-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="button btn btn-outline-light add-to-cart"
                        type="submit"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                      <Link to='/cart' className="button buy-now" type="submit" onClick={handleAddToCart}>
                        Buy Now
                      </Link>
                    </div>
                  </div>
                  <div className="my-3">
                    <h3 className="product-heading mb-1">
                      Shipping & Returns :
                    </h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      We ship all domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="my-3">
                    <h3 className="product-heading mb-1">Description :</h3>
                    <p className="product-data">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique aperiam et dolorem a vel dolorum ipsum corrupti
                      modi odit tenetur aut, placeat, minus doloremque in, neque
                      commodi deserunt porro veritatis!
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="add-to-compare">
                      <button className="text-light w-100 comparebtn" onClick={handleAddToCompare} >
                        <TbGitCompare className="fs-5 me-2" />
                        Compare
                      </button>
                    </div>
                    <div className="add-to-wishlist">
                      <button className="text-light w-100 wishbtn" onClick={handleAddToWishlist}>
                        <AiOutlineHeart className="fs-5 me-2" />
                        Wishlist
                      </button>
                    </div>
                  </div>
                  <div className="my-3">
                    <h3 className="product-heading mb-1">
                      <b>Reviews</b>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="product-heading">Customer Reviews</h5>
                      <div className="d-flex align-items-center gap-2 me-3">
                        <ReactStars
                          count={5}
                          size={17}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="product-data">Based on 2 Reviews</p>
                      </div>
                    </div>

                    <div className="reviews">
                      <div className="review">
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                          <div>
                            <h6>Aravind</h6>
                          </div>
                          <div>
                            <ReactStars
                              count={5}
                              size={17}
                              value={4}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="product-data">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Amet eum distinctio fugit, doloribus
                              doloremque hic, error impedit unde atque eveniet
                              ut veritatis quisquam. Alias consequatur odit
                              fugiat beatae minus voluptatem?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                          <div>
                            <h6>Samuel aravind</h6>
                          </div>
                          <div>
                            <ReactStars
                              count={5}
                              size={17}
                              value={4}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="product-data">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Amet eum distinctio fugit, doloribus
                              doloremque hic, error impedit unde atque eveniet
                              ut veritatis quisquam. Alias consequatur odit
                              fugiat beatae minus voluptatem?
                            </p>
                          </div>
                        </div>
                      </div>
                      <form action="" className="d-flex flex-column my-3 px-3">
                        <div>
                          <ReactStars
                            count={5}
                            size={20}
                            value={0}
                            edit={true}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div>
                          <textarea
                            name=""
                            id=""
                            className="w-100 form-control"
                            cols="30"
                            rows="4"
                            placeholder="Comments"
                          ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="button submit-review">
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
