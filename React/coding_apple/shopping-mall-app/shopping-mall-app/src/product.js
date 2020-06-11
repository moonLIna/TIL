import React, { useState } from 'react';
function ProductItem(props){
  return (
    <div className="col-md-4" >
      <img src={ props.product.src || null } alt={props.product.alt || null} width="100%"/>
      <h4>{ props.product.title }</h4>
      <p>{ props.product.content }</p>
    </div>
  )
}
export default ProductItem;