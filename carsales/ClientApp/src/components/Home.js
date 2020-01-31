import React, { Component } from 'react'
import Product from '../components/Product'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
        </main>
    );
  }
}
