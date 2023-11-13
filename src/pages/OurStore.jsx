import React from 'react'
import ReactStars from 'react-rating-stars-component';
import "../App.css"
import ProductCard from '../components/ProductCard';
import { Productsdata } from '../dataSource';
import Color from '../components/Color';
import { Link } from 'react-router-dom';

const random1 = Math.floor(Math.random() * 60)
const random2 = Math.floor(Math.random() * 60)

const OurStore = () => {

  return (
    <>
    <div className="store-wrapper home-wrapper-2 py-3">
      <div className="container-xxl">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div className="form-check">
                  <input className="form-check-input mt-2" type="checkbox" value="" id="" />
                  <label className="form-check-label" htmlFor="">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input mt-2" type="checkbox" value="" id="" checked />
                  <label className="form-check-label" htmlFor="">
                    Out of Stock (0)
                  </label>
                </div>
              <h5 className="sub-title">Price</h5>  
              <div className='d-flex align-items-center gap-3'>
                <div className="form-floating">
                  <input type="number" className="form-control" id='floatingInput' placeholder='From' />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input type="number" className="form-control" id='floatingInput1' placeholder='To ' />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>
              <h5 className="sub-title">Colors</h5> 
              <div>
                <Color />
              </div> 
              <h5 className="sub-title">Size</h5> 
              <div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input mt-2" value="" id='color-1' />
                  <label htmlFor="color-1" className="form-check-label"> S(2)</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input mt-2" value="" id='color-2' />
                  <label htmlFor="color-2" className="form-check-label"> M(2)</label>
                </div>
              </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-3">
                  <Link to='/headphone' className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphones
                  </Link>
                  <Link to='/laptop' className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptops
                  </Link>
                  <Link to='/tablet' className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablets
                  </Link>
                  <Link to='/earbud' className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Earbuds
                  </Link>
                  <Link to='/watch' className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Watches
                  </Link>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img src={Productsdata[random1].img} className='img-fluid object-fit-contain p-3' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>{Productsdata[random1].title}</h5>
                    <ReactStars
                    count={5}
                    size={17}
                    value={Productsdata[random1].rating}
                    edit={false}
                    activeColor='#ffd700'
                     />
                     <b>$ {Productsdata[random1].price}</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src={Productsdata[random2].img} className='img-fluid object-fit-contain p-3' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>{Productsdata[random2].title}</h5>
                    <ReactStars
                    count={5}
                    size={17}
                    value={Productsdata[random2].rating}
                    edit={false}
                    activeColor='#ffd700'
                     />
                     <b>$ {Productsdata[random2].price}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap justify-content-center gap-1">
                {Productsdata.map(p => <ProductCard key={p.id}
                brand={p.brand}
                rating={p.rating}
                price={p.price}
                img={p.img}
                title={p.title}
                p={p}/>)}
                
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OurStore