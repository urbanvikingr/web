"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Button from "../Button";
import "./products.css";

const ShowProduct = ({
  product,
  onBuy,
  onClose
}) => {
  const { currency, description, image, name, price} = product;

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="product-card block--center-horizontally__margin mdl-card mdl-shadow--2dp">
          <div className="mdl-card__menu">
            <Button
              styles="mdl-button mdl-js-button mdl-button--icon"
              onClick={onClose}
            >
              <i className="material-icons">close</i>
            </Button>
          </div>
          <div className="mdl-card__supporting-text">
            <div className="block--center-horizontally__flex">
              <div className="product-card__left">
                <img className="product-card__image" src={image} alt="" />
              </div>
              <div className="product-card__right">
                <div>
                  <h3>{name}</h3>
                  <h6>{currency} {price}</h6>
                </div>
                <Button
                  styles="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  onClick={ev => {
                    ev.preventDefault();
                    onBuy(product);
                  }}
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
          <div className="mdl-card__supporting-text">
            <div>
              <h3>Description</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBuy: (product) => {
      dispatch(changeRoute("NEWTRANSACTION", product));
    },
    onClose: () => {
      dispatch(changeRoute("MARKETPLACE"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowProduct)
