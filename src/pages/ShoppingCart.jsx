import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    this.getCartProducts();
  }

  getCartProducts = () => {
    const savedProducts = JSON.parse(localStorage.getItem('cart'));
    if (savedProducts) {
      savedProducts.forEach((product) => {
        product.cartQuantity = this.getQuantity(savedProducts, product);
      });
      const filteredArray = [];
      savedProducts.forEach((product) => {
        if (!filteredArray.some((el) => el.id === product.id)) {
          filteredArray.push(product);
        }
      });
      this.setState({
        cartProducts: filteredArray,
      });
    }
  };

  getQuantity = (array, obj) => {
    const count = array.filter((filteredObj) => filteredObj.id === obj.id).length;
    return count;
  };

  removeItem = (product) => {
    const { cartProducts } = this.state;
    const productIndex = cartProducts.indexOf(product);
    cartProducts.splice(productIndex, 1);
    this.setState({
      cartProducts,
    });
  };

  increaseQuantity = (product) => {
    const { cartProducts } = this.state;
    const increasedArray = cartProducts.map((el) => {
      if (el.id === product.id) {
        el.cartQuantity = el.cartQuantity < el.available_quantity
          ? el.cartQuantity + 1
          : el.available_quantity;
      }
      return el;
    });
    this.setState({
      cartProducts: increasedArray,
    });
  };

  decreaseQuantity = (product) => {
    const { cartProducts } = this.state;
    const decreasedArray = cartProducts.map((el) => {
      if (el.id === product.id) {
        el.cartQuantity = el.cartQuantity === 1 ? 1 : el.cartQuantity - 1;
      }
      return el;
    });
    this.setState({
      cartProducts: decreasedArray,
    });
  };

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {cartProducts.length === 0
          ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          : cartProducts.map((product) => (
            <article key={ product.id }>
              <div
                className="product-title"
                data-testid="shopping-cart-product-name"
              >
                {product.title}
              </div>
              <div className="product-image">
                <img src={ product.thumbnail } alt={ product.title } />
              </div>
              <div className="product-value">
                R$
                {product.price.toFixed(2)}
              </div>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => this.decreaseQuantity(product) }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{product.cartQuantity}</p>
              <button
                data-testid="product-increase-quantity"
                onClick={ () => this.increaseQuantity(product) }
              >
                +
              </button>
              <button
                data-testid="remove-product"
                onClick={ () => this.removeItem(product) }
              >
                Remover
              </button>
            </article>
          ))}
      </div>
    );
  }
}

export default ShoppingCart;
