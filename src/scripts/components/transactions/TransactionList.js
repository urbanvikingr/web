"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import TransactionListItem from "./TransactionListItem";

export default class TransactionList extends Component {
  static propTypes = {
    transactions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.transactions) {
      if (this.props.transactions.hasOwnProperty(key)) {
        items.push(
          <TransactionListItem key={key} item={this.props.transactions[key]}/>
        );
      }
    }
    return items;
  }

  render() {
    let items = this._getItems();
    const listStyle = {
      padding: "50px 0 0 0"
    };
    const headerElementStyle = {
      margin: "0 10px 10px 0",
      maxWidth: "800px",
      width: "25%"
    };

    return (
      <div className="block--center-horizontally__margin" style={listStyle}>
        <div className="block--center-horizontally__flex">
          <div style={headerElementStyle}>DATE</div>
          <div style={headerElementStyle}>CURRENCY</div>
          <div style={headerElementStyle}>AMOUNT</div>
          <div style={headerElementStyle}>TRANSACTION ID</div>
        </div>
        {items}
      </div>
    )
  }
}
