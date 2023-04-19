import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class ListagemDeProdutos extends Component {
  state = {
    redirect: false,
  };

  handleButton = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    return (
      <div>
        {redirect && <Redirect to="/shopping-cart" />}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button onClick={ this.handleButton } data-testid="shopping-cart-button">
          Carrinho de compras
        </button>
      </div>
    );
  }
}

export default ListagemDeProdutos;
