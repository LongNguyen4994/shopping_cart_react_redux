import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';

class Cart extends Component {
   render() {
      let { children } = this.props;
      return (
         <Container>
            <h1>GIỎ HÀNG</h1>
            <br />
            <Table borderless hover responsive>
               <thead >
                  <tr>
                     <th>#</th>
                     <th>Sản phẩm</th>
                     <th>Giá</th>
                     <th>Số lượng</th>
                     <th>Thành tiền</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  { children }
               </tbody>
            </Table>
         </Container>
      );
   }
}

export default Cart;