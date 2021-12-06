import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ProductContainer extends Component {

   showProductList = (productList) => {
      let products = null;
      if (productList.length > 0) {
         products = productList.map(product => {
            return (
               <Product
                  key={product.id}
                  product={product}
                  addToCart={this.props.addToCart}
                  message_addToCart={this.props.message_addToCart}
               />
            );
         });
      }
      return products;
   }

   render() {
      // ds product lay tu store
      let { productList } = this.props;

      return (
         <ProductList>
            {this.showProductList(productList)}
         </ProductList>
      );
   }
}

// PropTypes
ProductContainer.propTypes = {
   productList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         image: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         inventory: PropTypes.number.isRequired,
         rating: PropTypes.number.isRequired,
      })
   ).isRequired,
   addToCart: PropTypes.func.isRequired,
   message_addToCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
   return {
      productList: state.productList,
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      addToCart: (product) => {
         dispatch(actions.addToCart(product));
      },
      message_addToCart: (product) => {
         dispatch(actions.message_addToCart(product));
      },
      
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);