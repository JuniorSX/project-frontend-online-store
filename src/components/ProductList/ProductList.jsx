import React, { Component } from 'react';
import './ProductList.css';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { queryData } = this.props;
    return (
      <>
        {
          queryData.map((product) => (
            <article key={ product.id } data-testid="product">
              <div className="product-title">{product.title}</div>
              <div className="product-image">
                <img src={ product.thumbnail } alt={ product.title } />
              </div>
              <div className="product-value">
                R$
                {product.price}
              </div>
            </article>
          ))
        }

      </>
    );
  }
}
ProductList.propTypes = {
  queryData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};