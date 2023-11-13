import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { useWishlist } from "../WishListContext";
import { useCart } from '../CartContext';
import { useCompareProduct } from '../CompareProductContext';

function ProductCard({brand, rating, price, img, title, p}) {

    const { addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { addToCompare } = useCompareProduct();

    const handleAddTowishlist = () => {
        addToWishlist(p);
      };

      const handleAddToCart = () => {
        addToCart(p);
      };

      const handleAddToCompare = () => {
        addToCompare(p);
      };

    if (!p || !p.id) {
        return console.log("Error: Product ID not available");;
      }
  return (
    <>    
    <Link to={`/product/${p.id}`} className="product-container position-relative">
            <div className='product-img-container'>
                <img className="img-fluid product-img" src={img} alt="product" />
            </div>
            <div className='productcard-details'>
                <h6 className="productbrand-name text-dark">{brand}</h6>
                <h5 className="product-name text-dark">{title}</h5>
                <div className="d-flex justify-content-left align-items-center">
                <ReactStars
                    count={5}
                    value={rating}
                    size={17}
                    isHalf={true}
                    activeColor="#ffd700"
                />
                <p className='mb-0 text-dark ft-rating'>{rating}</p>
                </div>
                <p className="product-price text-dark mb-2 ms-1">${price}.00</p>
            </div>
            <div className='product-action d-flex flex-column gap-2 position-absolute'>
                <Link><img src="images/prodcompare.svg" alt="product-card-icons" onClick={handleAddToCompare} /></Link>
                <Link><img src="images/add-cart.svg" alt="product-card-icons" onClick={handleAddToCart} /></Link>
            </div>
            <div className='productcard-wish-icon position-absolute'>
                <Link><img src="images/wish.svg" alt="product-card-icon" onClick={handleAddTowishlist} /></Link>
            </div>
    </Link>
    </>
  )
}

export default ProductCard