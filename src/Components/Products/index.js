import React from 'react'
import Header from '../Header'
import AllProductsSection from '../AllProductsSection'
import './index.css'
import PrimeDealsSection from '../PrimeDealsSection'

const Products = () => {
  return (
    <>
        <Header />
        <div className="product-sections">
          <PrimeDealsSection />
          <AllProductsSection />
        </div>
    </>
  )
}

export default Products