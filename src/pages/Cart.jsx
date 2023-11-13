import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.js";
import ReactStars from "react-rating-stars-component";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  
  const [quantities, setQuantities] = useState(
    cart.reduce((quantitiesObj, item) => {
      quantitiesObj[item.id] = 1; 
      return quantitiesObj;
    }, {})
  );

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * quantities[item.id], 0);
  };

  return (
    <>
    <section className="cart-wrapper py-4 cart-bg d-flex justify-content-center">
        <div className="mx-2 bg-white w-100">
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
                  <div className="d-flex align-items-center gap-3">
                  <input
                    type="number"
                    className="form-control cart-quantity-select"
                    name=""
                    min={1}
                    max={10}
                    id={`cart-quantity-${item.id}`}
                    value={quantities[item.id]}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                  /> <h5 className="cart-price mb-0">${item.price * quantities[item.id]}.00</h5>
                 </div>
                </div>
              </div>
           <div>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm remove-btn-container"
                  onClick={() => handleRemoveFromCart(item.id)}
                  >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end align-items-baseline cart-total">
            <div className="d-flex flex-column align-items-end">
              <h4 className="me-2">Total: ${calculateTotal()}</h4>
              <p className="mb-0 taxes-shipping">Taxes and shipping calculated at checkout</p>
              <Link to="/checkout" className="button text-light btn btn-dark m-3">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
