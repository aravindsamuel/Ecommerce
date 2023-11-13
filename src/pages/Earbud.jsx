import React from 'react'
import { Productsdata } from '../dataSource'
import ProductCard from '../components/ProductCard'

const Earbud = () => {

  const category = "earbud";

  const Earbuds = Productsdata.filter((item) => item.category === category)


  return (
    <>
    <section className="types-products-wrapper">
        <div className="container-xxl">
          <div className="types-flex py-2">
            {Earbuds.map((p) => (
              <ProductCard
                key={p.id}
                brand={p.brand}
                rating={p.rating}
                price={p.price}
                img={p.img}
                title={p.title}
                p={p}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Earbud