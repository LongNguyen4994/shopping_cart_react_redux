import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class ProductList extends Component {

    render() {
        
        return (
            <Container>
                <h1>DANH SÁCH SẢN PHẨM</h1>
                <br />
                <div className='d-flex'>
                    { this.props.children }
                </div>
            </Container>
        );
    }
}


export default (ProductList);