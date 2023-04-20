import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ProductList.css';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { queryData } = this.props;
    return (
      <>
        {
          queryData.map((product) => (

            <article data-testid="product" key={ product.id }>
              <Link
                to={ `/ProductDetail/${product.id}` }
                data-testid="product-detail-link"
              >
                <div className="product-title">{product.title}</div>
                <div className="product-image">
                  <img src={ product.thumbnail } alt={ product.title } />
                </div>
                <div className="product-value">
                  R$
                  {product.price.toFixed(2)}
                </div>
              </Link>
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
