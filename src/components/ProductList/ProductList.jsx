import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ProductList.css';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  addToCart = (product) => {
    const previousCartProducts = localStorage.getItem('cart');
    if (previousCartProducts) {
      const parsedPreviousCartProducts = JSON.parse(previousCartProducts);
      const cartProducts = [...parsedPreviousCartProducts, product];
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
    const { handleNumberOfProducts } = this.props;
    handleNumberOfProducts();
  };

  render() {
    const { queryData } = this.props;
    return (
      <>
        {
          queryData.map((product) => (
            <article key={ product.id } data-testid="product">
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
                {product.shipping.free_shipping
                  ? <p data-testid="free-shipping">frete grátis</p>
                  : ''}
              </Link>
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
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    map: PropTypes.func,
  })),
  handleNumberOfProducts: PropTypes.func,
}.isRequired;
