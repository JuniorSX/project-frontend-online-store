import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

export default class Header extends Component {
  render() {
    const {
      redirect,
      queryInput,
      handleButtonChart,
      handleButtonQuery,
      handleChange,
    } = this.props;
    return (
      <header>
        {redirect && <Redirect to="/shopping-cart" />}
        <form>
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
              onChange={ handleChange }
            />
          </label>
          <button
            data-testid="query-button"
            onClick={ handleButtonQuery }
          >
            Pesquisar
          </button>
        </form>
        <button
          onClick={ handleButtonChart }
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  handleButtonChart: PropTypes.func.isRequired,
  handleButtonQuery: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  queryInput: PropTypes.string.isRequired,
  redirect: PropTypes.bool.isRequired,
};
