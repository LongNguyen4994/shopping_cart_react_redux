import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as Message from '../constants/Message';
import CartTotal from '../components/CartTotal';
import * as actions from '../actions/index'

class CartContainer extends Component {

   showCart = (cart) => {
      let products = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
      if (cart.length > 0) {
         products = cart.map(item => {
            return (
               <CartItem
                  key={item.product.id}
                  productData={item}
                  updateQuantity={this.props.updateQuantity}
                  deleteFromCart={this.props.deleteFromCart}
                  message_removeFromCart={this.props.message_removeFromCart}
               />
            );
         });
      }
      return products;
   }

   cartTotal = (cart) => {
      let result = null;
      if (cart.length > 0) {
         result = <CartTotal cart={cart} />
      }
      return result;
   }


   
   render() {
      // ds product lay tu store
      let { cart } = this.props;

      return (
         <Cart>
            {this.showCart(cart)}
            {this.cartTotal(cart)}
         </Cart>
      );
   }
}

// PropTypes
CartContainer.propTypes = {
   cart: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
         }).isRequired,
         quantity: PropTypes.number.isRequired,
      })
   ).isRequired,
   updateQuantity: PropTypes.func.isRequired,
   deleteFromCart: PropTypes.func.isRequired,
   message_removeFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
   return {
      cart: state.cart,
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      updateQuantity: (id, quantity) => {
         dispatch(actions.updateQuantity(id, quantity));
      },
      deleteFromCart: (id) => {
         dispatch(actions.deleteFromCart(id));
      },
      message_removeFromCart: (product) => {
         dispatch(actions.message_removeFromCart(product));
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);