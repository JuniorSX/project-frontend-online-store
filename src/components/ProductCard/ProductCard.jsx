import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <div className="buttons-bar">
          <button>Voltar</button>
          <button data-testid="shopping-cart-button">Carrinho de Compras</button>
        </div>
        <section>
          <div className="img-product">
            <h2 data-testid="product-detail-name">{ product.title }</h2>
            <img
              data-testid="product-detail-image"
              src={ product.thumbnail }
              alt={ product.title }
            />
          </div>
          <div className="detail-product">
            <h2>Especificações Técnicas</h2>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>{product.warranty}</li>
            </ul>
            <div className="price-product">
              <p data-testid="product-detail-price">
                R$
                { product.price }
              </p>
              <div className="add-remove-quantity">
                - 1 +
              </div>
            </div>
            <div className="add-product">
              <button>ADicionar ao Carrinho</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

ProductCard.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    warranty: PropTypes.string.isRequired,
  }).isRequired,
};
