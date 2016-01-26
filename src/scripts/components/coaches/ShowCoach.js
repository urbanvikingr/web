"use strict";
import { connect } from "react-redux";
import Link from "../Link";

const ShowCoach = ({ coach, products, goTo }) => {
  let productsByCoach = {};
  coach.products.forEach(el => {
    if (products[el.id]) { productsByCoach[el.id] = products[el.id]; }
  })

  const { avatar, email, name } = coach;
  const styles = {
    avatar: {
      borderRadius: "46px",
      marginTop: "46px",
      height: "92px",
      width: "92px"
    },
    image: {
      backgroundImage: "url(" + avatar + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "160px",
      width: "auto",
      WebkitTransition: "all",
      msTransition: "all"
    },
    main: {
      width: "60%"
    }
  };

  return (
    <div>
      <div className="mdl-grid" style={styles.main}>
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center">
          <div className="mdl-card__menu">
            <Link
              styles="mdl-button mdl-js-button mdl-button--icon"
              onClick={() => goTo("MARKETPLACE")}
            >
              <i className="zmdi zmdi-close"></i>
            </Link>
          </div>
          <div className="mdl-card__title" style={styles.image}>
            <img src={avatar} alt="" style={styles.avatar} />
          </div>
          <div className="mdl-card__supporting-text">
            <h3 className="mdl-card__title-text">{name}</h3>
            <h5 className="mdl-typography--subhead">Title</h5>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <ProductList
        products={products} />
    </div>
  );
};

const ProductList = ({
  products
}) => {
  let items = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      items.push(
        <ProductListItem key={key} product={products[key]} />
      );
    }
  }

  const styles = {
    main: {
      width: "60%"
    }
  };

  return (
    <div className="mdl-grid" style={styles.main}>
      {items}
    </div>
  );
};

const ProductListItem = ({
  product
}) => {
  const { currency, description, name, price } = product;

  return (
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center">
      <div className="mdl-card__supporting-text">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{currency}&nbsp;{price}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps
)(ShowCoach)
