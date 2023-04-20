import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import { getProductById } from '../services/api';

export default class ProductDetail extends Component {
  state = {
    product: '',
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.loadProduct(id);
  }

  loadProduct = async (id) => {
    const result = await getProductById(id);

    this.setState({
      product: result,
    });
  };

  render() {
    const { product } = this.state;
    return (
      <ProductCard product={ product } />
    );
  }
}
ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
