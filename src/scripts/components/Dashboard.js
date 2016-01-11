"use strict";
import { connect } from "react-redux";
import ProductList from "./products/ProductList";
import UserList from "./users/UserList";

const Dashboard = ({
  clients,
  products,
  goTo
}) => {
  const styles = {
    card: {
      height: "auto",
      width: "80%"
    }
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="block--center-horizontally__margin"
          style={styles.card}>
          <h3>Dashboard</h3>
        </div>
        <div className="mdl-card mdl-shadow--2dp block--center-horizontally__margin"
          style={styles.card}>
          <div className="mdl-card__supporting-text block--center-horizontally__margin">
            <div className="mdl-tabs mdl-js-tabs">
              <div className="mdl-tabs__tab-bar">
                <a href="#products-panel" className="mdl-tabs__tab is-active">Products</a>
                <a href="#clients-panel" className="mdl-tabs__tab">Clients</a>
              </div>
              <div className="mdl-tabs__panel is-active" id="products-panel">
                <ProductList
                  products={products}
                  goTo={goTo}
                />
              </div>
              <div className="mdl-tabs__panel" id="clients-panel">
                <UserList
                  users={clients}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const selected = (state) => {
  let products = {};
  state.coach.coaches[state.auth.currentUser.id].products.forEach(el => {
    if (state.product.products[el.id]) {
      products[el.id] = state.product.products[el.id];
    }
  })
  return products;
};

const mapStateToProps = (state) => {
  return {
    clients: state.client.clients,
    products: selected(state)
  };
};

export default connect(
  mapStateToProps
)(Dashboard)
