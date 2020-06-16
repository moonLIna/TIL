import React from 'react';
import { Table, FormCheck } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
  return (
    <div className="cart-container">
      {
        props.alertStat === true
        ? (
          <div className="cart-notice">
            <p>
              지금 구매 시 <b>신규할인 20%</b>
              <button 
                className="close-btn"
                onClick={ () => { props.dispatch({ type: false })} }
              >
              </button>
            </p>
          </div>
        )
        : null
      }
      <div className="title-wrap">
        <h3 className="sub-title">장바구니</h3>
      </div>
      <Table responsive>
        <colgroup>
          <col width="5%" />
          <col width="auto" />
          <col width="10%" />
          <col width="15%" />
          <col width="15%" />
          <col width="5%" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>상품명</th>
            <th>옵션</th>
            <th>수량</th>
            <th>상품금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            props.state.map(function(a, i){
              return (
                <tr key={ a.id }>
                  <td>
                    <FormCheck />
                  </td>
                  <td>{ a.title }</td>
                  <td>{ a.option }</td>
                  <td>
                    <div className="btn-wrap">
                      <button 
                        className="num-btn type-minus"
                        onClick={()=>{ props.dispatch({ type : 'minusNum', idx : i }) }}
                      >
                      </button>
                      { a.quan }
                      <button
                        className="num-btn type-add"
                        onClick={()=>{ props.dispatch({ type : 'addNum', idx : i }) }}
                      >
                      </button>
                    </div>
                  </td>
                  <td>{ a.price }</td>
                  <td>
                    <button 
                      className="close-btn"
                    >
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

function storeData(state){
  return {
    state : state.reducer,
    alertStat : state.reducer2
  }
}
export default connect(storeData)(Cart);
// export default Cart;