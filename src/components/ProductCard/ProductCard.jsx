import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './ProductCard.css';

export default class ProductCard extends Component {
  state = {
    redirect: false,
  };

  handleButtonChart = () => {
    this.setState({
      redirect: true,
    });
  };

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
    const { redirect } = this.state;
    const { product } = this.props;
    console.log(product);
    return (
      <>
        {redirect && <Redirect to="/shopping-cart" />}
        <div className="buttons-bar">
          <button>Voltar</button>
          <button
            onClick={ this.handleButtonChart }
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
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
              <button
                onClick={ () => this.addToCart(product) }
                data-testid="product-detail-add-to-cart"
              >
                Adicionar ao Carrinho
              </button>
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
