import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import { getProductById } from '../services/api';

export default class ProductDetail extends Component {
  state = {
    product: '',
    numberOfProducts: 0,
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.loadProduct(id);
    this.handleNumberOfProducts();
  }

  handleNumberOfProducts = () => {
    const previousProducts = localStorage.getItem('cart');
    if (previousProducts) {
      this.setState({
        numberOfProducts: JSON.parse(previousProducts).length,
      });
    }
  };

  loadProduct = async (id) => {
    const result = await getProductById(id);

    this.setState({
      product: result,
    });
  };

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { product, numberOfProducts } = this.state;
    return (
      <ProductCard
        product={ product }
        handleBack={ this.handleBack }
        numberOfProducts={ numberOfProducts }
        handleNumberOfProducts={ this.handleNumberOfProducts }
      />
    );
  }
}
ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}.isRequired;
