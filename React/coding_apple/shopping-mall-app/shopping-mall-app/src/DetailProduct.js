import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './sass.scss';
import { stockContext } from './App.js';
import { CSSTransition } from 'react-transition-group';

function ProductDetail(props){
  let stock = useContext(stockContext);
  let [tabIndex, changeTabIndex] = useState(0);
  let [tabState, changeTabState] = useState(false);
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
      <div className="mt-30">
        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={ ()=> {changeTabIndex(0); changeTabState(false) } }>상세설명</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={ ()=> {changeTabIndex(1); changeTabState(false) } }>세부사항</Nav.Link>
          </Nav.Item>
        </Nav>
        <CSSTransition in={ tabState } classNames="tabAni" timeout={500}>
          <TabContent 
            tabIndex = { tabIndex } 
            changeTabState={ changeTabState } 
            id={ id }
            currentProd = { currentProd }
          />
        </CSSTransition>
      </div>
      <button 
        className="btn btn-primary" 
        onClick={ ()=>{ history.push('/') } }
        style={{ marginTop: '50px' }}
      >
        뒤로가기
      </button>
    </div>
  ) 
}

function TabContent(props){
  useEffect(()=>{
    props.changeTabState(true);
  })

  if( props.tabIndex == 0 ){
    return (
      <div style={{ textAlign:"center", marginTop: "60px", lineHeight: "1.6" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "40px" }}>뒹굴뒹굴할 땐 후디가 최고</h3>
        <p>
          실내에서 뒹굴뒹굴할 땐 역시 후디가 최고죠.<br/>
          { props.currentProd[0].friendsName }도 후디를 쓰고 다가오네요.
        </p>
        <img src={ props.currentProd[0].detailSrc } style={{ width: '100%' }} />
        <p style={{ marginTop: "40px" }}>
        뽀짝한 크기의 목베개는 잠시 안녕.<br/>
        왕 커서 왕 사랑스럽고 왕 편해요.<br/>
        기대서 책을 읽기에도 좋고,<br/>
        포옥 껴안고 잠들기에는 더 좋아요.
        </p>
        <img src={ props.currentProd[0].src } style={{ width: '100%' }} />
      </div>
    )
  } else {
    return (
      <div className="detail-info">
        <div className="sub-title">세부정보</div>
          <ol className="detail-info-list">
            <li>제품 소재 : 표면-폴리에스터 96%, 스판덱스 4% / 충전재-폴리에스터 100%</li>
            <li>색상 : 오렌지&nbsp;외</li>
            <li>치수/중량&nbsp;: 53*28*25cm, 697g</li>
            <li>제품구성 : 바디필로우 1개</li>
            <li>제조자 : 토이스토리</li>
            <li>제조국 : 중국</li>
            <li>취급 시 주의사항<br/>
            1. 포장은 반드시 부모님께서 개봉해 주시고 분리 수거해 주십시오.<br/>
            2. 제품 용도 이외에는 사용하지 마십시오.<br/>
            3. 입에 넣고 물거나 빨지 않도록 주의 하십시오.<br/>
            4. 불에 직접 닿거나 가까이 하지 마세요.<br/>
            5.&nbsp;만 3 세 미만의 어린이가 사용하기에는 부적절하오니 보호자의 주의가 필요합니다.<br/>
            6. 건조기 혹은 뜨거운 바람에 말리지 마십시오.<br/>
            7. 물에 젖을 경우 그늘에서 말려 주십시오.</li>
            <li>품질보증 기준 : 본 제품은 공정거래위원회 고시 소비자 분쟁해결기준에 의거 교환 및 보상을 받으실 수 있습니다.</li>
            <li>A/S 책임자와 전화번호 : 카카오프렌즈 고객센터 1577-6263</li>
        </ol>
      </div>
    )
  }
}

function StockInfo(props){
  return(
    <p> 재고 : { props.prodStock } </p>
  )
}
export default ProductDetail;