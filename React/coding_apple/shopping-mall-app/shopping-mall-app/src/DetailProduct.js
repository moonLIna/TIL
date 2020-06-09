import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function ProductDetail(props){
  let { id } = useParams();
  let history = useHistory();

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.product[id].src} alt={props.product[id].alt} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4>{ props.product[id].title }</h4>
          <p>{ props.product[id].price }</p>
          <p>{ props.product[id].content }</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={ ()=>{ history.goBack() } }>뒤로가기</button>
    </div>
  ) 
}
export default ProductDetail;
