import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Product extends Component {

   // render star for rating
   rating = (starNumber) => {
      let rating = [];
         for (let i = 0; i < starNumber; i++){
            rating.push(<i key={i} className="fa fa-star ratingStar" aria-hidden="true"></i>);
         }
         for (let j=0; j < (5-starNumber); j++){
            rating.push(<i key={5 - j} className="fa fa-star-o ratingStar" aria-hidden="true"></i>);
         }
      return rating;
   }

   addToCart = (product) => {
      this.props.addToCart(product);
      this.props.message_addToCart(this.props.product);
   }
   

   render() {
      let {product} = this.props;

      return (
         <Card className='product'>
            <Card.Img
               variant="top"
               src={product.image} />
            <Card.Body>
               <Card.Title>{product.name}</Card.Title>
               <Card.Text>
                  {product.price} ₫
                  <br />
                  <li style={{listStyle : 'none'}}>
                     {this.rating(product.rating)}
                  </li>
               </Card.Text>
               <Button variant="primary" onClick={() => this.addToCart(product)}>Mua</Button>
            </Card.Body>
         </Card>
      );
   }
}

export default Product;