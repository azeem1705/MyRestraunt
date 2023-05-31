import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/menu.css'

const Menu = () => {
  const [products,setProduct] = useState([])



useEffect(()=>{

  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    
    setProduct(data.products)
    
  });

},)



  
  return (
    <Layout>
        <div className="container">
{

products.map(product=>(
  <div className="card bg-light-subtle mt-4">
    <img src={product.images[0]} className="card-img-top" alt="..."/>
    <div className="card-body">
      <div className="text-section">
        <h5 className="card-title fw-bold">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <div className="cta-section">
        <div>$129.00</div>
        <button className="add-to-cart" type="button">Add to cart</button>
      </div>
    </div>
  </div>
))

}
  
  
</div>


        </Layout>
  )
}

export default Menu