import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './sass.scss';

function ProductDetail(props){
  let { id } = useParams();
  /* let currentProd = props.product.find(function(prod){
    return prod.id == id
  }); */
  let currentProd = props.product.filter(function(prod){
    if( prod.id == id ){
      return prod;
    }
  });
  let history = useHistory();

  return(
    <div className="container">
      <div className="my-alert">
        <p>품절 임박</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={ currentProd[0].src } alt={ currentProd[0].alt } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="product-title">{ currentProd[0].title }</h4>
          <p>{ currentProd[0].price }</p>
          <p>{ currentProd[0].content }</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={ ()=>{ history.goBack() } }>뒤로가기</button>
    </div>
  ) 
}
export default ProductDetail;