"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import ProductList from "./products/ProductList";
import UserList from "./users/UserList";
import "./dashboard.css";

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (product) => {
      dispatch(changeRoute("EDITPRODUCT", product));
    },
    onNew: () => {
      dispatch(changeRoute("NEWPRODUCT"));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    users: state.user.users
  };
};

class Dashboard extends Component {
  render() {
    const { products, users, onEdit, onNew } = this.props;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="dashboard-card block--center-horizontally__margin"><h3>Dashboard</h3></div>
          <div className="dashboard-card block--center-horizontally__margin mdl-card mdl-shadow--2dp">
            <div className="block--center-horizontally__margin mdl-card__supporting-text">
              <div className="mdl-tabs mdl-js-tabs">
                <div className="mdl-tabs__tab-bar">
                  <a href="#products-panel" className="mdl-tabs__tab is-active">Products</a>
                  <a href="#clients-panel" className="mdl-tabs__tab">Clients</a>
                </div>
                <div className="mdl-tabs__panel is-active" id="products-panel">
                  <ProductList
                    products={products}
                    onEdit={onEdit}
                    onNew={onNew}
                  />
                </div>
                <div className="mdl-tabs__panel" id="clients-panel">
                  <UserList
                    users={users}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
