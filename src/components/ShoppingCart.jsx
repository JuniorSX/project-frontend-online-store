import React, { Component } from 'react';

class ShoppingCart extends Component {
  // state = {
  //   cartProducts: [],
  // };

  render() {
    // const { cartProducts } = this.state;
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default ShoppingCart;
