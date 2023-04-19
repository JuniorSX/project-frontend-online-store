import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    cartProducts: [],
  };

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {!cartProducts.length === 0
          ? <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          : <div />}
      </div>
    );
  }
}

export default ShoppingCart;
