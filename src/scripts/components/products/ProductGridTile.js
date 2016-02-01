"use strict";

const ProductGridTile = ({ product, goTo }) => {
  const { description, image, name } = product;
  const styles = {
    image: {
      maxHeight: "160px"
    }
  };

  return (
    <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-cell--middle mdl-card mdl-shadow--2dp">
      <div className="mdl-card__media">
        <a href="#!"
          onClick={ev => {
            ev.preventDefault();
            goTo("SHOWPRODUCT", product);
          }}
        >
          <img src={image} alt="" style={styles.image} />
        </a>
      </div>
      <div className="mdl-card__supporting-text">
        <p className="mdl-typography--title">{name}</p>
        <p className="mdl-typography--subhead">{description}</p>
      </div>
    </div>
  );
};

export default ProductGridTile
