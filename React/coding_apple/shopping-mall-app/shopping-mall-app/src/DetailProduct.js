import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './sass.scss';

function ProductDetail(props){
  useEffect(()=>{
    // let delayTimer = setTimeout(function(){
    //   let alert = document.querySelector('.my-alert');
    //   alert.parentNode.removeChild(alert);
    // }, 2000)
    let delayTimer = setTimeout(()=>{
      hideAlert(false);
      return ()=>{ clearTimeout(delayTimer) }; 
    }, 2000)

    return function delayComponent(){
      // alert('품절되기 전에 33% 할인된 가격으로 구매해보세요!')
    }
  }, []);
  let [alertStat, hideAlert] = useState(true);
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
  let [inputData, changeData] = useState('');
  
  function changeStockNum(id){
    let tempArray = [...props.stockNum];
    
    if( tempArray[id] <= 0 ){
      return 0;
    } else {
      tempArray[id] = tempArray[id] - 1;
      props.changeStock(tempArray);
    }
  }

  return(
    <div className="container">
      {/* <input onChange={ (e)=>{ changeData(e.target.value) } }/> { inputData } */}
      {
        alertStat === true
        ? ( <div className="my-alert">
          <p>품절 임박</p>
        </div> )
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={ currentProd[0].src } alt={ currentProd[0].alt } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="product-title">{ currentProd[0].title }</h4>
          <p>{ currentProd[0].price }</p>
          <StockInfo prodStock={ props.stockNum[id] }></StockInfo>
          <p>{ currentProd[0].content }</p>
          <button className="btn btn-danger" onClick={ ()=>{ changeStockNum(id) } }>주문하기</button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={ ()=>{ history.push('/') } }>뒤로가기</button>
    </div>
  ) 
}

function StockInfo(props){
  return(
    <p> 재고 : { props.prodStock } </p>
  )
}
export default ProductDetail;