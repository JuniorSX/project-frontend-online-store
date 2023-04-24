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
    numberOfProducts: 0,
  };

  componentDidMount() {
    this.handleNumberOfProducts();
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

  handleNumberOfProducts = () => {
    const previousProducts = localStorage.getItem('cart');
    if (previousProducts) {
      this.setState({
        numberOfProducts: JSON.parse(previousProducts).length,
      });
    }
  };

  render() {
    const {
      redirect,
      queryInput,
      isQuery,
      queryData,
      numberOfProducts,
    } = this.state;
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
          <section>
            {isQuery ? <h2>Nenhum produto foi encontrado</h2>
              : (
                <ProductList
                  queryData={ queryData }
                  handleNumberOfProducts={ this.handleNumberOfProducts }
                />
              )}
          </section>
        </div>
      </>
    );
  }
}

export default Home;
