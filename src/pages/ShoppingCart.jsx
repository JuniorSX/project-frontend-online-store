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
      this.setState({
        cartProducts: savedProducts,
      });
    }
  };

  getQuantity = (array, obj) => {
    const count = array.filter((filteredObj) => filteredObj.id === obj.id).length;
    return count;
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
              <p data-testid="shopping-cart-product-quantity">{product.cartQuantity}</p>
            </article>
          ))}
      </div>
    );
  }
}

export default ShoppingCart;
