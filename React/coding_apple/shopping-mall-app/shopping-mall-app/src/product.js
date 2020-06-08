import React, { useState } from 'react';
import data from './data.js';

function ProductItem(){
  
  let [product, changeProduct] = useState(data);

  return (
    <div className="col-md-4">
      <img src={ product[0].src } width="100%"/>
      <h4>{ product[0].title }</h4>
      <p>{ product[0].content }</p>
    </div>
  )
}
export default ProductItem;