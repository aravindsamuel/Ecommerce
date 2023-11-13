import React from "react";
import { useCompareProduct } from "../CompareProductContext";
import {AiOutlineCloseCircle} from "react-icons/ai";
import ReactStars from "react-rating-stars-component";


const CompareProduct = () => {

  const {compareProducts , removeFromCompare} = useCompareProduct();

  const handleRemoveFromCompare = (productId) => {
    removeFromCompare(productId)
  }

  return (
    <>
      <section className="types-products-wrapper">
        <div className="container-xxl">
          <div className="types-flex py-2">
            {compareProducts.map((item) => (
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
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <h3 className="product-heading">Brand :</h3>{" "}
                    <p className="product data compare-product-data m-0">{item.brand}</p>
                  </div>
                  <div className="d-flex gap-1 mb-2">
                    <h3 className="product-heading">{item.display || item.processor || item.bluetooth}</h3>
                    <p className="product data compare-product-data m-0">{item.display_type || item.processor_name || item.bt_v}</p>
                  </div>
                  <div className="d-flex gap-1 mb-2">
                    <h3 className="product-heading">{item.ram || item.occasion || item.wm}</h3>
                    <p className="product data compare-product-data m-0">{item.ram_type || item.occasion_type || item.wm_ans}</p>
                  </div>
                  <div className="d-flex gap-1 mb-2">
                    <h3 className="product-heading">{item.screen || item.dail || item.Battery}</h3>
                    <p className="product data compare-product-data m-0">{item.screen_size || item.dail_color || item.bt_life}</p>
                  </div>
                  <div className="d-flex gap-1 mb-2">
                    <h3 className="product-heading">{item.os || item.play}</h3>
                    <p className="product data compare-product-data m-0">{item.os_type || item.play_value}</p>
                  </div>                 
                  <div className="d-flex gap-1 mb-2">
                    <h3 className="product-heading">{item.range || item.warranty}</h3>
                    <p className="product data compare-product-data m-0">{item.range_value || item.warranty_years}</p>
                  </div>
                  <div className="d-flex gap-1 my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product data compare-product-data m-0">{item.category}</p>
                  </div>
                  <div className="d-flex gap-1 my-2">
                    <h3 className="product-heading">Availablity :</h3>
                    <p className="product data m-0">In Stock</p>
                  </div>                 
                </div>
                <div className="productcard-wish-icon position-absolute">
                  <AiOutlineCloseCircle onClick={() => handleRemoveFromCompare(item.id)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareProduct;
