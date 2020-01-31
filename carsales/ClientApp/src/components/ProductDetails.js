import React, { Component } from 'react'

import ProductName from '../components/ProductName'
import ProductPrice from '../components/ProductPrice'

class ProductDetails extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'lightgrey', display: 'flex', width: 250, flexGrow: 1 }}>
                <ProductName />
                <ProductPrice />
            </div>
        )
    }
}

export default ProductDetails