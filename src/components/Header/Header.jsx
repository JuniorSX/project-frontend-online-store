import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

export default class Header extends Component {
  render() {
    const {
      queryInput,
      handleButtonQuery,
      handleChange,
      numberOfProducts,
    } = this.props;

    return (
      <header>
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
        <Link to="/shopping-cart">
          <span data-testid="shopping-cart-size">{numberOfProducts}</span>
          <button>
            Carrinho de compras
          </button>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  handleButtonQuery: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  queryInput: PropTypes.string.isRequired,
};
