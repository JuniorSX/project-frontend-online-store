import React, { Component } from 'react';
import Categories from '../components/Categories/Categories';
import { getProductsFromQuery, getCategoryId } from '../services/api';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header';

class Home extends Component {
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
    const { redirect, queryInput, isQuery, queryData } = this.state;
    return (
      <>
        <Header
          redirect={ redirect }
          queryInput={ queryInput }
          handleButtonChart={ this.handleButtonChart }
          handleButtonQuery={ this.handleButtonQuery }
          handleChange={ this.handleChange }

        />
        <div className="main-section">
          <section>
            <Categories getSelectedCategory={ this.getSelectedCategory } />
          </section>
          <section>
            {isQuery ? <h2>Nenhum produto foi encontrado</h2>
              : (
                <ProductList queryData={ queryData } />
              )}
          </section>
        </div>
      </>
    );
  }
}

export default Home;
