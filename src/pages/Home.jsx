import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories/Categories';
import { getProductsFromQuery } from '../services/api';

class ListagemDeProdutos extends Component {
  state = {
    redirect: false,
    queryInput: '',
    isQuery: false,
    queryData: [],
  };

  handleButtonChart = () => {
    this.setState({
      redirect: true,
    });
  };

  handleButtonQuery = async () => {
    const { queryInput } = this.state;
    const queryData = await getProductsFromQuery(queryInput);
    // const tst = await getProductsFromCategoryAndQuery(0, queryInput);
    const { results } = queryData;
    this.setState({
      queryData: results,
      isQuery: results.length === 0,
    });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      queryInput: value,
    });
  };

  render() {
    const { redirect, queryInput, isQuery, queryData } = this.state;
    console.log(queryData);
    return (
      <div>
        {redirect && <Redirect to="/shopping-cart" />}
        <section>
          <Categories />
        </section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <label htmlFor="query-input">
          <input
            type="text"
            id="query-input"
            data-testid="query-input"
            name="queryInput"
            value={ queryInput }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="query-button"
          onClick={ this.handleButtonQuery }
        >
          Pesquisar
        </button>
        {isQuery ? <h2>Nenhum produto foi encontrado</h2>
          : <div>ja vou terminar</div>}

        <button onClick={ this.handleButtonChart } data-testid="shopping-cart-button">
          Carrinho de compras
        </button>
      </div>
    );
  }
}

export default ListagemDeProdutos;
