import './App.scss';
import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import NotificationContainer from './containers/NotificationContainer';
class App extends Component {
   render() {
      return (
         <div
            className="App"
            aria-live="polite"
            aria-atomic="true"
            style={{
               position: 'relative',
               minHeight: '100px',
            }}
         >
            <Header />
            <br />
            <ProductContainer />
            <br />
            {/* <Cart /> */}
            <CartContainer />
            <br />
            <Footer />
            {/* <br /> */}
            <NotificationContainer />
         </div>
      );
   }
}

export default App;
