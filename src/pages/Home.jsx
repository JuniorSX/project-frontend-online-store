import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories/Categories';
import ProductList from '../components/ProductList/ProductList';
import { getCategoryId } from '../services/api';

class ListagemDeProdutos extends Component {
  state = {
    redirect: false,
    productsCategory: [],
  };

  handleButton = () => {
    this.setState({
      redirect: true,
    });
  };

  getSelectedCategory = async ({ target: { id } }) => {
    console.log('clicou', id);
    const category = await getCategoryId(id);
    this.setState({
      productsCategory: category.results,
    });
  };

  render() {
    const { redirect, productsCategory } = this.state;
    return (
      <div>
        {redirect && <Redirect to="/shopping-cart" />}
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button onClick={ this.handleButton } data-testid="shopping-cart-button">
          Carrinho de compras
        </button>
        <div className="main-section">
          <section>
            <Categories getSelectedCategory={ this.getSelectedCategory } />
          </section>
          <section>
            <ProductList productsCategory={ productsCategory } />
          </section>
        </div>
      </div>
    );
  }
}

export default ListagemDeProdutos;
