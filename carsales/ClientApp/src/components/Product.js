import React, { Component } from 'react'

import ProductImage from '../components/ProductImage'
import ProductDetails from '../components/ProductDetails'

class Product extends Component {
    buyTheProduct() {
        console.log("Bought")
    }
    render() {
        return (
            <div style={{ padding: 10, flexGrow: 1 }}>
                <ProductImage />
                <ProductDetails />
                <button onClick={this.buyTheProduct}>Buy</button>
            </div>
        )
    }
}

export default Product