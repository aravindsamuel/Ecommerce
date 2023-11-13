import React from "react";
import ReactStars from "react-rating-stars-component";

function SpecialProduct({
  sPimg,
  sPbrand,
  sPtitle,
  sPrating,
  sPprice,
  sPstrikePrice,
  sPoffer,
  sPproducts,
  sPProgress
}) {
  return (
    <>
      <div className="special-product-container">
        <div className="special-product-content d-flex">
          <img
            className="sp-main-img img-fluid"
            src={sPimg}
            alt="special-product-img"
          />

          <div className="special-product-details">
            <p className="special-product-brand">{sPbrand}</p>
            <h5 className="special-product-name">{sPtitle}</h5>
            <div className="d-flex align-items-center">
              <ReactStars
                count={5}
                value={sPrating}
                size={15}
                isHalf={true}
                activeColor="#ffd700"
              />
              <span className="sp-rating">{sPrating}</span>
            </div>
            <p className="sp-price">
              <span className="special-product-price">${sPprice}.00</span>{" "}
              &nbsp;<strike className="dis-strike">${sPstrikePrice}.00</strike>
            </p>
            <div className="Specialproducts-remaining-time d-flex align-items-center">
              <span className="sp-remaining-days">{sPoffer}</span>
              <span className="sp-day">OFFER</span>
            </div>
            <p className="sp-products-count">Products: {sPproducts}</p>
            <div class="progress sp-progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${sPProgress}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProduct;
