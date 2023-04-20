import React, { Component } from 'react';
import './ProductList.css';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  addToCart = (product) => {
    const previousCartProducts = localStorage.getItem('cart');
    if (previousCartProducts) {
      const parsedPreviousCartProducts = JSON.parse(previousCartProducts);
      const cartProducts = [...parsedPreviousCartProducts, product];
      const stringifiedProducts = JSON.stringify(cartProducts);
      localStorage.setItem('cart', stringifiedProducts);
    } else {
      const newCartProduct = JSON.stringify([product]);
      localStorage.setItem('cart', newCartProduct);
    }
  };

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
                {product.price.toFixed(2)}
              </div>
              <button
                onClick={ () => this.addToCart(product) }
                data-testid="product-add-to-cart"
              >
                Adicionar ao carrinho
              </button>
            </article>
          ))
        }

      </>
    );
  }
}
ProductList.propTypes = {
  queryData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    map: PropTypes.func.isRequired,
  })).isRequired,
};
