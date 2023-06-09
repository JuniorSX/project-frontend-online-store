import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Categories from '../components/Categories/Categories';
import { getProductsFromQuery, getCategoryId } from '../services/api';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header';

class Home extends Component {
  state = {
    queryInput: '',
    isQuery: false,
    queryData: [],
  };

  componentDidMount() {
    const { handleNumberOfProducts } = this.props;
    handleNumberOfProducts();
  }

  handleButtonQuery = async (event) => {
    event.preventDefault();
    const { queryInput } = this.state;
    const queryData = await getProductsFromQuery(queryInput);
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

  getSelectedCategory = async ({ target: { id } }) => {
    const category = await getCategoryId(id);
    this.setState({
      queryData: category.results,
    });
  };

  render() {
    const {
      redirect,
      queryInput,
      isQuery,
      queryData,
    } = this.state;

    const { numberOfProducts, handleNumberOfProducts } = this.props;
    return (
      <>
        <Header
          redirect={ redirect }
          queryInput={ queryInput }
          handleButtonQuery={ this.handleButtonQuery }
          handleChange={ this.handleChange }
          numberOfProducts={ numberOfProducts }
        />
        <div className="main-section">
          <section>
            <Categories getSelectedCategory={ this.getSelectedCategory } />
          </section>
          <section className="content">
            {isQuery ? <h2>Nenhum produto foi encontrado</h2>
              : (
                <ProductList
                  queryData={ queryData }
                  handleNumberOfProducts={ handleNumberOfProducts }
                />
              )}
          </section>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  handleNumberOfProducts: PropTypes.func,
  numberOfProducts: PropTypes.number,
}.isRequired;

export default Home;
