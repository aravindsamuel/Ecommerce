import React from "react";
import {BsSearch} from 'react-icons/bs'
import {NavLink, Link } from 'react-router-dom'
import { useCart } from "../CartContext.js";

const Header = () => {
  const { cart } = useCart();

  const headerprice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <header className="header-top-strip">
        <div className="headerstripcontent">
          <div>
            <p className="headerstriptext">Free shipping over $300</p>
          </div>
          <div>
            <p className="headerstriptext">
              Helpline : <a href="tel:+91 9087890436">+91 9087890436</a>
            </p>
          </div>
        </div>
        <div className="headercontent">
          <div className="brand-searchbar">
            <h3 className="brandname">Ecommerce</h3>
            <div className="input-group">
              <input type="text" className="form-control" 
              placeholder="Search..."
              aria-label="Search..." aria-describedby="basic-addon2"
               />
               <span class="input-group-text searchicon" id="basic-addon2"><BsSearch /></span>
            </div>           
          </div>
          <div className="headerlinks">
            <div className='headerlinkbox'>
              <Link to='/compareproducts' className="text-white headerlink">
              <img className="headerlinkicon" src="images/compare.svg" alt="compare" />
              <p className="headerlinktext">
                Compare <br/> Products
              </p>
              </Link>
            </div>
            <div className='headerlinkbox'>
              <Link to='/wishlist' className="text-white headerlink">
              <img className="headerlinkicon" src="images/wishlist.svg" alt="compare" />
              <p className="headerlinktext">
                Favourite <br/> Whishlist
              </p>
              </Link>
            </div>
            <div className='headerlinkbox'>
              <Link to='/login' className="text-white headerlink">
              <img className="headerlinkicon" src="images/user.svg" alt="compare" />
              <p className="headerlinktext">
                Log in <br/> Account
              </p>
              </Link>
            </div>
            <div className='headerlinkbox'>
              <Link to='/cart' className="text-white headerlink badgebox">
              <img className="headerlinkicon" src="images/cart.svg" alt="compare" />
              <div className="flex-column">
                <span className="badge bg-white text-dark">{cart.length}</span>
                <p className="badgetext">${headerprice}</p>
              </div>
              </Link>
            </div>

          </div>
        </div>
        <div className="headerbottom">
          <div className="dropdown headerbottomdropdown">                    
          <button className="headerbottombtn btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="bottombtnimg" src="images/menu.svg" alt="menu" /> Categories
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link to="/laptop" class="dropdown-item text-white">Laptops</Link></li>
            <li><Link to="/watch" class="dropdown-item text-white">Watches</Link></li>
            <li><Link to="/tablet" class="dropdown-item text-white">Tablets</Link></li>
            <li><Link to="/headphone" class="dropdown-item text-white">Headphones</Link></li>
            <li><Link to="/earbud" class="dropdown-item text-white">Earbuds</Link></li>
          </ul>
          </div>
          <div className="headerbottomlinks">
            <NavLink className='text-white headerbottomlink' to='/'>
              Home
            </NavLink>
            <NavLink className='text-white headerbottomlink' to='/store'>
              Our store
            </NavLink>
            <NavLink className='text-white headerbottomlink' to='/contact'>
              Contact
            </NavLink>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;

