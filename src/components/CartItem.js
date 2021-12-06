import React, { Component } from 'react';

class CartItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         quantity: 1,
      }
   }

   
   static getDerivedStateFromProps = (nextProps, prevState) => {
      if (nextProps.productData.quantity !== prevState.quantity) {
         return {
            quantity: nextProps.productData.quantity,
         }
      } else return null;
   }

   handleOnChange = (event) => {
      let target = event.target;
      let newQuantity = target.value;
      newQuantity = +newQuantity;

      let id = this.props.productData.product.id;
      this.props.updateQuantity(id, newQuantity);
   }

   decreaseQuantity = () => {
      if (this.state.quantity > 0) {
         let number = this.state.quantity - 1;
         this.props.updateQuantity(this.props.productData.product.id, number);
      }
   }
   
   increaseQuantity = (id, quantity) => {
      let number = this.state.quantity + 1;
      this.props.updateQuantity(this.props.productData.product.id, number);
   }

   deleteFromCart = () => {
      this.props.deleteFromCart(this.props.productData.product.id);
      this.props.message_removeFromCart(this.props.productData.product);
   }

   // total money = quantity * price
   subTotal = (quantity, price) => {
      return quantity * price;
   }


   render() {
      let { productData } = this.props;
      let { quantity } = this.state;
      console.log(this.state)
      return (
         <tr>
            <td>
               <img
                  src={productData.product.image}
                  alt=''
                  style={{ maxWidth: '40px' }}
               />
            </td>
            <td>{productData.product.name}</td>
            <td>{productData.product.price} ₫</td>
            <td style={{ display: 'flex', justifyContent: 'center' }}>
               <button
                  className='btn btn-primary quantityButton'
                  onClick={this.decreaseQuantity}>-</button>
               <input
                  name='quantity'
                  style={{ textAlign: 'center', width: '35px', height: '35px' }}
                  value={quantity}
                  onChange={this.handleOnChange}
               />
               <button
                  className='btn btn-primary quantityButton'
                  onClick={this.increaseQuantity}>+</button>
            </td>
            <td>{this.subTotal(quantity, productData.product.price)} ₫</td>
            <td>
               <button
                  className='btn btn-danger'
                  onClick={this.deleteFromCart}
               >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
               </button>
            </td>
         </tr>
      );
   }
}

export default CartItem;