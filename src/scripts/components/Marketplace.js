"use strict";
import React, { Component, PropTypes } from "react";
import ProductList from "./products/ProductList";

export default class Marketplace extends Component {
  constructor(props) {
    super(props);
    this._goToShowProduct = this._goToShowProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  _goToShowProduct(id) {
    this.props.changeRoute("SHOWPRODUCT", id);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <ProductList
          products={products}
          onSelect={this._goToShowProduct} />
      </div>
    );
  }
}
