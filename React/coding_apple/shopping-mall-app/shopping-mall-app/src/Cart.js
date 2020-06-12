import React from 'react';
import { Table, FormCheck } from 'react-bootstrap';

function Cart(props){
  return (
    <div className="cart-container">
      <div>
        <h3 className="sub-title">장바구니</h3>
      </div>
      <Table responsive>
        <colgroup>
          <col width="5%" />
          <col width="" />
          <col width="" />
          <col width="5%" />
          <col width="" />
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
          <tr>
            <td>
              <input type="radio" checked />
            </td>
            <td>Table</td>
            <td>Table</td>
            <td>Table</td>
            <td>Table</td>
            <td>Table</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Cart;