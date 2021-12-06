import React, { Component } from 'react';

class CartTotal extends Component {

   totalAmount = (cart) => {
      let total = null;
      if (cart.length > 0){
         cart.map(cartItem => total = total + (cartItem.product.price * cartItem.quantity) )
      }
      return total;
   }
   render() {
      let {cart} = this.props;
      return (
         <tr >
            <td colSpan="3"></td>
            <td><b>TỔNG</b></td>
            <td><b>{this.totalAmount(cart)} ₫</b></td>
            <td></td>
         </tr>
      );
   }
}

export default CartTotal;