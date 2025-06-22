import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; 
import './ShopCategory.css';



 export const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext);
  return (
    <div className='shopcategory'>
     
        <img src={props.banner} alt={props.catogry} />
    <div className='shopcategory-indexSort'>
      <p>
        <span>Showing 1-12</span> out of 20 products
      </p>
      <div className='shopcategory-sort'>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort">
          <option value="default">Default</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>

      </div>

    </div>
      


      <div className='shopcategory-products'>
        {
        all_products.filter((product) => product.category === props.catogry).map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
              <h3>
                ₹{product.new_price}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.old_price}
                </span>
              </h3>
          </div>
        ))}
      </div>

    </div>
  )
}

