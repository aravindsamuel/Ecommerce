import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useCart } from "../CartContext.js";
import ReactStars from "react-rating-stars-component";


const Checkout = () => {
  const { cart } = useCart();
 
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <div className="checkout-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-5 mb-2">
            <div className="border-bottom p-4 bg-white rounded-top">
            {cart.map((item) => (
            <div key={item.id} className="card-data py-3 mb-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 cart-container">
                <div>
                  <img className="img-fluid cart-product-img" src={item.img} alt={item.title} />
                </div>
                <div className="">
                  <p className="mb-1">{item.title}</p>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <ReactStars
                      count={5}
                      size={17}
                      value={item.rating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">{item.rating}</p>
                  </div>
                  <h5 className="price">$ {item.price}.00</h5>
                </div>
              </div>            
            </div>
          ))}
                <div className="p-4 bg-white rounded-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1">Products</p>
                  <p className="mb-1">{cart.length}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1">Subtotal</p>
                  <p className="mb-1">$ {calculateTotal()}.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-2">Shipping</p>
                  <p className="mb-2">Free Delivery</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">$ {calculateTotal()}.00</h5>
                </div>
              </div>
                
              </div>
              
              
            </div>
            <div className="col-12 col-md-7">
            <div className="checkout-left-data bg-white rounded p-3">               
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-3 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="First Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="Last Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      placeholder="Address"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      placeholder="Apartment, Suite, etc"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="City"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select state
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      placeholder="Zipcode"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex gap-3 justify-content-around align-items-center">
                      <Link to="/cart" className="button btn btn-dark text-white">
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/" className="button btn btn-dark text-white">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Checkout;

