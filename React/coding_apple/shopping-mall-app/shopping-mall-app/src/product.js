import React, { useState } from 'react';
function ProductItem(props){
  return (
    <div className="col-md-4" >
      <img src={ props.product.src } alt={props.product.alt} width="100%"/>
      <h4>{ props.product.title }</h4>
      <p>{ props.product.content }</p>
    </div>
  )
}
export default ProductItem;