import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';
import logo from '../../img/logo.svg';

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
              placeholder="Digite algum termo de pesquisa ou escolha uma categorian"
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
        <img src={ logo } alt="logo" />
        <Link to="/shopping-cart">
          <button className="button square m-1" data-testid="shopping-cart-button">
            <span className="mif-cart" />
            <span
              className="badge bg-red fg-white"
              data-testid="shopping-cart-size"
            >
              {numberOfProducts}
            </span>
          </button>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  handleButtonQuery: PropTypes.func,
  handleChange: PropTypes.func,
  queryInput: PropTypes.string,
  numberOfProducts: PropTypes.number,
}.isRequired;
