"use strict";
import React, { Component, PropTypes } from "react";
import ProductList from "./products/ProductList";

export default class Marketplace extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._goToShowProduct = this._goToShowProduct.bind(this);
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
