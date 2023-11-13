import React from "react";
import ReactStars from "react-rating-stars-component";
import { useWishlist } from "../WishListContext";
import {AiOutlineCloseCircle} from "react-icons/ai"

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId)
  }

  return (
    <>
      <section className="types-products-wrapper">
        <div className="container-xxl">
          <div className="types-flex py-2">
            {wishlist.map((item) => (
                <div key={item.id} className="product-container position-relative">
                <div className="product-img-container">
                  <img
                    className="img-fluid product-img"
                    src={item.img}
                    alt="product"
                  />
                </div>
                <div className="productcard-details">
                  <h6 className="productbrand-name text-dark">{item.brand}</h6>
                  <h5 className="product-name text-dark">{item.title}</h5>
                  <div className="d-flex justify-content-left align-items-center">
                    <ReactStars
                      count={5}
                      value={item.rating}
                      size={17}
                      isHalf={true}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 text-dark ft-rating">{item.rating}</p>
                  </div>
                  <p className="product-price text-dark mb-2 ms-1">${item.price}.00</p>
                </div>
                <div className="productcard-wish-icon position-absolute">
                  <AiOutlineCloseCircle onClick={() => handleRemoveFromWishlist(item.id)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishList;
